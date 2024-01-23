const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/practiseDB');
  // this line conncet our app to database 

  // this  will line create a model which is having this schema 
let userSchema = mongoose.Schema({
  name : String ,
  email : String ,
  password : String,
  age : Number,
 
})


module.exports = mongoose.model("user" , userSchema)