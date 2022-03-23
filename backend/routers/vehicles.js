const express = require("express");
const router = express.Router();

const vehiclesCtrl = require("../controllers/vehicles");
const categoriesCtrl = require("../controllers/categories");

router.get("/", vehiclesCtrl.getTop);
router.get("/categories", categoriesCtrl.getAll);
router.get("/vehicles", vehiclesCtrl.getAll);
router.get("/:id", vehiclesCtrl.getOne)
router.get("/categories/:id", categoriesCtrl.getOneCategorie)

module.exports = router;