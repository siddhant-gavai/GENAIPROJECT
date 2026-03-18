const mongoose = require("mongoose") ; 

const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : true , 
        unique : [true , "username already exists"]
    } ,
    email : {
        type : String , 
        required : true , 
        unique : [true , "account already exist with this email adress"] , 
    } ,
    password : {
        type : String , 
        required : true , 
    } ,
    
}) ; 

const userModel = mongoose.model("Users" , userSchema) ; 
module.exports = userModel ;
