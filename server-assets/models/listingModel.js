var mongoose = require('mongoose');

var Listing = new mongoose.Schema({
	title: { type: String, required: true },
	address: {
		street: { type: String, required: true, maxlength: 45 },
		city: { type: String, required: true, maxlength: 25 },
		state: { type: String, required: true, maxlength: 2 },
		zip: { type: String, required: true, maxlength: 5 }
	},
	loc: {type: [Number], index: '2d'},
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	time: { type: String, required: true},
	picture: { type: String, default: "http://www.clker.com/cliparts/l/a/V/x/F/r/house-icon-dark-green-md.png"},
	description: { type: String, required: true, default: "Come on down!" },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

module.exports = mongoose.model('Listing', Listing);
