const express = require("express");
const router = express.Router();
const Performance = require("./../Controllers/PerformanceCtrls.js");

router.post("/", Performance.CheckWebsite);

module.exports = router;
