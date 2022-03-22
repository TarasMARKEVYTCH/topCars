const express = require("express");
const router = express.Router();

const vehiclesCtrl = require("../controllers/vehicles");

router.get("/", vehiclesCtrl.getAll);
router.get("/:id", vehiclesCtrl.getOne)

module.exports = router;