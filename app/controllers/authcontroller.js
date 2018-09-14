var models = require("../models/index");
var exports = module.exports = {}

exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboardChose = function(req, res) {

    //{where: {id: activeUserId}}
    //var activeUserId = req.user.id;

    res.render('dashboard-chose');



}

exports.dashboardFight = function(req, res) {
    res.render('dashboard-fight');
}

exports.logout = function(req, res) {
   
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}


//*************************************************** */


// exports.characterCreate = function(req, res) {
//     var userId = req.user.id;
//     res.render('charactercreate', {userId: userId});
//     // character.getTest(res);
//     console.log(req.user.id);
 
// }

