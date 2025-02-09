import mongoose from 'mongoose';
import express from 'express';
import cloudinary from '../config/cloudinary.js'; 
import upload from '../middleware/multer.js';
import Project from '../models/ProjModels.js';

const router = express.Router();


router.post('/add', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]), async (req, res) => {
  try {
    if (!req.files['image'] || !req.files['video']) {
      return res.status(400).json({ message: 'Image and Video files are required' });
    }
    const imageResult = await cloudinary.v2.uploader.upload(req.files['image'][0].path, {
      resource_type: "image"
    });
    const videoResult = await cloudinary.v2.uploader.upload(req.files['video'][0].path, {
      resource_type: "video"
    });


    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      longDescription: req.body.longDescription,
      imageUrl: imageResult.url,
      videoUrl: videoResult.url
    });

    await newProject.save();
    res.status(201).json({ message: 'Project created successfully!', newProject });

  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Failed to create project' });
  }
});

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Failed to fetch project' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

export default router;




