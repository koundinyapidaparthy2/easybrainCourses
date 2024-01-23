import express from "express"
import dotenv from "dotenv"
import cors from "cors"
const app = express();

dotenv.config();

const PORT = process.env.PORT;


app.use(cors())

app.get("/courses",(req,res)=>{
 res.send("Welcome From Courses with port " + PORT)   
})


app.listen(PORT,()=>{
    console.log("Courses App is working on Port "+ PORT)
})