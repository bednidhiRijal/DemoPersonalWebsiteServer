const express = require('express')
const multer = require('multer')
const router = express.Router();
var upload = multer();

let subscribedUsers = [];
let userContacts = [];

router.post('/subscribe',(req,res)=>{
    try{
        subscribedUsers.push(req.body)
        res.sendStatus(200)
        console.log(req.body)
    }
    catch(error){
        res.sendStatus(500)
    }
})

router.post('/contact', upload.none(), (req,res)=>{
    try{
        userContacts.push(req.body)
        console.log(req.body)
        console.log(userContacts)
        res.sendStatus(200)
    }
    catch(error){
        res.sendStatus(500);
    }    
})

module.exports = router;