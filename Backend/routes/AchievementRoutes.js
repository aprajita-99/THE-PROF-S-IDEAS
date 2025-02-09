import mongoose from "mongoose";
import express from "express";
const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title of the achievement
  description: { type: String, required: true }, // Description of the achievement
  createdAt: { type: Date, default: Date.now }, // Creation timestamp
});
const Achievement = mongoose.model("Achievement", AchievementSchema);
const AchievementRouter = express.Router();
AchievementRouter.post("/add", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and description are required" });
    }
    const newAchievement = new Achievement({
      title,
      description,
    });

    await newAchievement.save();
    res.status(201).json({
      success: true,
      message: "Achievement added successfully",
      achievement: newAchievement,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add achievement", error });
  }
});

AchievementRouter.get("/", async (req, res) => {
  try {
    console.log("trying to connect");
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, achievements });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch achievements", error });
  }
});


AchievementRouter.delete("/delete/:id", async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) {
      return res.status(404).json({ success: false, message: "Achievement not found" });
    }
    await Achievement.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete achievement", error });
  }
});

export default AchievementRouter;
