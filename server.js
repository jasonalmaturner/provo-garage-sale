var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-facebook').Strategy;


var Listing = require('./server-assets/models/listingModel.js');
var User = require('./server-assets/models/userModel.js');

var app = express();
var port = 8040;
var mongoUri = 'mongodb://localhost:27017/PTH';

passport.use(new FacebookStrategy({
    clientID: 855831487806174,
    clientSecret: ebab77d2f0a597cabc8c0bb10cef28d6,
    callbackURL: 'http://localhost:8040/auth/facebook/callback'
  }, function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
 }));

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'sherlynn justin james trae',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
  console.log(111111, user);
  done(null, user);
})

passport.deserializeUser(function(obj, done){
  console.log(2222222, obj);
  done(null, obj);
})

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/api/me',
  failureRedirect: '/api/login'
}))

app.get('/api/me', function(req, res){
  console.log(3333333, req.user);
  res.json(req.user);
});

// app.get('api/session', function(req, res){
//   req.session({test: 'this is a test'})
//   res.send('check the session');
// })

app.listen(port, function(){
  console.log('listening on port:', port);
});