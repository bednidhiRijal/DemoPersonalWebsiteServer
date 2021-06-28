const express = require("express");
const app = express();
const port = process.env.port || 5000;
//const path = require("path")
//app.use(express.static(path.join(__dirname,'../public')))
const test = require("./routes/test")
var cors = require("cors");

app.use('/test1', test)
app.use(cors());
app.get('/', (req, res) => {
  res.send(
      `<div>
      <p>hello</p>
      <h1>hello</h1>
      </div>`
  );
})

app.get('/contact', (req, res) => {
  res.send(
      `<div>
      <p>hello test</p>
      <h1>hello</h1>
      </div>`
  );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});