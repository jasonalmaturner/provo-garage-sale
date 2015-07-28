var mongoose = require('mongoose');

var Listing = new mongoose.Schema({
	address: 
	{ 
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true, maxlength: 2 },
		zip: { type: String, required: true, maxlength: 5 },
	},
	date: [{ type: Date, required: true }],
	picture: { type: String, default: "http://www.clker.com/cliparts/l/a/V/x/F/r/house-icon-dark-green-md.png"},
	description: { type: String, required: true, default: "Come on down!" },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

module.exports = mongoose.model('Listing', Listing);