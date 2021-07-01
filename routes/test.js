const express = require("express");
//const app = express();
let router = express.Router();

router.get("/hari", (req, res, next) => {
    let objT = {field:{},error:{}}
    let x = objT.field;
    x['name'] = "shyam"
    console.log(x);
  res.send("hello i am from test1"+objT.field.name +"  "+ Object.error);
});

module.exports = router;
