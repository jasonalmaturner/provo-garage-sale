var Listing = require('../models/listingModel.js');

module.exports = {

	create: function(req, res){
		var newListing = new Listing(req.body);
		newListing.save(function (err, result) {
			if (err) {
				return res.status(500).end();
			}
			return res.json(result);
		})
	},

	delete: function(req, res) {
	    Listing.findByIdAndRemove(req.params.id, function(err, result) {
	      if (err) return res.status(500).send(err);
	      res.json(result);
	    });
	},

	update: function(req, res) {
	    Listing.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, result) {
	      if (err) return res.status(500).send(err);
	      res.json(result);
	    })
	},

	addListing: function(req, res){
		Listing.findByIdAndUpdate(req.params.listingId), {$push: {userRefNum: req.user._id}}, {new:true}, function(err, result){
			if(!err) res.status(200).json(result);
		}
	}

};