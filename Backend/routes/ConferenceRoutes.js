import mongoose from "mongoose";
import express from "express";

const ConferenceSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  videoUrl: { type: String, required: true }, // Video link
  insights: { type: String, required: true }, // Key takeaways
  date: { type: Date, required: true }, // Conference date
  createdAt: { type: Date, default: Date.now },
});

const Conference = mongoose.model("Conference", ConferenceSchema);
const Conferencerouter = express.Router();

// Add a new conference
Conferencerouter.post("/add", async (req, res) => {
  try {
    const { topic, videoUrl, insights, date } = req.body;
    if (!topic || !videoUrl || !insights || !date) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newConference = new Conference({
      topic,
      videoUrl,
      insights,
      date,
    });

    await newConference.save();

    res.status(201).json({ 
      success: true, 
      message: "Conference added successfully", 
      conference: newConference 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add conference", error });
  }
});

// Get all conferences
Conferencerouter.get("/", async (req, res) => {
  try {
    const conferences = await Conference.find().sort({ date: -1 });
    res.status(200).json({ success: true, conferences });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch conferences", error });
  }
});

// Get a single conference by ID
Conferencerouter.get("/:id", async (req, res) => {
  try {
    const conference = await Conference.findById(req.params.id);
    if (!conference) {
      return res.status(404).json({ success: false, message: "Conference not found" });
    }
    res.status(200).json({ success: true, conference });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch conference", error });
  }
});

// Delete a conference
Conferencerouter.delete("/delete/:id", async (req, res) => {
  try {
    const conference = await Conference.findById(req.params.id);
    if (!conference) {
      return res.status(404).json({ success: false, message: "Conference not found" });
    }

    await Conference.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Conference deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete conference", error });
  }
});

export default Conferencerouter;
