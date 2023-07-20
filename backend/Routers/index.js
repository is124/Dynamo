const express = require("express");
const route = express.Router();

route.post("/add", (req, res) => {
  const newAddress = req.body.url;

  //add newAddress to db
  
  return res.json({
    isSuccess: 1,
    message: "Added new address"
  });
});

module.exports = route;