const db = require("../configs/database");
const Page={
    getAll: function  (result)  {
        db.query("SELECT * FROM db_pages", function (err, data) {
            if (err) throw err;
            result(data);
         });
      },
      show: (id, mycallback) => {
        const sql = `SELECT * FROM db_pages WHERE id='${id}' LIMIT 1`;
        db.query(sql, function (err, pages, fields) {
           if (err) {
              mycallback(null);
           } else {
              mycallback(pages);
           }
        });
     },
     getList: async (limit, offset, mycallback) => {
      const sql = `SELECT * FROM db_pages WHERE status='1' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
      await db.query(sql, function (err, pages) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(pages);
         }
      });
   },
   store: function (page, result){
      db.query("INSERT INTO db_pages SET ?", page, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
}
module.exports = Page;