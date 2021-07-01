var express = require('express');
var router = express.Router();

var title = "rulotico.com"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title, secret: false });

});


router.get('/:key', function(req, res, next) {
  var key= req.params.key

  if (key=="spicy") {
    res.render('index', { title: title, secret: true });
  }else{
    res.render('index', { title: title, secret: false });
  }


});

module.exports = router;
