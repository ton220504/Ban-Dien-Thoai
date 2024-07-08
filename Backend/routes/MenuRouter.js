const express = require("express");
const router = express.Router();
const Menu_Controller = require("../controllers/Menu_Controller");


router.get("/index", Menu_Controller.index);
router.post("/store", Menu_Controller.store);
router.get("/show/:id", Menu_Controller.show);
router.put("/edit/:id", Menu_Controller.edit);
router.delete("/remove/:id", Menu_Controller.remove);
router.get("/listfooter/:position", Menu_Controller.listfooter)
router.get("/list/:parentid/:limit", Menu_Controller.list);


module.exports = router;