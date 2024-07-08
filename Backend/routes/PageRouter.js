const express = require("express");
const router = express.Router();
const Page_Controller = require("../controllers/Page_Controller");


router.get("/index", Page_Controller.index);
router.get("/show/:id", Page_Controller.show);
router.post("/store", Page_Controller.store);
router.get("/list/:page/:limit", Page_Controller.list);
 
module.exports = router;