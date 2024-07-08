const Order = require("../models/Order");
const OrderController = {
   index: (req, res) => {
    Order.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               orders: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
                orders: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },

   show: (req, res) => {
       const id = req.params.id;
       Order.show(id, function (data) {
           if (data == null) {
               return res.status(200).json({
                   menus: null,
                   status: false,
                   message: "Khong tim thay du lieu",
               });
           } else {
               return res.status(200).json({
                   menus: data,
                   status: true,
                   message: "Tai du lieu thanh cong",
               });
           }
       });
   },

   store: (req, res) => {
       const bodyData = req.body;
       const mydata = {
           deliveryname: bodyData.deliveryname,
           deliveryphone: bodyData.deliveryphone,
           deliveryemail: bodyData.deliveryemail,
           deliveryaddress: bodyData.deliveryaddress,
           updated_at: "2024-3-28 10:10:19",
           user_id: 1,
           exportdate: "2020-07-04 00:00:00",
           updated_by: 0,
           created_at: "2024-3-28 10:10:19",
          
           status: bodyData.status,
       };

       Order.store(mydata, function (data) {
           return res.status(201).json({
               menus: data,
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
         deliveryname: bodyData.deliveryname,
         deliveryphone: bodyData.deliveryphone,
         deliveryemail: bodyData.deliveryemail,
         deliveryaddress: bodyData.deliveryaddress,
         user_id: 1,
         exportdate: "2020-07-04 00:00:00",
         updated_at: "2024-3-28 10:10:19",
         updated_by: 0,
         created_at: "2024-3-28 10:10:19",
         
         status: bodyData.status,
       };
       Order.edit(mydata, id, function (data) {
           //data thứ mà nó trả về
           console.log(data);
       });
   },
   delete: (req, res) => {
       const id = req.params.id;
       Order.delete(id, function (data) {
           console.log(data);
       });
   },
};
module.exports = OrderController;
