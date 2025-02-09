import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const AddResearchPapers = ({ token }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      toast.error("Please provide a research paper description");
      return;
    }

    const formData = {
      name,
      category,
      description,
    };
    try {
      const response = await axios.post(`${backendUrl}/api/researchPaper/add`, formData, {
        headers: { 
          "Content-Type": "application/json",
          token,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setCategory("");
        setDescription("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the research paper.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Research Paper Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter research paper name"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Category</p>
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter category"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Research Paper Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 h-32 resize-none"
          placeholder="Enter a detailed description of the research paper"
          required
        />
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};
export default AddResearchPapers;

