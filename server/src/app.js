import express from "express";
const app = express();

app.get("/", async(req,res)=>{
    res.send("Working server")
})

export default app;