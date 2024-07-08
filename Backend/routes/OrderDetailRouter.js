const express = require("express");
const router = express.Router();
const OrderDetail_Controller = require("../controllers/OrderDetail_Controller");


router.get("/index", OrderDetail_Controller.index);
router.delete("/delete/:id", OrderDetail_Controller.delete);


module.exports = router;