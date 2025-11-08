import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import connectDB from "./config/connectionDB.js";
import userRouter from "./Routes/userRoutes.js";
import collabRouter from "./Routes/collabRoutes.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://prep-track-nine.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is runnning...");
});

app.use("/api/user", userRouter);
app.use("/api/rooms", collabRouter);

connectDB();
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
