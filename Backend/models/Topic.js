const db = require("../configs/database");

const Topic={
   getAll: function  (result)  {
      db.query("SELECT * FROM db_topic", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_topic WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, topic, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(topic);
         }
      });
   },


    store: function (topic, result){
      db.query("INSERT INTO db_topic SET ?", topic, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (topic, id, mycallback) => {
      var sql = `UPDATE db_topic SET ? WHERE id = '${id}'`;
      db.query(sql, topic, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   remove: (id, mycallback) => {
      var sql = `DELETE FROM db_topic WHERE id = '${id}'`;
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
 module.exports = Topic;
 