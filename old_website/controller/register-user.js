const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const User = require("../model/user");

exports.registerUser = async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Username Invalid" });
  }
  if (!password || typeof password !== "string") {
    return res.json({ status: "error", error: "Password Invalid" });
  }

  if (password.length < 8) {
    return res.json({
      status: "error",
      error: "Password should be minimum 8 characters long",
    });
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  try {
    const response = await User.create({
      username: username,
      password: hashedpassword,
    });
    console.log(response);
  } catch (error) {
    if (error.code === 11000) {
      // Duplication Error
      return res.json({ status: "error", error: "Username already in use" });
    } else {
      throw error;
    }
  }
  res.json({ status: "ok" });
};
