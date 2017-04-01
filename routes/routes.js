var express = require('express');
//1. Add path module
var path = require('path');

var router = express.Router();


var mongoose = require('mongoose');
/*change model*/
var User = require('../models/user.js');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


/* 1. GET index page. */
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
}); 


/* 2. GET login page. */
router.get('/login', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'login.html'));
}); 


/* 3. GET register page. */
router.get('/register', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'register.html'));
}); 

router.post('/register', function(req, res){
var name = req.body.name;
var email = req.body.email;
var password = req.body.password;
var confirm = req.body.confirm;

/*validations*/
req.checkBody('name','Name is required').notEmpty();
req.checkBody('email','Email is required').notEmpty();
req.checkBody('email','Email is required').isEmail();
req.checkBody('password','Password is required').notEmpty();
req.checkBody('confirm','Password is required').notEmpty();
req.checkBody('confirm','Password do not match').equals(req.body.password);
/*errors*/
var errors = req.validationErrors();

if(errors){
	console.log(errors);
	res.render('register');

}
else{
	console.log("passed");
}
});


/* 4. GET home page. */
router.get('/home/:id', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'home.html'));
}); 


/* 5. GET account page. */
router.get('/account/:id', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'account.html'));
}); 


/* 6. GET settings page. */
router.get('/settings/:id', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'settings.html'));
}); 


/* 7. GET survey page. */
router.get('/survey/:id', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'survey.html'));
}); 


/* 8. GET progress page. */
router.get('/progress/:id', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'progress.html'));
}); 


/* 9. GET aboutus page. */
router.get('/aboutus', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'aboutus.html'));
}); 


/* 10. GET help page. */
router.get('/help', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'help.html'));
}); 


/* 11. GET gallery page. */
router.get('/gallery/:id', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'gallery.html'));
}); 


/* 10. GET help page. */
router.get('/forget', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'forget.html'));
}); 



module.exports = router;
