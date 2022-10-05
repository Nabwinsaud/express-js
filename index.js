// basic express app
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
// require("dotenv").config();
// in common js require is used to import the module
// in module import is used to import the package
const app = express();
// const PORT = 3000;
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware is a function that is called before the request is handled
// middleware is used to do some pre-processing before the request is handled

const middleware = (req, res, next) => {
  //   res.send("Loading.....");
  next();
  // next is used to call the next middleware
  console.log("Loading.....");
};

// app.use(middleware);

app.get("/login", middleware, (req, res) => {
  console.log("login router page");
  res.send("Login Page");
});

app.listen(process.env.PORT, () => {
  console.log(`port is running art :${process.env.PORT}`);
});
