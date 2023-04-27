// external imports
import mongoose from "mongoose";

export async function dbConnect() {
  mongoose.set("strictQuery", false || true);
  mongoose
    .connect("mongodb+srv://e-commerce:e-commerce@cluster0.mdyju2s.mongodb.net")
    .then(() => {
      console.log("Connected to Database(MongoDB)");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB: ", err);
    });
}
