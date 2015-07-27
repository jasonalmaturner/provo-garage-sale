var User = require('../models/userModel.js');

module.exports = {

	create: function(req, res){
		var newUser = new User(req.body);
		newUser.save(function (err, result) {
			if (err) {
				return res.status(500).end();
			}
			return res.json(result);
		})
	},

	login: function(req, res){
		console.log(req.body);
		return res.status(200).json(req.user);
	}


}