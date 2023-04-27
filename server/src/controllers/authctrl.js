import crypto from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";
import { transporter } from "../config/nodemailer.js";
import generateToken from "../config/token.js";
import expressAsyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongodbId.js";

dotenv.config({});

export const baseEndpoint = async (req, res) => {
  try {
    try {
      res.status(201).json({
        message: "Server running",
      });
    } catch (error) {
      res.status(401).json({
        error,
        message: "Server running",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Server error",
    });
  }
};

export const IsUserVerified = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const user = await User.findById(id);
    res.status(200).json({
      user,
      message: "Email verified successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const verifyMail = async (req, res) => {
  try {
    const updateInfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { is_verified: true } }
    );
    // console.log(updateInfo);
    res.status(201).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    // console.log(`Error:- ${error.message}`);
    res.status(400).json({
      message: "Email not verified",
    });
  }
};

// Register route
export const register = expressAsyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({
    email: email,
    is_verified: true,
  });

  if (!findUser) {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      await User.findOneAndRemove({
        email: req.body.email,
        is_verified: false,
      });

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        hashedpass: req.body.password,
      });

      const userData = await user.save();

      if (userData) {
        try {
          const mailOptions = {
            from: "blockchaindeveloper0990@gmail.com", // sender address
            to: user.email,
            subject: "For verify mail",
            html: `Hi ${user.name}, please click <a href="https://bwd-server-utgj.vercel.app/verify?id=${user._id}"> here </a>to verify mail.`,
          };

          // console.log(req.body.name, "This is response");

          transporter.sendMail(mailOptions, async function (error, info) {
            // console.log("🚀 ~ mailOptions", mailOptions);
            if (error) {
              await User.findByIdAndDelete(user._id);
              res.status(500).send({
                success: false,
                message: `${error},Email not send`,
              });
            } else {
              const token = generateToken(user?._id);
              const updateuser = await User.findByIdAndUpdate(
                user.id,
                {
                  token: token,
                },
                { new: true }
              );

              res.status(201).json({
                token: token,
                user: {
                  _id: user._id,
                  email: user.email,
                  name: user.name,
                  isVerified: user.is_verified,
                },
                message:
                  "Email has been sent at " + user.email + " please verify",
              });
            }
          });
        } catch (error) {
          // console.log(error);
          await User.findByIdAndDelete(user._id);
          res.status(504).send({
            success: false,
            message: "Something went wrong. Try again later",
          });
        }
      } else {
        await User.findByIdAndDelete(user._id);
        res.status(400).json({
          message: "Email not verified",
        });
      }
    } catch (error) {
      // console.error(error);
      res.status(500).json({
        error: "Server error",
      });
    }
  } else {
    throw new Error("User Already Exists");
  }
});

// Login route
export const login = expressAsyncHandler(async (req, res) => {
  try {
    // Find the user by email
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      is_verified: true,
    });

    if (!user) {
      return res.status(404).json({
        error: "User does not exist. ",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid credentials. ",
      });
    } else {
      const token = generateToken(user?._id);
      // console.log("token", token);
      const updateuser = await User.findByIdAndUpdate(
        user.id,
        {
          token: token,
        },
        { new: true }
      );
      res.status(201).json({
        token: token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        message: "User login successfully",
      });
    }
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

//////////////////////////////////

export const verify_Mail = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.query;
    validateMongoDbId(id);

    const user = await User.findOne({
      id,
    });

    const updateInfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { is_allowed_for_reset_pass: true } }
    );

    // console.log(updateInfo);
    res.status(201).json({
      message:
        "Email verified successfully" +
        `click on this https://bwd-server-utgj.vercel.app/reset-password/${user.resetPasswordToken} for set password`,
    });
  } catch (error) {
    // console.log(`Error:- ${error.message}`);
    res.status(401).json({
      message: "Email not verified",
    });
  }
});

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.is_verified === false) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const mailOptions = {
      from: "blockchaindeveloper0990@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        https://bwd-server-utgj.vercel.app/verify-mail?id=${user._id}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // console.log(req.body.email, "This is response");

    transporter.sendMail(mailOptions, (err, response) => {
      // console.log("🚀 ~ mailOptions", mailOptions);
      if (err) {
        // console.error('there was an error: ', err);
      } else {
        // console.log('here is the response: ', response);
        res.status(201).json({
          token: token,
          user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            is_allowed_for_reset_pass: user.is_allowed_for_reset_pass,
          },
          message:
            "Recovery email has been sent at " + user.email + " please verify",
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

////////////////////////

export const setForgotPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
      is_allowed_for_reset_pass: true,
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Token is invalid or has expired" });
    }

    user.password = hashedPassword;
    user.hashedpass = password;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    user.is_allowed_for_reset_pass = false;

    await user.save();

    res.status(200).json("password reset successfully");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//////////////////////
