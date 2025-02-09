import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const AddAchievements = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast.error("All fields are required");
      return;
    }
    const formData = {
      title,
      description,
    };
    console.log(formData);
    try {
      const response = await axios.post(`${backendUrl}/api/Achievement/add`, formData, {
        headers: {
          "Content-Type": "application/json",
          token,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setTitle("");
        setDescription("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error in API request:", error);
      toast.error("An error occurred while adding the achievement.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Achievement Title</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter achievement title"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 h-32 resize-none"
          placeholder="Enter achievement description"
          required
        />
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default AddAchievements;
