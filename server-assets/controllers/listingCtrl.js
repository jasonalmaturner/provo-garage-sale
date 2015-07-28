var Listing = require('../models/listingModel.js');

module.exports = {

	create: function(req, res){
		console.log(11111, req.body)
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
	}

};