import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { usePageContext } from "../context/PageContext";
import TopBar from "../components/TopBar";
import {
  FaHandshake,
  FaTrashAlt,
  FaComments,
  FaArrowLeft,
} from "react-icons/fa";

const CollabRooms = () => {
  const { visibility } = usePageContext();
  const [showForm, setShowForm] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    roomName: "",
    topic: "",
    participants: "",
  });
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const storedRooms = JSON.parse(localStorage.getItem("collabRooms")) || [];
    setRooms(storedRooms);
  }, []);

  // Save rooms to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("collabRooms", JSON.stringify(rooms));
  }, [rooms]);

  // Save chat per room
  useEffect(() => {
    if (selectedRoom) {
      const savedChat =
        JSON.parse(localStorage.getItem(`chat_${selectedRoom.id}`)) || [];
      setChatMessages(savedChat);
    }
  }, [selectedRoom]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRoom = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toLocaleString(),
    };
    setRooms((prev) => [...prev, newRoom]);
    setFormData({ roomName: "", topic: "", participants: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updated = rooms.filter((r) => r.id !== id);
    setRooms(updated);
    localStorage.removeItem(`chat_${id}`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    const newMessage = {
      text: messageInput,
      sender: "You",
      time: new Date().toLocaleTimeString(),
    };
    const updatedMessages = [...chatMessages, newMessage];
    setChatMessages(updatedMessages);
    localStorage.setItem(
      `chat_${selectedRoom.id}`,
      JSON.stringify(updatedMessages)
    );
    setMessageInput("");
  };

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <div className={`${visibility ? "flex" : "hidden"} lg:flex`}>
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <TopBar />

        {/* If a room is selected, show chat view */}
        {selectedRoom ? (
          <div className="flex flex-col h-[90vh] mx-4 my-2 border border-gray-700 rounded-2xl shadow-2xl shadow-gray-800 bg-gray-900/50 backdrop-blur-sm">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
              <div>
                <h2 className="text-2xl font-semibold text-cyan-400">
                  {selectedRoom.roomName}
                </h2>
                <p className="text-gray-400 text-sm">{selectedRoom.topic}</p>
              </div>
              <button
                onClick={() => setSelectedRoom(null)}
                className="text-gray-300 hover:text-cyan-400 flex items-center gap-2"
              >
                <FaArrowLeft /> Back
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {chatMessages.length === 0 ? (
                <p className="text-gray-500 text-center">
                  💬 No messages yet. Start the conversation!
                </p>
              ) : (
                chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "You" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[70%] ${
                        msg.sender === "You"
                          ? "bg-cyan-600 text-white"
                          : "bg-gray-800 text-gray-200"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs mt-1 opacity-70 text-right">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input Box */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-gray-700 p-4 flex gap-3"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-semibold"
              >
                Send
              </button>
            </form>
          </div>
        ) : (
          // Default view (create/join room)
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[18rem] transition-all duration-500 ${
              visibility ? "ml-64" : ""
            } lg:ml-64`}
          >
            {/* Left Section */}
            <div className="col-span-2 row-span-2 border border-gray-700 rounded-2xl shadow-2xl shadow-gray-800 m-4 flex flex-col justify-center items-center gap-4 bg-gray-900/40 backdrop-blur-sm">
              <FaHandshake className="text-cyan-400 size-12" />
              <h2 className="text-2xl font-semibold text-gray-300 text-center">
                Collaborate and Grow Together
              </h2>
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg shadow border border-gray-800 cursor-pointer"
              >
                Start Collaboration
              </button>
            </div>

            {/* Right Section - Active Rooms */}
            <div className="border row-span-2 border-gray-700 rounded-2xl shadow-2xl shadow-gray-800 m-4 bg-gray-900/40 backdrop-blur-sm flex flex-col p-4 overflow-y-auto">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3 text-center">
                🤝 Active Rooms
              </h3>
              {rooms.length === 0 ? (
                <p className="text-gray-400 text-center mt-8">
                  No rooms yet. Create one to collaborate!
                </p>
              ) : (
                <ul className="space-y-3">
                  {rooms.map((room) => (
                    <li
                      key={room.id}
                      className="border border-gray-700 rounded-xl p-3 bg-gray-800/50 hover:bg-gray-800 transition flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-200 text-lg">
                          {room.roomName}
                        </h4>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setSelectedRoom(room)}
                            className="text-cyan-400 hover:text-cyan-300"
                            title="Join Room"
                          >
                            <FaComments />
                          </button>
                          <button
                            onClick={() => handleDelete(room.id)}
                            className="text-red-500 hover:text-red-400"
                            title="Delete Room"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">{room.topic}</p>
                      {room.participants && (
                        <p className="text-xs text-gray-500 italic">
                          👥 {room.participants}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 text-right">
                        🕒 {room.createdAt}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal for New Collaboration */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-[90%] max-w-md shadow-2xl">
            <h2 className="text-2xl mb-4 font-semibold text-cyan-400 text-center">
              Create a Collaboration Room
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-300 mb-1">Room Name</label>
                <input
                  type="text"
                  name="roomName"
                  value={formData.roomName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Topic</label>
                <input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">
                  Participants (comma separated)
                </label>
                <input
                  type="text"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-semibold"
                >
                  Create Room
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollabRooms;
