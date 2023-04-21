import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbConnect } from "./config/connect.js";
import userroutes from "./routes/userroutes.js";

// execute database connection
dbConnect();

dotenv.config({});

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(userroutes);

const PORT = process.env.PORT || 3999;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
