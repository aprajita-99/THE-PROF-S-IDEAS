import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";
import { assets } from "../assets/assets";

const AddProjects = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !longDescription.trim() || !image || !video) {
      toast.error("All fields are required");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("longDescription", longDescription);
    formData.append("image", image);
    formData.append("video", video);

    try {
      const response = await axios.post(`${backendUrl}/api/projects/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`, 
        },
      });
      if (response.data && response.data) {
        toast.success(response.data.message || "Project added successfully!");
        setTitle("");
        setDescription("");
        setLongDescription("");
        setImage(null);
        setVideo(null);
      } else {
        toast.error(response.data.message || "Error in adding project.");
      }
    } catch (error) {
      console.log("Error in API request:", error);
      toast.error("An error occurred while adding the project.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Project Title</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter project title"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 h-32 resize-none"
          placeholder="Enter short project description"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Long Description</p>
        <textarea
          onChange={(e) => setLongDescription(e.target.value)}
          value={longDescription}
          className="w-full max-w-[500px] px-3 py-2 h-32 resize-none"
          placeholder="Enter detailed project description"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Image</p>
        <img className="w-20" src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="Preview" />
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          className="w-full max-w-[500px] px-3 py-2"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Video</p>
        {video && <video className="w-20" controls src={URL.createObjectURL(video)} />}
        <input
          onChange={(e) => setVideo(e.target.files[0])}
          type="file"
          className="w-full max-w-[500px] px-3 py-2"
          accept="video/*"
          required
        />
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD PROJECT
      </button>
    </form>
  );
};

export default AddProjects;


