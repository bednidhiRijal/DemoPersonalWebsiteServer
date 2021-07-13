const express = require("express");
//const app = express();
let router = express.Router();

router.get("/hari", (req, res, next) => {

  var person = [{name:'x', age: 20},
  {name:'y',age:40},
  {name:'z', age: 50}
];    
  res.send(person);
});

module.exports = router;
