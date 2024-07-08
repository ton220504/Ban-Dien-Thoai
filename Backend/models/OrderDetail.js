const db = require("../configs/database");

const OrderDetail =  {
   getAll: function  (result)  {
      db.query("SELECT * FROM db_orderdetail", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    delete: (id, mycallback) => {
      var sql = `DELETE FROM db_orderdetail WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
   
 };
 

 
 //Có rất nhiều phương thức ở đâu
 module.exports = OrderDetail;
 