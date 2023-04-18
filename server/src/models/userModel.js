import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  gmail: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email exist"],
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please procide a password"],
    minLength: [8, "Password should be greater than 8 characters"],
  },
  hashedpass: {
    type: String,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model("User", userSchema);
