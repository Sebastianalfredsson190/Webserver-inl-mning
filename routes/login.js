const fs = require('fs');
var express = require('express');
const { json } = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var login = req.session.login ? 'true' : 'false'
  res.render('login', { title: 'Express', login: login  });
});

router.post('/', function(req, res, next) {
    var jsonData = null

    try {
        var data = fs.readFileSync("C:\\Users\\sebastian.alfredsso\\Documents\\Webserver_inlamning_2\\Webserver inlämning\\db\\users.json", "utf8")
        jsonData = JSON.parse(data);
        console.log(jsonData[0])
    } catch (error) {
        console.log(error)
    }

    
    var username1 = (req.body.username)
    var password1 = (req.body.password)
    req.session.password = password1
    req.session.username = username1
    req.session.login = false;


    for (let i = 0; i < jsonData.length; i++) {
        if(username1 == jsonData[i].username && jsonData[i].password == password1 ){
            req.session.login=true;
            req.session.user = jsonData[i]

            res.redirect("/");
            return;
        }
    }
    
    res.redirect("/login");
    

    

});

module.exports = router;
