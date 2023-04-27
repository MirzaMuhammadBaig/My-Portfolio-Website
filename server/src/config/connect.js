// external imports
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

const DB_URL = process.env.DB_URL;

export async function dbConnect() {
  mongoose.set('strictQuery', false || true);
  mongoose.connect(DB_URL).then(() => {
    console.log("Connected to Database(MongoDB)");
  }).catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });
}
