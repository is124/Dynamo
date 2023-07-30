const express = require("express");
const route = express.Router();
const operation = require("./operations.js");
const analyze = require("./analyze.js");
const authMiddleware = require("./../Middleware/authMiddleware.js");


route.use("/operation", authMiddleware, operation);
route.use("/analyze", authMiddleware, analyze);

module.exports = route;