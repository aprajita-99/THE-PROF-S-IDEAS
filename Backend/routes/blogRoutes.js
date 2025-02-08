import express from "express";
const blogrouter = express.Router();
import {addBlog,getallblogs,getsingleblog,updateblog ,deleteBlog} from '../controllers/blogController.js'

blogrouter.post("/",addBlog);
blogrouter.get("/",getallblogs);
blogrouter.get("/:id",getsingleblog);
blogrouter.put("/:id", updateblog);
blogrouter.delete("/:id",deleteBlog);

export default blogrouter;
