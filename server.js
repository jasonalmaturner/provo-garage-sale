var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var userCtrl = require('./server-assets/controllers/userCtrl');
var listingCtrl = require('./server-assets/controllers/listingCtrl');

var Listing = require('./server-assets/models/listingModel.js');
var User = require('./server-assets/models/userModel.js');

var app = express();
var port = 8040;
var mongoUri = 'mongodb://localhost:27017/PTH';

passport.use(new FacebookStrategy({
    clientID: 855831487806174,
    clientSecret: 'ebab77d2f0a597cabc8c0bb10cef28d6',
    callbackURL: 'http://localhost:8040/auth/facebook/callback'
  }, function(accessToken, refreshToken, profile, done) {
    userCtrl.create(profile, done);
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

app.post('/api/user/create', userCtrl.create);
app.post('/api/Listing/create', listingCtrl.create);

passport.serializeUser(function(user, done){
  done(null, user);
})

passport.deserializeUser(function(obj, done){
  done(null, obj);
})

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/api/me',
  failureRedirect: '/api/login'
}))

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('db connected');
})
app.listen(port, function(){
  console.log('listening on port:', port);
});