import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url';
import path from 'path';
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import blogrouter from './routes/blogRoutes.js'
import Researchrouter from './routes/researchPaperRoutes.js'
import Conferencerouter from './routes/ConferenceRoutes.js';
import AchievementRouter from './routes/AchievementRoutes.js'
import router from './routes/ProjectRoutes.js';
const app = express()
const port = 5000
connectDB()
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/user',userRouter);
app.use('/api/blog',blogrouter);
app.use('/api/projects',router);
app.use('/api/researchPaper',Researchrouter);
app.use("/api/conference",Conferencerouter);
app.use("/api/Achievement",AchievementRouter);
app.get('/',(req,res)=>{
    res.send("API Working")
})
app.listen(port, ()=> console.log('Server started on PORT : '+ port))