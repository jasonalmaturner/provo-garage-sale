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
	    Listing.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
	      if (err) return res.status(500).send(err);
	      res.json(result);
	    })
	},

	readByUser: function(req, res) {
		Listing.find({ user: req.params.id })
		.populate('user')
		.exec(function (err, result) {
			if (err) return res.status(500).send(err);
			res.send(result);
		});
	},

	readByListing: function(req, res) {
		Listing.find({ _id: req.params.id })
		.populate('_id')
		.exec(function (err, result) {
			if (err) return res.status(500).send(err);
			res.send(result);
		});
	}

};