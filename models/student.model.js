const mongoose = require("mongoose");

const {STUDENT} = require("../constants/roles");

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        default:""
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:STUDENT
    },
    createdAt:{
        type:Date,
        default:()=>{
            return Date.now()
        }
    }
})


module.exports = mongoose.model("Students",studentSchema)