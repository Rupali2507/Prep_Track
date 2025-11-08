import express from "express";
import {
  createRoom,
  getRooms,
  deleteRoom,
  inviteMember,
  sendMessage,
} from "../controllers/collabController.js";
import { authMiddleware } from "../middlewares/AuthMiddleware.js";

const collabRouter = express.Router();

collabRouter.post("/", authMiddleware, createRoom);
collabRouter.get("/", authMiddleware, getRooms);
collabRouter.delete("/:id", authMiddleware, deleteRoom);
collabRouter.post("/:id/invite", authMiddleware, inviteMember);
collabRouter.post("/:id/message", authMiddleware, sendMessage);

export default collabRouter;
