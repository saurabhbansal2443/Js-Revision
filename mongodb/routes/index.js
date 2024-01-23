var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create" , async function(req,res){
     let user  = await userModel.create({
         name : "arpit",
         email : "arpit@gmail.com",
         password : "arpit",
         age : 24 
      })
     
      res.send(user);
})

router.get("/alluser" , async function(req,res){
      let alluser = await userModel.find();
      res.send(alluser)
})

router.get("/findone" , async function(req,res){
  let oneUser = await userModel.findOne({name:"arpit"});
  res.send(oneUser)
})


router.get("/delete" , async function(req,res){
    //  let deletedUser = await userModel.deleteOne({name:"arpit"});

    let deletedUser = await userModel.findOneAndDelete({name:"arpit"});

     res.send(deletedUser);
})


module.exports = router;
