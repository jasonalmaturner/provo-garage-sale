var User = require('../models/userModel');

module.exports = {

	create: function(profile, done){
		var tempUser = {
			name: profile.displayName,
			facebookid: profile.id
		};
		User.findOne({facebookid: profile.id}, function(err, user){
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

	},

	getUser: function(req, res){
		// if(req.user){
		// 	return res.json(req.user);
		// } else {
		// 	return res.status(401).send('User not logged in');
		// };
		return req.user ? res.json(req.user) : res.status(401).send('User not logged in');
	},

	getUserPopulated: function(req, res){
		if(!req.user) return res.status(501).send('User not logged in');
		// var id = req.user ? req.user._id : req.query.id;
		User.findById(req.user._id).populate('favorites').exec(function(err, user){
			if(err) return res.status(500).json(err);
			if(!user){
				return res.status(401).send('User not logged in');
			} else {
				return res.json(user);
			};
		});
	},

	// Unused
	// modifyFavorites: function(req, res){
	// 	User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
	// 		console.log(req.body);
	//       if (err) return res.status(500).send(err);
	//       res.json(result);
	//     })
	// },

	// addFavorite: function(req, res){
	// 	User.findById(req.params.id, function (err, user){
	// 		if(err) return res.status(500).json(err);
	// 		var newFavorites = user.favorites.concat(req.query.listing);
	// 		user.favorites = newFavorites;
	// 		user.save(function(err, result){
	// 			if(err) return res.status(500).json(err);
	// 			res.json(result);
	// 		});
	// 	});
	// },

	addFavorite: function(req, res){
		var id = req.user ? req.user._id : req.query.id;
		User.findById(id, function (err, user){
			if(err) return res.status(500).json(err);
			if(!user) return res.status(500).send('user not found');
			if(user.favorites.indexOf(req.query.listing) !== -1){
				console.log()
				return res.status(502).send('favorite already added')
			}
			var newFavorites = user.favorites.concat(req.query.listing);
			user.favorites = newFavorites;
			user.save(function(err, result){
				if(err) return res.status(500).json(err);
				res.json(result);
			});
		});
	},

	removeFavorite: function(req, res){
		if(!req.user) return res.status(401).send('User not logged in');
		User.findById(req.user._id, function (err, user){
			if(err) return res.status(500).json(err);
			var index = user.favorites.indexOf(req.params.id);
			if(index === -1) return res.status(501).send('favorite not found');
			user.favorites.splice(index, 1);
			user.save(function(err, result){
				if(err) return res.status(500).json(err);
				res.json(result);
			});
		});
	},

	favorites: function(req, res){
		User.find({ _id: req.params.id })
			.populate('favorites')
			.exec(function (err, result) {
				console.log(result)
				if (err) return res.status(500).json(err);
				return res.json(result[0].favorites);
			});
	},

	favoritesPlain: function(req, res){
		User.findById(req.user._id).exec(function(err, user){
			if(err) return res.status(500).json(err);
			if(user){
				return res.status(401).send('User not logged in');
			} else {
				return res.json(user.favorites);
			};
		});
	}
};
