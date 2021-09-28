const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const User = require("../model/user");
const JWT_SECRET = 'adsfa7efa6f5asfqefafg6a486dfaefadfaghdhf5h4dg8j7hsf'

exports.LoginUser = async(req,res)=>{

    const {username,password} = req.body
    
    const user = await User.findOne({username}).lean()
    
    if(!user) {
      return res.json({ status: "error", error: "Invalid Username or Password" });
    }
    
    if(await bcrypt.compare(password,user.password))
    {
      // Username password verification successfull
      const token = jwt.sign({id: user._id, username: user.username}, JWT_SECRET)
      return res.json({ status: "ok", data : token});
    }
    
    return res.json({ status: "error", error: "Invalid Username or Password" });
  }