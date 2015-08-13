var Listing = require('../models/listingModel.js');
var geocoderProvider = 'google';

var geocoder = require('node-geocoder')(geocoderProvider);

module.exports = {

	create: function(req, res){
		if(!req.user) return res.status(501).send('User not logged in');
		var newListing = new Listing(req.body);
		geocoder.geocode(newListing.address.street + ' ' + newListing.address.city + ' ' + newListing.address.state + ' ' + newListing.address.zip)
		.then(function(response){
			newListing.loc = [response[0].longitude, response[0].latitude];
			newListing.user = req.user._id;
			// console.log("create req user id", req.user._id);
			newListing.save(function (err, result) {
			if (err) {
				return res.status(500).end();
			}
				return res.json(result);
			})
		}, function(err){
			return res.status(500).json(err);
		});
	},

	delete: function(req, res) {
	    Listing.findByIdAndRemove(req.params.id, function(err, result) {
	      if (err) return res.status(500).send(err);
	      res.json(result);
	    });
	},

	update: function(req, res) {
			delete req.body._id;
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
	},

	getAllListings: function(req, res) {
		Listing.find(req.query)
		.exec(function (err, result) {
			if (err) {
				return res.status(500).json(err);
			} else {
				return res.json(result);
			}
		})
	},

	getByArea: function(req, res){
		// Start building in query by date
		var limit = req.query.limit || 20;
		var maxDistance = req.query.distance || 5;
		// maxDistance /= 6371;
		var coords = [req.params.lon, req.params.lat];
		Listing.find({
			loc: {
				$near: coords,
				$maxDistance: (maxDistance / 69)
			}
		}).limit(limit).exec(function(err, listings){
			if(err) return res.status(500).json(err);
			return res.json(listings);
		})
	},

	geocode: function(req, res) {
		geocoder.geocode(req.query.location).then(function(response) {
			console.log(response[0]);
			return res.json(response[0]);
		}), function(err){
			return res.status(500).json(err);
		};
	}

};
