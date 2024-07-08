const User = require("../models/User");
const TopicController = {
   index: (req, res) => {
      User.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               users: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               users: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },
   index_roles: (req, res) => {
      const roles = req.params.roles;
      User.getAll_roles(roles,function (data) {
         if (data == null) {
            return res.status(200).json({
               users: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               users: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },

   show: (req, res) => {
      const id = req.params.id;
      Topic.show(id, function (data) {
         if (data == null) {
            return res.status(200).json({
               users: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               users: data,
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
         username: bodyData.username,
         password: bodyData.password,
         email: bodyData.email,
         gender: "null",
         phone: bodyData.phone,
         address: "null",
         roles: bodyData.roles,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: 1,
      };

      User.store(mydata, function (data) {
         return res.status(201).json({
            topics: data,
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
         username: bodyData.username,
         password: bodyData.password,
         email: bodyData.email,
         gender: bodyData.gender,
         phone: bodyData.phone,
         address: bodyData.address,
         roles: bodyData.roles,
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: 1,
      };
      User.edit(mydata, id, function (data) {
         //data thứ mà nó trả về
         console.log(data);
      });
   },
   delete: (req, res) => {
      const id = req.params.id;
      User.delete(id, function (data) {
         console.log(data);
      });
   },
};
module.exports = TopicController;
