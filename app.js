const express = require("express");
const app = express();
const user = require("./routes/user")
const pictures = require("./routes/pictures")
var cors = require("cors");

app.use(cors());
//const path = require("path")
//app.use(express.static(path.join(__dirname,'../public')))
const port = process.env.PORT || 5000;
app.set("port",port);

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

//const test = require("./routes/test");
//app.use("/test1", test);

app.use("/user", user);
app.use("/t",pictures)


app.get("/", (req, res) => {
  res.send(
    `<div>
      <p>hello</p>
      <h1>hello</h1>
      </div>`
  );
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
