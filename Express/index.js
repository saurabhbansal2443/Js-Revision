import express from 'express'   // npm i -g nodemon // nodemon index.js 
const app = express();
// import fs from "fs";
import obj from "./data.js"



// let data = fs.readFileSync("./data.js");



let port = 3000;

app.get('/', (req, res)=> {
  res.send('Hello express JS i am backend')
})

app.get('/profile', (req, res)=> {
  res.send('Hello from profile ')
})

app.get('/about', (req, res)=> {
  res.send('Hello from about ')
})

app.get("/apidata",(req,res)=>{
  res.json(obj);
})

app.listen(port , ()=>{
    console.log("Server is running ")
})