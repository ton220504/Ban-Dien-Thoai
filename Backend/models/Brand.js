const db = require("../configs/database");


const Brand={
   getAll: function  (result)  {
      db.query("SELECT * FROM db_brand", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_brand WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, brand, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(brand);
         }
      });
   },


    store: function (brand, result){
      db.query("INSERT INTO db_brand SET ?", brand, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (brand, id, mycallback) => {
      var sql = `UPDATE db_brand SET ? WHERE id = '${id}'`;
      db.query(sql, brand, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   remove: (id, mycallback) => {
      var sql = `DELETE FROM db_brand WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
}
 //Có rất nhiều phương thức ở đâu
 module.exports = Brand;
 