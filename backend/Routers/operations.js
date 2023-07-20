const express = require("express");
const router = express.Router();
const CrudCtrl = require("./../Controllers/CrudCtrl.js");

router.post("/add", CrudCtrl.Create);

module.exports = router;
