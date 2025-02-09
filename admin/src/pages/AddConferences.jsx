import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const AddConferences = ({ token }) => {
  const [topic, setTopic] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [insights, setInsights] = useState("");
  const [date, setDate] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!topic.trim() || !videoUrl.trim() || !insights.trim() || !date.trim()) {
      toast.error("All fields are required");
      return;
    }
    const formData = {
      topic,
      videoUrl,
      insights,
      date,
    };

    console.log(formData);

    try {
      const response = await axios.post(`${backendUrl}/api/conference/add`, formData, {
        headers: {
          "Content-Type": "application/json",
          token,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setTopic("");
        setVideoUrl("");
        setInsights("");
        setDate("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error in API request:", error);
      toast.error("An error occurred while adding the conference.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Conference Topic</p>
        <input
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter conference topic"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Video URL</p>
        <input
          onChange={(e) => setVideoUrl(e.target.value)}
          value={videoUrl}
          className="w-full max-w-[500px] px-3 py-2"
          type="url"
          placeholder="Enter video URL (YouTube, etc.) use youtube.com/embed "
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Insights</p>
        <textarea
          onChange={(e) => setInsights(e.target.value)}
          value={insights}
          className="w-full max-w-[500px] px-3 py-2 h-32 resize-none"
          placeholder="Enter key insights from the conference"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Date</p>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="w-full max-w-[500px] px-3 py-2"
          type="date"
          required
        />
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default AddConferences;
