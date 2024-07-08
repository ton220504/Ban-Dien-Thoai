const express = require("express");
const router = express.Router();
const Brand_Controller = require("../controllers/Brand_Controller");


router.get("/index", Brand_Controller.index);
router.post("/store", Brand_Controller.store);
router.get("/show/:id", Brand_Controller.show);
router.put("/edit/:id", Brand_Controller.edit);
router.delete("/remove/:id", Brand_Controller.remove);

module.exports = router;