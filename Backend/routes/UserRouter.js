const express = require("express");
const router = express.Router();
const User_Controller = require("../controllers/User_Controller");


router.get("/index", User_Controller.index);
router.get("/index_roles/:roles", User_Controller.index_roles);
router.post("/store", User_Controller.store);
router.get("/show/:id", User_Controller.show);
router.put("/edit/:id", User_Controller.edit);
router.delete("/delete/:id", User_Controller.delete);

module.exports = router;