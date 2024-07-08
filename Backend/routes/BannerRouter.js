const express = require("express");
const router = express.Router();
const Banner_Controller = require("../controllers/Banner_Controller");


router.get("/index", Banner_Controller.index);
router.post("/store", Banner_Controller.store);
router.get("/show/:id", Banner_Controller.show);
router.put("/edit/:id", Banner_Controller.edit);
router.delete("/remove/:id", Banner_Controller.remove);
 router.get("/list/:position", Banner_Controller.index);


module.exports = router;