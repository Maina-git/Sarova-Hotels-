import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
//import  cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
//app.use(cors())

const PORT = 3000;

app.get("/", (req, res)=>{
res.status(200).json({message:"welcome to sarova hotel for  backend"});
});


app.listen(PORT, ()=>{
    console.log(`Sarova hotels running on PORT ${PORT}`)
});

app.use("/api/auth", authRoutes);
























