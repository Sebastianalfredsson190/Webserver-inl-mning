var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var login = req.session.login ? 'true' : 'false'
  res.render('varukorg', { title: 'Express', login: login  });
});

module.exports = router;
