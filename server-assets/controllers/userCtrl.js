var User = require('../models/userModel');

module.exports = {

	create: function(profile, done){
		var tempUser = {
			name: profile.displayName,
			facebookid: profile.id
		};
		User.findOne({facebookid: profile.id}, function(err, user){
			console.log('anything', err, user);
			if(err){
				return done(err, user);
			};
			if (user){
				return done(null, user);
			} else {
				var newUser = new User(tempUser);
				newUser.save(function(err, result){
					return done(err, result);
				});
			};
		});

	}


}