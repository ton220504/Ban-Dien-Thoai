const db = require("../configs/database");

const Menu = {
   getAll: function  (result)  {
      db.query("SELECT * FROM db_menu", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_menu WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, menu, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(menu);
         }
      });
   },
   getList: (parentid, limit, mycallback) => {
      const sql = `SELECT * FROM db_menu WHERE parent_id ='${parentid}' LIMIT ${limit}`;
      db.query(sql, function (err, menu) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(menu);
         }
      });
   },


    store: function (menu, result){
      db.query("INSERT INTO db_menu SET ?", menu, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (menu, id, mycallback) => {
      var sql = `UPDATE db_menu SET ? WHERE id = '${id}'`;
      db.query(sql, menu, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   remove: (id, mycallback) => {
      var sql = `DELETE FROM db_menu WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
   getListFooter: (position, mycallback) => {
      const sql = `SELECT * FROM db_menu WHERE position ='${position}' AND status='1'`;
      db.query(sql, function (err, menu) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(menu);
         }
      });
   },
   

}
 //Có rất nhiều phương thức ở đâu
 module.exports = Menu;
 