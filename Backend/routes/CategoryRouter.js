const express = require("express");
const router = express.Router();
const Category_Controller = require("../controllers/Category_Controller");


router.get("/index", Category_Controller.index);
router.post("/store", Category_Controller.store);
router.get("/show/:slug", Category_Controller.show);
router.put("/edit/:id", Category_Controller.edit);
router.delete("/remove/:id", Category_Controller.remove);
router.get("/list/:parentid", Category_Controller.list);

module.exports = router;