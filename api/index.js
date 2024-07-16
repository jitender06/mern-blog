import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import UsereRoutes from './routes/User.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO)
.then(() => console.log("mongodb connected"))
.catch((err) => console.log(err))

const app = express()
app.use(express.json())


app.listen(4000, (req, res) => {
    console.log("server is running")
})

app.use("/api", UsereRoutes)

app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
    const statusCode =err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})