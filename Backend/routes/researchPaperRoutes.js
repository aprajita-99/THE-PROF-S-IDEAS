import mongoose from "mongoose";
import express from "express";

const ResearchPaperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true }, // Added description instead of pdfPath
  createdAt: { type: Date, default: Date.now },
});

const ResearchPaper = mongoose.model("ResearchPaper", ResearchPaperSchema);
const Researchrouter = express.Router();
Researchrouter.post("/add", async (req, res) => {
  try {
    const { name, category, description } = req.body;
    if (!name || !category || !description) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newPaper = new ResearchPaper({
      name,
      category,
      description,
    });

    await newPaper.save();

    res.status(201).json({ 
      success: true, 
      message: "Research paper added successfully", 
      paper: newPaper 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add research paper", error });
  }
});

Researchrouter.get("/", async (req, res) => {
  try {
    const papers = await ResearchPaper.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, papers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch research papers", error });
  }
});

Researchrouter.get("/:id", async (req, res) => {
  try {
    const paper = await ResearchPaper.findById(req.params.id);
    if (!paper) {
      return res.status(404).json({ success: false, message: "Research paper not found" });
    }
    res.status(200).json({ success: true, paper });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch research paper", error });
  }
});
Researchrouter.delete("/delete/:id", async (req, res) => {
  try {
    const paper = await ResearchPaper.findById(req.params.id);
    if (!paper) {
      return res.status(404).json({ success: false, message: "Research paper not found" });
    }

    await ResearchPaper.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Research paper deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete research paper", error });
  }
});
export default Researchrouter;




