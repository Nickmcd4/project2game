var models = require("../models/index");
var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}



exports.dashboard = function(req, res) {


    var activeUserId = req.user.id;

    models.char.findAll({where: {id: activeUserId}}).then(function(char) {
        console.log(char);
        res.render('dashboard',{
            chars : char[0]
        });
    });
 
}

exports.logout = function(req, res) {
   
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}


//*************************************************** */


exports.characterCreate = function(req, res) {
 
    res.render('charactercreate');
 
}

