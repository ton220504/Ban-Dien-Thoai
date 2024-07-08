const express = require('express')
const app = express()
const port = 3030
const apiRoutes = require("./routes"); // index.js ở Bước 3
const cors = require('cors')
const path = require("path");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");





app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(fileupload());

apiRoutes(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});