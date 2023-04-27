import express from "express";
import { baseEndpoint, register, login, verifyMail, forgotPassword, setForgotPassword, verify_Mail, IsUserVerified } from "../controllers/authctrl.js";
import { sendMail } from "../controllers/contactctrl.js";

const router = express.Router();
router.get("/", baseEndpoint);
router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyMail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", setForgotPassword);
router.post("/sendmail", sendMail);
router.get("/verify-mail", verify_Mail);
router.get("/isverify/:id",IsUserVerified);

export default router;