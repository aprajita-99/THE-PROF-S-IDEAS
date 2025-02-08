import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import blogrouter from './routes/blogRoutes.js'
// App Config
const app = express()
const port = 5000
connectDB()

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/blog',blogrouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))