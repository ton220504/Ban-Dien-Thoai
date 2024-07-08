const express = require("express");
const router = express.Router();
const Topic_Controller = require("../controllers/Topic_Controller");


router.get("/index", Topic_Controller.index);
router.post("/store", Topic_Controller.store);
router.get("/show/:id", Topic_Controller.show);
router.put("/edit/:id", Topic_Controller.edit);
router.delete("/remove/:id", Topic_Controller.remove);


module.exports = router;