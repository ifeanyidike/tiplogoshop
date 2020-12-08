import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import authRoutes from "./routes/authRoutes.js"
import cardRoutes from "./routes/cardRoutes.js"
import cardOrderRoutes from "./routes/cardOrderRoutes.js"
import jambChangeRoutes from "./routes/jambChangeRoutes.js"
import jambPasswordResetRoutes from "./routes/jambPasswordResetRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import connectDatabase from "./config/db.js"
import {notFound, errorHandler} from "./middlewares/errorMiddleware.js"


dotenv.config()
//connect database
connectDatabase()

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//configure body parser
app.use(express.json())

//middlewares
app.use('/api/users', authRoutes)
app.use('/api/cards', cardRoutes)
app.use('/api/cardorders', cardOrderRoutes)
app.use('/api/jambchange', jambChangeRoutes)
app.use('/api/jambpasswordreset', jambPasswordResetRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/', (req, res)=>{
    res.send("The backend is set up.")
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, 
    console.log(`Server running on ${process.env.NODE_ENV} mode or port ${PORT}`))