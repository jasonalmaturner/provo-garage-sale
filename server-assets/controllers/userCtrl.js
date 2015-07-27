var User = require('../models/userModel');

module.exports = {

	create: function(profile, done){
		console.log(1111111, profile, User.findOne);
		var tempUser = {
			name: profile.displayName,
			facebookid: profile.id
		};
		User.findOne({facebookid: profile.id}, function(err, user){
			console.log('anything', err, user);
			if(err){
				console.log(33333, err)
				return done(err, user);
			};
			if (user){
				console.log(444444, user)
				return done(null, user);
			} else {
				var newUser = new User(tempUser);
				newUser.save(function(err, result){
					console.log(5555555, err, result)
					return done(err, result);
				});
			};
		});

	}


}