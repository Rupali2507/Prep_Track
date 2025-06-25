import React, { useState } from "react";
import { toast } from "react-toastify";
import { usePageContext } from "../context/PageContext";

const AddGoal = ({ onClose }) => {
  const {
    title,
    setTitle,
    deadline,
    setDeadline,
    description,
    setDescription,
    goals,
    setGoals,
  } = usePageContext();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      if (!title || !description || !deadline) {
        toast.error("Please fill in all fields");
      }
      const newGoal = {
        title,
        description,
        deadline,
      };
      console.log(newGoal);
      if (title.trim() && description.trim()) {
        setGoals([...goals, newGoal]);
        setTitle("");
        setDescription("");
        setDeadline("");

        if (onClose) onClose();
      }
      toast.success("Goal added successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute top-[40%] sm:left-[30%] lg:left-[40%] w-[400px]  md:w-1/2 h-1/2 lg:w-1/4 border-gray-700 border-2 rounded-lg p-5 flex flex-col gap-1 shadow-md shadow-[#00FFFF] "
    >
      <h1 className="flex justify-center">New Goal</h1>
      <label className="block text-sm font-medium  mb-1">Title</label>
      <input
        type="text"
        placeholder=" Add tittle"
        className="border-2 border-gray-800 rounded px-3 py-2 w-full"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="block text-sm font-medium  mb-1">Description</label>
      <textarea
        className=" border-2 border-gray-800 rounded px-3 py-2 w-full h-30"
        placeholder="Add description"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className="block text-sm font-medium  mb-1">Deadline</label>
      <input
        type="date"
        className="border-2 border-gray-800 rounded px-3 py-2 w-full"
        required
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <div className="flex justify-center mt-4">
        <button
          style={{ backgroundColor: "#00FFFF", color: "black" }}
          className="w-1/2 px-4 py-2 border-1 border-gray-700 rounded-lg"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddGoal;
