const db = require("../configs/database");


const Product = {
   getAll: function (result) {
      db.query("SELECT * FROM db_product", function (err, data) {
         if (err) throw err;
         result(data);
      });
   },
   show: (id, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, product, fields) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(product);
         }
      });
   },


   store: function (product, result) {
      db.query("INSERT INTO db_product SET ?", product, function (err, data) {
         if (err) {
            result(err);
         } else {
            result(data);
         }
      });
   },
   edit: (product, id, mycallback) => {
      var sql = `UPDATE db_product SET ? WHERE id = '${id}'`;
      db.query(sql, product, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(result);
         }
      });
   },
   remove: (id, mycallback) => {
      var sql = `DELETE FROM db_product WHERE id = '${id}'`;
      db.query(sql, function (err, result) {
         if (err) {
            mycallback(err);
         } else {
            mycallback("Xóa thành công");
         }
      });
   },
   getListNew: (limit, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE status='1' ORDER BY created_at DESC LIMIT ${limit}`;
      db.query(sql, function (err, products) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(products);
         }
      });
   },
   getList: async (limit, offset, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE status='1' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
      await db.query(sql, function (err, products) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(products);
         }
      });
   },
   getBySlug: async (slug, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE slug='${slug}'`;
      await db.query(sql, function (err, product) {
         if (err) {
            mycallback(err);
         } else {
            mycallback(product[0]);
         }
      });
   },
   getListProductOther: async (categoryid, id, limit, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE category_id = '${categoryid}' AND status='1' AND id!='${id}'  ORDER BY created_at DESC LIMIT ${limit}`;
      // console.log(sql);
      await db.query(sql, function (err, products) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(products);
         }
      });
   },

   getListProductCategory: async (categoryid, limit, offset, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE status='1' AND category_id='${categoryid}'  LIMIT ${limit} OFFSET ${offset}`;
      await db.query(sql, function (err, products) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(products);
         }
      });
   },
   getListByBrand:async (brandid, limit,offset, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE brand_id ='${brandid}' AND status='1'  LIMIT ${limit} OFFSET ${offset}`;
      await db.query(sql, function (err, products) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(products);
         }
      });
   },
   getListSale: (limit, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE pricesale < price ORDER BY pricesale  DESC LIMIT ${limit}`;
      db.query(sql, function (err, products) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(products);
         }
      });
   },
   getListByCategory: (slug, limit,offset, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE slug ='${slug}' AND status='1' LIMIT ${limit} OFFSET ${offset}`;
      db.query(sql, function (err, products) {
         if (err) {
            mycallback(null);
         } else {
            mycallback(products);
         }
      });
   },








};
//Có rất nhiều phương thức ở đâu
module.exports = Product;
