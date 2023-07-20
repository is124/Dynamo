const express = require("express");
const route = express.Router();
const operation = require("./operations.js"); 
const authMiddleware = require("./../Middleware/authMiddleware.js");


route.use("/operation", authMiddleware, operation);

module.exports = route;