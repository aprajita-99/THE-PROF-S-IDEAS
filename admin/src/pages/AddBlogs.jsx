import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { backendUrl } from '../App';

const AddBlogs = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      author,
    };
    try {
      const response = await axios.post(backendUrl + "/api/blog", formData, {
        headers: { token },
      });
      if (response.data) {
        toast.success(response.data.message);
        setTitle('');
        setDescription('');
        setAuthor('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error in API request:", error);
      toast.error("An error occurred while submitting the blog.");
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Blog Title</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Blog Content</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write content here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Blog Author</p>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Author Name"
          required
        />
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};
export default AddBlogs;

