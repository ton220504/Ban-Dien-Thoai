const db = require("../configs/database");

const Contact =  {
   getAll: function  (result)  {
      db.query("SELECT * FROM db_contact", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_contact WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, Contact, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(Contact);
         }
      });
   },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_contact WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, Contact, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(Contact);
         }
      });
   },


    store: function (Contact, result){
      db.query("INSERT INTO db_contact SET ?", Contact, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (Contact, id, mycallback) => {
      var sql = `UPDATE db_contact SET ? WHERE id = '${id}'`;
      db.query(sql, Contact, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   delete: (id, mycallback) => {
      var sql = `DELETE FROM db_contact WHERE id = '${id}'`;
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
 module.exports = Contact;
 