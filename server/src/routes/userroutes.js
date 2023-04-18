import express from "express";
import { baseEndpoint, register, login, logout } from "../controllers/authctrl.js";

const router = express.Router();
router.get("/", baseEndpoint);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;