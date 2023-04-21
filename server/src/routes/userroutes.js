import express from "express";
import { baseEndpoint, register, login, logout, verifyMail, forgotPassword, setForgotPassword } from "../controllers/authctrl.js";

const router = express.Router();
router.get("/", baseEndpoint);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", verifyMail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", setForgotPassword);

export default router;