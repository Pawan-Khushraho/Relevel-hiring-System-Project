const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(process.env.DB_Url);
const db = mongoose.connection;

db.on("error",()=>{
    console.log("error while connecting to db");
})
db.once("open",()=>{
    console.log("connected to mongoDb");
})


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

module.exports = app;