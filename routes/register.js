const fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var login = req.session.login ? 'true' : 'false'
  res.render('register', { title: 'Express', login: login   });
});
router.post('/', function(req, res, next) {
    var jsonData = null

    try {
        var data = fs.readFileSync("C:\\Users\\Elev\\Documents\\Webserver inlämning\\db\\users.json", "utf8")
        jsonData = JSON.parse(data);
    } catch (error) {
        console.log(error)
        return;
    }
    var saveData = {
        username: req.body.username,
        password: req.body.password,
        email: "",
        number: "",
        image: ""
    }

    jsonData.push(saveData);
    let dataToSave = JSON.stringify(jsonData);

    fs.writeFileSync('db/users.json', dataToSave);

    res.redirect("/login")
    

});
module.exports = router;
