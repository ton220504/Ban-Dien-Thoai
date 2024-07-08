const db = require("../configs/database");

const User={
   getAll: function  (result)  {
      db.query("SELECT * FROM db_user", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    getAll_roles: function  (roles,result)  {
      db.query(`SELECT * FROM db_user WHERE roles='${roles}'`, function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_user WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, user, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(user);
         }
      });
   },


    store: function (user, result){
      db.query("INSERT INTO db_user SET ?", user, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (user, id, mycallback) => {
      var sql = `UPDATE db_user SET ? WHERE id = '${id}'`;
      db.query(sql, user, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   delete: (id, mycallback) => {
      var sql = `DELETE FROM db_user WHERE id = '${id}'`;
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
 module.exports = User;
 