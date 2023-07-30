const express = require("express");
const router = express.Router();
const Arser = require("./../Controllers/PerformanceCtrls.js");

router.post("/perform", Arser.checkArser);

module.exports = router;
