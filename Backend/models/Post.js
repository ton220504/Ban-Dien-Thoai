const db = require("../configs/database");

const Post={
   getAll: function  (result)  {
      db.query("SELECT * FROM db_post", function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    getAll_type: function  (type,result)  {
      db.query(`SELECT * FROM db_post WHERE type = '${type}' `, function (err, data) {
          if (err) throw err;
          result(data);
       });
    },
    show: (id, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, post, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(post);
         }
      });
   },
   show_post: (type, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE type='${type}' LIMIT 1`;
      db.query(sql, function (err, post, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(post);
         }
      });
   },
   show_page: (type, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE type='${type}' LIMIT 1`;
      db.query(sql, function (err, post, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(post);
         }
      });
   },


    store: function (post, result){
      db.query("INSERT INTO db_post SET ?", post, function(err, data) {
         if(err){
            result(err);
         }else{
            result(data);
         }
      });
    },
    edit: (post, id, mycallback) => {
      var sql = `UPDATE db_post SET ? WHERE id = '${id}'`;
      db.query(sql, post, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   remove: (id, mycallback) => {
      var sql = `DELETE FROM db_post WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
   getList: async (limit, offset, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE status='1' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
      await db.query(sql, function (err, post) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(post);
         }
      });
   },
   getListNew: (limit, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE status='1' ORDER BY created_at DESC LIMIT ${limit}`;
      db.query(sql, function (err, posts) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(posts);
         }
      });
   },
   getBySlug: async (slug, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE slug='${slug}'`;
      await db.query(sql, function (err, post) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(post[0]);
         }
      });
   },
   getListProductOther: async (topicid, id, limit, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE topic_id = '${topicid}' AND status='1' AND id!='${id}'  ORDER BY created_at DESC LIMIT ${limit}`;
      // console.log(sql);
      await db.query(sql, function (err, posts) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(posts);
         }
      });
   },
   getListByTopic:async (topicid, limit,offset, mycallback) => {
      const sql = `SELECT * FROM db_post WHERE topic_id ='${topicid}' AND status='1'  LIMIT ${limit} OFFSET ${offset}`;
      await db.query(sql, function (err, posts) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(posts);
         }
      });
   },
}
 //Có rất nhiều phương thức ở đâu
 module.exports = Post;
 