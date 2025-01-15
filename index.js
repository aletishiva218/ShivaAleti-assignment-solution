import express from "express";
import checkPrime from "./Routes/prime.js";
import queueOp from "./Routes/queue.js";
import factorial from "./Routes/factorial.js";
import sort from "./Routes/bubblesort.js";
import searchNumber from "./Routes/binarysearch.js";
 
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/api",(req,res)=> res.status(200).json({status:"Ok",message:"API is working"}))
app.post("/api/checkprime",checkPrime)
app.post("/api/enqueue",queueOp.enqueue)
app.get("/api/dequeue",queueOp.dequeue)
app.post("/api/factorial",factorial)
app.post("/api/bubblesort",sort)
app.post("/api/find",searchNumber)

app.listen(3000,()=>console.log("Api is started at port 3000"))