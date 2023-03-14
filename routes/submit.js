var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var login = req.session.login ? 'true' : 'false'
  res.render('submit', { title: 'Express', login: login  });
});

router.post('/', function(req, res, next) {
    console.log(req.body)

    res.render('submit', { title: 'Express' });
  });

module.exports = router;
