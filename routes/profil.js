var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    var login = req.session.login ? 'true' : 'false'


    res.render('profil', { title: 'Express',login: login, user: req.session.user });
});

router.post('/', function (req, res, next) {

    var jsonData = null


    req.session.username
    req.session.password

    try {
        var data = fs.readFileSync("C:\\Users\\sebastian.alfredsso\\Documents\\Webserver_inlamning_2\\Webserver inlämning\\db\\users.json", "utf8")
        jsonData = JSON.parse(data);
    } catch (error) {
        console.log(error)
        return;
    }

    var newUsername = req.body.username == "" ? req.session.username : req.body.username



    for (let i = 0; i < jsonData.length; i++) {
        if (req.session.username == jsonData[i].username && jsonData[i].password == req.session.password) {
            var oldEmail = jsonData[i].email
            var oldNumber = jsonData[i].number

            var newEmail = req.body.email == "" ? oldEmail : req.body.email
            var newNumber = req.body.number == "" ? oldNumber : req.body.number

            var saveData = {
                username: newUsername,
                password: req.session.password,
                email: newEmail,
                number: newNumber,
                image: req.body.file
            }

            console.log(saveData)



            jsonData[i] = saveData
        }
    }
    let dataToSave = JSON.stringify(jsonData);

    fs.writeFileSync('db/users.json', dataToSave);
    res.render('profil', { title: 'Express', username: req.session.username });

});

module.exports = router;
