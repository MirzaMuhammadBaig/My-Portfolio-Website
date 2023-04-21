import express from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";
import { transporter } from "../config/nodemailer.js";
import nodemailer from "nodemailer";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(cors());

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

export const verifyMail = async (req, res) => {
  try {
    const updateInfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { is_verified: true } }
    );
    console.log(updateInfo);
    res.status(201).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    console.log(`Error:- ${error.message}`);
    res.status(401).json({
      message: "Email not verified",
    });
  }
};

// Register route
export const register = async (req, res) => {
  try {

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

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
          from: process.env.EMAIL_ID,
          to: user.email,
          subject: "For verify mail",
          html: `Hi ${user.name}, please click here <a href="http://localhost:4000/verify?id=${user._id}"> to verify mail.</p>`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          console.log("🚀 ~ mailOptions", mailOptions);
          if (error) {
            res.status(500).send({
              success: false,
              message: `${error},Email not send`,
            });
          } else {
            const jToken = jwt.sign(
              {
                id: user._id,
              },
              process.env.JWT_SECRET
            );

            res.cookie("jwtToken", jToken, {
              httpOnly: true,
              secure: true,
              maxAge: 72 * 60 * 60 * 1000,
            });

            res.status(201).json({
              token: jToken,
              user: {
                name: user.name,
                email: user.email,
                _id: user._id,
              },
              message: "Email has been sent at" + user.email + "please verify",
            });
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later",
        });
      }
    } else {
      res.status(401).json({
        message: "Email not verified",
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
    });
  }
};

// Login route
export const login = async (req, res) => {
  try {
    // Find the user by email
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user)
      return res.status(400).json({
        error: "User does not exist. ",
      });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({
        error: "Invalid credentials. ",
      });

    const jToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("jwtToken", jToken, {
      httpOnly: true,
      secure: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    res.status(201).json({
      token: jToken,
      user: {
        email: user.email,
        _id: user._id,
      },
      message: "User login successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

// Logout route
export const logout = async (req, res) => {
  res.clearCookie("jwtToken", {
    httpOnly: true,
    secure: true,
  });
  res.status(204).json({ message: "Logged out successfully" });
};


//////////////////////////////////

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: 'Reset Password',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://localhost:4000/reset-password/${token}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the response: ', response);
        res.status(200).json('recovery email sent');
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

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Token is invalid or has expired' });
    }

    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    res.status(200).json('password reset successful');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//////////////////////