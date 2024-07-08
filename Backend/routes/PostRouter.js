const express = require("express");
const router = express.Router();
const Post_Controller = require("../controllers/Post_Controller");


router.get("/index", Post_Controller.index);
router.get("/index_type/:type", Post_Controller.index_type);
router.post("/store", Post_Controller.store);
router.get("/show/:id", Post_Controller.show);
//post
router.get("/show_post/:type", Post_Controller.show_post);
//page
router.get("/show_page/:type", Post_Controller.show_page);
router.put("/edit/:id", Post_Controller.edit);
router.delete("/remove/:id", Post_Controller.remove);
router.get("/list/:page/:limit", Post_Controller.list);
router.get("/listnew/:limit", Post_Controller.listnew);
router.get("/postdetail/:slug/:limit", Post_Controller.postdetail);
router.get("/list_topic/:topicid/:page/:limit", Post_Controller.list_topic);

module.exports = router;