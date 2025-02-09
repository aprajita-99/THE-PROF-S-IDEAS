import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import blogrouter from './routes/blogRoutes.js'
import projectrouter from './routes/projectRoutes.js'
import Researchrouter from './routes/researchPaperRoutes.js'
import Conferencerouter from './routes/ConferenceRoutes.js';
import AchievementRouter from './routes/AchievementRoutes.js'
const app = express()
const port = 5000
connectDB()

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())
app.use('/api/user',userRouter);
app.use('/api/blog',blogrouter);
app.use('/api/project',projectrouter);
app.use('/api/researchPaper',Researchrouter);
app.use("/api/conference",Conferencerouter);
app.use("/api/Achievement",AchievementRouter);

app.get('/',(req,res)=>{
    res.send("API Working")
})
app.listen(port, ()=> console.log('Server started on PORT : '+ port))