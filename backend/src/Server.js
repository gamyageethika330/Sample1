import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './DB.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})

// app.get('/output/:name',async(req,res)=>
// {
//     const details=await db.collection("Gamya").findOne({Name:req.params.name})
//     res.json(details);
// })
//  app.get('/all',async(req,res)=>
//  {
//   const result=await db.collection("Gamya").find().toArray();
//      res.json(result);
//  })
//  app.get('/login/:name/:psw',async(req,res)=>{
//     const details=await db.collection('commonpro').findOne({Name:req.params.name,Password:req.params.psw})
//     res.json(details);
// })
// app.post('/admin/:name/:pnum/:email/:psw/',async(req,res)=>
// {
//     const details=await db.collection('commonpro').insertOne({Name:req.params.name,Phonenum:req.params.pnum,Email:req.params.email,Password:req.params.psw})
//     res.json(details);
// })
app.get('/login/:email/:psw',async(req,res)=>{
    const details=await db.collection('sample').findOne({Email:req.params.email,Password:req.params.psw})
    res.json(details);
})
app.post('/Login/:name/:pnum/:email/:psw/',async(req,res)=>
{
    const details=await db.collection('sample').insertOne({Name:req.params.name,Phonenum:req.params.pnum,Email:req.params.email,Password:req.params.psw})
    res.json(details);
})
app.post('/forgot/:email/:psw/:cpsw/',async(req,res)=>
{
    const details=await db.collection('sample').insertOne({Email:req.params.email,Password:req.params.password})
    res.json(details);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");})
})