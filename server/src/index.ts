import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import { formRoute } from "./routes/form.route.js";
import morgan from 'morgan';
dotenv.config({})
import cors from "cors";
const app = express();



app.use(cors({
    origin: [
        "http://localhost:5173"
    ],
    credentials: true,
}));
app.use(express.json())
app.use(morgan("dev"));
app.use('/v1/api/form', formRoute)

app.get('/', (req, res) => {
    res.send("hello from server!!!")
})

const uri = process.env.MONGO_DB_URI;

if (!uri) {
    throw new Error("❌ MONGO_DB_URI is not defined in environment variables");
}

mongoose.connect(uri).then(() => {
    console.log("connected db")
}).catch(() => {
    console.error("connected db")

})



app.listen(4000, () => {
    console.log("hello from server!!!")
})