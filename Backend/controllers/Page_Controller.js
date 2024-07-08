const Page = require("../models/Page");
const PageController={
    index: (req, res) => {
        Page.getAll(function (data) {
           if (data == null) {
              return res.status(200).json({
                 pages: data,
                 status: false,
                 message: "Không tìm thấy dữ liệu",
              });
           } else {
              return res.status(200).json({
                 pages: data,
                 status: true,
                 message: "Tải dữ liệu thành công",
              });
           }
        });
     },
     show: (req, res) => {
        const id = req.params.id;
        Page.show(id, function (data) {
           if (data == null) {
              return res.status(200).json({
                 pages: null,
                 status: false,
                 message: "Khong tim thay du lieu",
              });
           } else {
              return res.status(200).json({
                 pages: data,
                 status: true,
                 message: "Tai du lieu thanh cong",
              });
           }
        });
     },
     list: async (req, res) => {
      try {
         const page = req.params.page;
         const limit = req.params.limit;
         //Xử lý page
         let offset = (page - 1) * limit;
         //
         await Page.getList(limit, offset, function (pages) {
            if (pages == null) {
               const result = {
                  pages: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  pages: pages,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            pages: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   store: (req, res) => {
      const bodyData = req.body;
      const mydata = {
         name: bodyData.name,
         detail: bodyData.detail,
         
      };

      Page.store(mydata, function (data) {
         return res.status(201).json({
            pages: data,
            status: true,
            message: "Them du lieu thanh cong",
         });
      });
   },
}
module.exports = PageController;