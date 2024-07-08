const Banner = require("../models/Banner");
const BannerController = {
   index: (req, res) => {
      Banner.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               banners: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               banners: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },

   show: (req, res) => {
      const id = req.params.id;
      Banner.show(id, function (data) {
         if (data == null) {
            return res.status(200).json({
               banners: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               banners: data,
               status: true,
               message: "Tai du lieu thanh cong",
            });
         }
      });
   },

   store: (req, res) => {
      const bodyData = req.body;
      const mydata = {
         name: bodyData.name,
         link: bodyData.link,
         sort_order: 1,
         position: bodyData.position,
         image: bodyData.image,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };

      Banner.store(mydata, function (data) {
         return res.status(201).json({
            banners: data,
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
         name: bodyData.name,
         link: bodyData.link,
         sort_order: 1,
         position: bodyData.position,
         image: bodyData.image,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };
      Banner.edit(mydata, id, function (data) {
         //data thứ mà nó trả về
         console.log(data);
      });
   },
   remove: (req, res) => {
      const id = req.params.id;
      Banner.remove(id, function (data) {
         console.log(data);
      });
   },list: async (req, res) => {
      try {
         const position = req.params.position;
         await Banner.getList(position, function (banners) {
            if (banners == null) {
               const result = {
                  banners: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  banners: banners,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            banners: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },


};
module.exports = BannerController;
