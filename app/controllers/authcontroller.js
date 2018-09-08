var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}



exports.dashboard = function(req, res) {
 
    var firstname = req.user.firstname;
    console.log(firstname);

    res.render('dashboard', {firstname: firstname});


 
}

exports.logout = function(req, res) {
   
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}


//*************************************************** */


exports.characterCreate = function(req, res) {
    var userId = req.user.id;


    res.render('charactercreate', {userId: userId});
    // character.getTest(res);
    console.log(req.user.id);
 
}

