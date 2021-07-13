const express = require("express");
const app = express();
const multer = require('multer')
var upload = multer();
const port = process.env.port || 5000;

//const path = require("path")
//app.use(express.static(path.join(__dirname,'../public')))
const test = require("./routes/test");
var cors = require("cors");


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));


app.use("/test1", test);
app.use(cors());
app.get("/", (req, res) => {
  res.send(
    `<div>
      <p>hello</p>
      <h1>hello</h1>
      </div>`
  );
});

app.post("/user", upload.none(), (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
