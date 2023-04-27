import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({});

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  }
});