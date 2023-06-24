const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  name:{type:String},

  email:{type:String,required:true},
  password:{type:String,required:true}

},{
    versionKey:false
})
// this small "user" is the name of the collection it will automatically convert into plural form 
const UserModel=mongoose.model("user",userSchema);
module.exports={UserModel};