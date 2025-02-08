import blogModel from '../models/blogModel.js'

const addBlog = async (req, res) => {
    try {
      const { title, content, author } = req.body;
      const newBlog = new blogModel({ title, content, author });
      await newBlog.save();
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: "Error creating blog" });
    }
  }

const getallblogs = async (req, res) => {
    try {
      const blogs = await blogModel.find();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: "Error fetching blogs" });
    }
  }

const getsingleblog =  async (req, res) => {
    try {
      const blog = await blogModel.findById(req.params.id);
      if (!blog) return res.status(404).json({ error: "Blog not found" });
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: "Error fetching blog" });
    }
  }

const updateblog = async (req, res) => {
    try {
      const updatedBlog = await blogModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });
      res.json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: "Error updating blog" });
    }
  }

const deleteBlog = async (req, res) => {
    try {
      const deletedBlog = await blogModel.findByIdAndDelete(req.params.id);
      if (!deletedBlog) return res.status(404).json({ error: "Blog not found" });
      res.json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting blog" });
    }
  }
export {addBlog,getallblogs,getsingleblog,updateblog,deleteBlog}