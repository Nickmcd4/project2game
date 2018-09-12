var authController = require('../controllers/authcontroller.js');

 
 
module.exports = function(app, passport) {
    let currentUserId = "";
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);


    app.get('/characterCreate', isLoggedIn, authController.characterCreate);

    // app.get('/', function(req, res) {
    //     currentUserId = req.user.id
    // });

 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/characterCreate',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 
    app.get('/dashboard', isLoggedIn, authController.dashboard);
 
 
    app.get('/logout', authController.logout);
 
    app.post('/characterCreate', function(req, res){
        console.log(req.body);
    })
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}