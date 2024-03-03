var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/failed', function(req, res, next) {
  req.flash("age", 12); // Setting a flash message
  res.send("bangaya");
});

router.get('/checkkaro', function(req, res, next) {
  var age = req.flash("age"); // Getting a flash message and storing it in a variable
  console.log(age);
  res.send("check karlo");
});

module.exports = router;