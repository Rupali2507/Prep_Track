import express from "express";
import {
  registerUser,
  loginUser,
  getDashboard,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/AuthMiddleware.js";
const userRouter = express.Router();

userRouter.post("/signup", registerUser);
userRouter.post("/signin", loginUser);
userRouter.get("/dashboard", authMiddleware, getDashboard);

export default userRouter;
