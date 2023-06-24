const express=require("express");
const {UserModel}=require("../model/user.model");
const Userrouter=express.Router();
Userrouter.get("/",async(req,res)=>{
    
    let user=await UserModel.find()
    res.send(user)
})

Userrouter.post("/signup", async(req, res) => {
  const { name, email, password } = req.body;
  //check email
  let user=await UserModel.findOne({ email:req.body.email} )
    if (user) {
      res.send({ message: "User is already registerd" });
    } else {
      const newuser = new UserModel({
        name,
        email,
        password,
      });
     await newuser.save();
      res.status(200).send("COngrates you have registered successfully");
    }
  });
  // res.send("register");
  //   console.log(req.body);

  Userrouter.post("/login", async(req, res) => {
    const { email, password } = req.body;
    //check email
   const user=await UserModel.findOne({  email:req.body.email })
      if (user) {
        //check password
        if (password === user.password) {
          res.send({ message: "Login successfully", user: user });
        } else {
          res.send({ message: "Password and confirm password didn't match" });
        }
      } else {
        res.send({ message: "Please login to proceed" });
      }
    });
    
    module.exports = {Userrouter};

  