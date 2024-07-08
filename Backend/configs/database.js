var mysql = require("mysql");

var conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "cdjs_ccq2211e",
});

conn.connect(function (err) {
   if (err) throw err;
   console.log("Connected Success!");
});

module.exports = conn;
