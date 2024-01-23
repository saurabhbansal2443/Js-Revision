import express from 'express'   // npm i -g nodemon // nodemon index.js 
const app = express();
import obj from "./data.js"
let port = 3000;


app.set("view engine" , "ejs");


app.use((req,res,next)=>{
  console.log("Middle1 ware is running ");
  next()
})

app.use((req,res,next)=>{
  console.log("Middle2 ware is running ");
  next()
})



app.get('/', (req, res)=> {
  res.send('Hello express JS i am backend')
})

 

app.get('/profile/:name', (req, res)=> {  

  res.render("index" , {name : req.params.name})
})

app.get('/about', (req, res)=> {
  
 res.send("Hello from about page ")
})

app.get("/apidata",(req,res)=>{
  res.json(obj);
  app.status(200)
})

app.listen(port , ()=>{
    console.log("Server is running ")
})