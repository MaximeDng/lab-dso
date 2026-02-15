var express = require('express');
var router = express.Router();
var Password = "esd";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function SetPassword() {
    Password =  "EANFISNCWW?WLO?CPO?W24552%%$";
}

module.exports = router;
