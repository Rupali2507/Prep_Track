import express from "express";
import {
  registerUser,
  loginUser,
  getDashboard,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/AuthMiddleware.js";
const userRouter = express.Router();

userRouter.post("/signup", registerUser);
userRouter.post("/signin", loginUser);
userRouter.get("/dashboard", authMiddleware, getDashboard);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password/:token", resetPassword);

export default userRouter;
