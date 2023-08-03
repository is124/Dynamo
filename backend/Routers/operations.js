const express = require("express");
const router = express.Router();
const CrudCtrl = require("./../Controllers/CrudCtrl.js");

router.post("/add", CrudCtrl.Create);
router.post("/delete", CrudCtrl.Delete);

module.exports = router;
