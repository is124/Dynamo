const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  console.log("REACHED IN ROUTERS/Index.js")
  res.send({ message: "HomePage", owner: "Tilak Singh" });
});

module.exports = route;