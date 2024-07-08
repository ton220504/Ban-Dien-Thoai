const express = require("express");
const router = express.Router();
const Contact_Controller = require("../controllers/Contact_Controller");


router.get("/index", Contact_Controller.index);
router.post("/store", Contact_Controller.store);
router.get("/show/:id", Contact_Controller.show);
router.put("/edit/:id", Contact_Controller.edit);
router.delete("/delete/:id", Contact_Controller.delete);


module.exports = router;