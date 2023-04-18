import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import { User } from "../models/userModel.js";
import nodemailer from "nodemailer";

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

// Register route
export const register =  async (req, res) => {
  try {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        gmail: req.body.gmail,
        password: hashedPassword,
        hashedpass: req.body.password,
      });

      await user.save();

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
        message: "User created successfully",
      });
    } catch (error) {
      res.status(400).json({
        message: "Error in creating user",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong",
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