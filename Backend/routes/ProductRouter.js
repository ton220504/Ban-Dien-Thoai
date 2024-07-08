const express = require("express");
const router = express.Router();
const Product_Controller = require("../controllers/Product_Controller");


router.get("/index", Product_Controller.index);
router.post("/store", Product_Controller.store);
router.get("/show/:id", Product_Controller.show);
router.put("/edit/:id", Product_Controller.edit);
router.delete("/remove/:id", Product_Controller.remove);
router.get("/listnew/:limit", Product_Controller.listnew);
router.get("/listsale/:limit", Product_Controller.listsale);
router.get("/list/:page/:limit", Product_Controller.list);
router.get("/productdetail/:slug/:limit", Product_Controller.productdetail);
// sp theo danh mục
router.get("/list_category/:slug/:page/:limit", Product_Controller.list_category);
//sp theo loại
router.get("/list_product_category/:categoryid/:page/:limit", Product_Controller.list_product_category);
//sp theo thương hiệu
router.get("/list_brand/:brandid/:page/:limit", Product_Controller.list_brand);


module.exports = router;