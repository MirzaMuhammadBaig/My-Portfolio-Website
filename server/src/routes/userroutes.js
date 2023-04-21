import express from "express";
import { baseEndpoint, register, login, logout, verifyMail } from "../controllers/authctrl.js";

const router = express.Router();
router.get("/", baseEndpoint);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", verifyMail);

export default router;