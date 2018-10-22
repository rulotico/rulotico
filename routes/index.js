var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/es', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/en', function(req, res, next) {
  res.render('index_en', { title: 'Express' });
});


module.exports = router;
