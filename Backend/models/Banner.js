const db = require("../configs/database");

const Banner = {
   getAll: function  (result)  {
      db.query("SELECT * FROM db_banner", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_banner WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, banner, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(banner);
         }
      });
   },


    store: function (banner, result){
      db.query("INSERT INTO db_banner SET ?", banner, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (banner, id, mycallback) => {
      var sql = `UPDATE db_banner SET ? WHERE id = '${id}'`;
      db.query(sql, banner, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   remove: (id, mycallback) => {
      var sql = `DELETE FROM db_banner WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
   getList: (position, mycallback) => {
      const sql = `SELECT * FROM db_banner WHERE position ='${position}' AND status='1'`;
      db.query(sql, function (err, banners) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(banners);
         }
      });
   },

}
 //Có rất nhiều phương thức ở đâu
 module.exports = Banner;
 