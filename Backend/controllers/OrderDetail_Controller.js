const OrderDetail = require("../models/OrderDetail");
const OrderDetailController = {
   index: (req, res) => {
      OrderDetail.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               orderdetails: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               orderdetails: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },
   delete: (req, res) => {
      const id = req.params.id;
      OrderDetail.delete(id, function (data) {
          console.log(data);
      });
  },
};
module.exports = OrderDetailController;
