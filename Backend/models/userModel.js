import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      lowercase: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
