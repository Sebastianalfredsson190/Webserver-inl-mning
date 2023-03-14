var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var login = req.session.login ? 'true' : 'false'

  res.render('logout', { title: 'Express', login: login  });
});
router.post('/', function(req, res, next) {
  if(login=true){
    req.session.login=false;
    res.redirect('/')
  }
});
module.exports = router;
