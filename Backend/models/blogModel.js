import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);
export default blogModel;
