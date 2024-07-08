const Post = require("../models/Post");
const PostController = {
   index: (req, res) => {
      Post.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               posts: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               posts: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },
   index_type: (req, res) => {
      const type = req.params.type;
      Post.getAll_type(type,function (data) {
         if (data == null) {
            return res.status(200).json({
               posts: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               posts: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },

   show: (req, res) => {
      const id = req.params.id;
      Post.show(id, function (data) {
         if (data == null) {
            return res.status(200).json({
               posts: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               posts: data,
               status: true,
               message: "Tai du lieu thanh cong",
            });
         }
      });
   },

   store: (req, res) => {
      const bodyData = req.body;
      const mydata = {
         title: bodyData.title,
         detail: bodyData.detail,
         type: bodyData.type,
         topic_id:bodyData.topic_id,
         slug: bodyData.slug,
         image: bodyData.image,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };

      Post.store(mydata, function (data) {
         return res.status(201).json({
            posts: data,
            status: true,
            message: "Them du lieu thanh cong",
         });
      });
   },
   edit: (req, res) => {
      const id = req.params.id;
      const bodyData = req.body;
      //Lấy dũ liệu form
      const mydata = {
         title: bodyData.title,
         detail: bodyData.detail,
         type: bodyData.type,
         topic_id:bodyData.topic_id,
         slug: bodyData.slug,
         image: bodyData.image,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };
      Post.edit(mydata, id, function (data) {
         //data thứ mà nó trả về
         console.log(data);
      });
   },
   remove: (req, res) => {
      const id = req.params.id;
      Post.remove(id, function (data) {
         console.log(data);
      });
   },
   list: async (req, res) => {
      try {
         const page = req.params.page;
         const limit = req.params.limit;
         //Xử lý page
         let offset = (page - 1) * limit;
         //
         await Post.getList(limit, offset, function (posts) {
            if (posts == null) {
               const result = {
                  posts: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  posts: posts,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            posts: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   listnew: async (req, res) => {
      try {
         const limit = req.params.limit;
         //
         await Post.getListNew(limit, function (posts) {
            if (posts == null) {
               const result = {
                  posts: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  posts: posts,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            posts: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   postdetail: async (req, res) => {
      try {
         const slug = req.params.slug;
         const limit = req.params.limit;
         await Post.getBySlug(slug, function (post) {
            if (post == null) {
               const result = {
                  post: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               Post.getListProductOther(post.topic_id, post.id, limit, function (posts) {
                  const result = {
                     post: post,
                     posts: posts,
                     status: true,
                     message: "Tải dữ liệu thành công!",
                  };
                  return res.status(200).json(result);
               });
            }
         });
      } catch (error) {
         const result = {
            posts: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   list_topic: async (req, res) => {
      try {
         const topicid = req.params.topicid;
         const page = req.params.page;
         const limit = req.params.limit;
         let offset = (page - 1) * limit;
         await Post.getListByTopic(topicid, limit,offset, function (posts) {
            if (posts == null) {
               const result = {
                  posts: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  posts: posts,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            posts: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   show_post: (req, res) => {
      const type = req.params.type;
      Post.show_post(type, function (data) {
         if (data == null) {
            return res.status(200).json({
               posts: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               posts: data,
               status: true,
               message: "Tai du lieu thanh cong",
            });
         }
      });
   },
   show_page: (req, res) => {
      const type = req.params.type;
      Post.show_page(type, function (data) {
         if (data == null) {
            return res.status(200).json({
               posts: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               posts: data,
               status: true,
               message: "Tai du lieu thanh cong",
            });
         }
      });
   },
   
};
module.exports = PostController;
