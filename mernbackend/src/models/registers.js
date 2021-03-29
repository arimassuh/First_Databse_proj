     
//what is this?..Schema.  ok wtf is schema?Rollno,name,etc.which will be included in the database .  
//Ohh! so we mtach this schema so that the database can know that there is a "registers" file name which have schema? YES!

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname:
    {
        type:String,
        required:true
    },
    lastname:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    gender:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:String,
        required:true,
        unique:true
    },
    age:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    confirmpassword:
    {
        type:String,
        required:true
    },
  
})

//now we need to create collections

const Register =  new mongoose.model("Register", employeeSchema);
module.exports=Register;

