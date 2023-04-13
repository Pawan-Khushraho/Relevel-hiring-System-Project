const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    _companyId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    applicants:{
        type: Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:()=>{
            return Date.now()
        }
    }
})


module.exports = mongoose.model("Jobs",jobSchema)