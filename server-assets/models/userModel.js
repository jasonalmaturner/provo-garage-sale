var mongoose = require('mongoose');

var User = new mongoose.Schema({
	facebookid: { type: String },
	name: { type: String },
	favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }]
});

module.exports = mongoose.model("User", User);
