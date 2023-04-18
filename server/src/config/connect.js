// external imports
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

const DB_URL = process.env.DB_URL;

export async function dbConnect() {
  mongoose.set('strictQuery', false || true);
  mongoose.connect(DB_URL).then(() => {
    // if (error) {
      console.log("Connected to MongoDB");
    // } else {
      // console.log("Connected to MongoDB");
    // }
  }).catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });
}
