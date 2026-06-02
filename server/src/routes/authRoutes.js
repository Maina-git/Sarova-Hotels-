import express from "express";
/*
import { Login, Register } from "../controllers/authController.js";
*/
import { registerUser, loginUser } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;

























