import express from "express";
import Project from "../models/projectModel.js";
const projectrouter = express.Router();

// projectrouter.post("/add" , async (req, res) => {
//   try {
//     const { title, ldescription, description, image, link } = req.body;
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       resource_type: "video",
//       folder: "project_videos",
//     });
//     fs.unlinkSync(req.file.path);

//     const newProject = new Project({ 
//       title, 
//       ldescription, 
//       description, 
//       image, 
//       videoUrl: result.secure_url,
//       link 
//     });

//     await newProject.save();
//     res.status(201).json({ 
//       success: true, 
//       message: "Project added successfully", 
//       project: newProject 
//     });

//   } catch (error) {
//     res.status(500).json({ success: false, message: "Failed to add project", error });
//   }
// });

projectrouter.delete("/delete/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });
    res.status(200).json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete project", error });
  }
});

export default projectrouter;
