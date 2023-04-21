import express from "express";
import jwt from "jsonwebtoken";
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

export const sendVerifyEmail = async (name, gmail, user_id) => {
  try {
    const mailOptions = {
      from: "cryptodeveloper@gmail.com",
      to: gmail,
      subject: "For verify mail",
      html: `Hi ${name}, please click here <a href="http://localhost:4000/verify?id=${user_id}"> to verify mail.</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      console.log("🚀 ~ mailOptions", mailOptions);
      if (error) {
        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later",
        });
      } else {
        res.send({
          success: true,
          message: "Email has been sent, please verify",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
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
    // try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      gmail: req.body.gmail,
      password: hashedPassword,
      hashedpass: req.body.password,
    });

    const userData = await user.save();

    if (userData) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "cryptodeveloper@gmail.com",
            pass: "bogipejfnkqcribt",
          },
        });

        const mailOptions = {
          from: "cryptodeveloper@gmail.com",
          to: req.body.gmail,
          subject: "For verify mail",
          html: `Hi ${user.name}, please click here <a href="http://localhost:4000/verify?id=${user._id}"> to verify mail.</p>`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          console.log("🚀 ~ mailOptions", mailOptions);
          if (error) {
            res.status(500).send({
              success: false,
              message: error,
            });
          } else {
            const jToken = jwt.sign(
              {
                id: user._id,
              },
              process.env.JWT_SECRET
            );

            res.cookie("jwtToken", jToken, {
              // httpOnly: true,
              // secure: true,
              maxAge: 72 * 60 * 60 * 1000,
            });

            res.status(201).json({
              token: jToken,
              user: {
                name: user.name,
                gmail: user.gmail,
                _id: user._id,
              },
              message: "Email has been sent at" + user.gmail + "please verify",
            });
            // res.send({
            //   success: true,
            //   message: "Thanks for contacting us. We will get back to you shortly",
            // });
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
    const { gmail, password } = req.body;

    const user = await User.findOne({
      gmail,
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
        gmail: user.gmail,
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
