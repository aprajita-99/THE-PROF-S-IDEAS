import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [5, 'Title must be at least 5 characters long'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [2, 'Description must be at least 20 characters long']
    },
    longDescription: {
      type: String,
      required: [true, 'Long description is required'],
      trim: true,
      minlength: [5, 'Long description must be at least 50 characters long']
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    videoUrl:{
      type: String,
      required: [true, 'video URL is required'],
    },
  },
  {
    timestamps: true
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
