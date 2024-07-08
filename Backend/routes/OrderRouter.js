const express = require("express");
const router = express.Router();
const Order_Controller = require("../controllers/Order_Controller");


router.get("/index", Order_Controller.index);
router.post("/store", Order_Controller.store);
router.get("/show/:id", Order_Controller.show);
router.put("/edit/:id", Order_Controller.edit);
router.delete("/delete/:id", Order_Controller.delete);

module.exports = router;