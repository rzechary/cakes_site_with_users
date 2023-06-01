
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {auth} = require("../Middlewares/auth")
const {UserModel,validUser, validLogin,createToken} = require("../models/userModel")

router.get("/",(req,res)=>{
    res.json({msg:"users work perfect 13:34!"})
})
module.exports= router;


