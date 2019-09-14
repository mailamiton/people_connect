var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("index router is called");
    res.sendFile(path.join(__basedir + '/home.html'));
});



module.exports = router;