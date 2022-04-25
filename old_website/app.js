const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
//const User = require("./model/user");

const loginRouter = require('./routes/login-user')
const registerRouter = require('./routes/register-user')
const reqRouter = require('./routes/request-route');
const gymkhanaRouter = require('./routes/gymkhana')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use('/',reqRouter)
app.use('/api/login', loginRouter)
app.use('/api/register', registerRouter);
app.use('/gymkhana',gymkhanaRouter)
// mongoose.connect(
//     "URL",  // Enter your mongoose client here, we'll add a permanent account later
//     { useNewUrlParser: true, useCreateIndex: true }
//   );
  
//   mongoose.connection.once("open", () => {
//     console.log("Connected to the database successfully");
//   });
  
  app.listen(5000, () => {
    console.log("Listening at Port 5000");
  });
