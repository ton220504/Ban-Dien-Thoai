const db = require("../configs/database");

const Order =  {
   getAll: function  (result)  {
      db.query("SELECT * FROM db_order", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_order WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, Order, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(Order);
         }
      });
   },


    store: function (Order, result){
      db.query("INSERT INTO db_order SET ?", Order, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (Order, id, mycallback) => {
      var sql = `UPDATE db_order SET ? WHERE id = '${id}'`;
      db.query(sql, Order, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   delete: (id, mycallback) => {
      var sql = `DELETE FROM db_order WHERE id = '${id}'`;
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
 module.exports = Order;
 