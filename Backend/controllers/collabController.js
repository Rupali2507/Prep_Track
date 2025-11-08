import CollabRoom from "../models/collabRoomModel.js";
import User from "../models/userModel.js";

export const createRoom = async (req, res) => {
  try {
    const { name, topic, description } = req.body;

    if (!name || !topic)
      return res.status(400).json({ message: "Name and topic are required" });

    const room = await CollabRoom.create({
      name,
      topic,
      description,
      createdBy: req.user._id,
      members: [req.user._id],
    });
    res.status(201).json({ room });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await CollabRoom.find({ members: req.user._id })
      .populate("createdBy", "name email")
      .populate("memebers", "name email");
    res.json({ rooms });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const room = await CollabRoom.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });

    if (room.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }
    await room.deleteOne();
    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const inviteMember = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const room = await CollabRoom.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });

    if (!room.members.includes(user._id)) {
      room.members.push(user._id);
      await room.save();
    }
    res.json({ message: "Member invited sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const room = await CollabRoom.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });

    room.messages.push({ sender: req.user._id, text });
    await room.save();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
