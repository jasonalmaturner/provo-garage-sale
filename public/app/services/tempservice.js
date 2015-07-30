// template service file 

var app = angular.module('treasureHunters');

app.service('mainService', function($http, $q) {

	this.getAllListings = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8040/api/Listings'
		}).then(function(response){
			return response.data;
		})
	},

	this.createListing = function(listingInfo) {
		return $http({
			method: 'POST',
			url: 'http://localhost:8040/api/Listing/create',
			data: listingInfo
		}).then(function(response){
			return response.data;
		})
	},

	this.getFavorites = function(userId) {
		return $http({
			method: 'GET',
			url: 'http://localhost:8040/api/user/favorites/' + userId
		}).then(function(response){
			return response.data;
		})
	},

	this.removeListing = function(listingId) {
		return $http({
			method: 'DELETE',
			url: 'http://localhost:8040/api/Listing/' + listingId
		}).then(function(response){
			return response.data;
		})
	},

	this.updateListing = function(listingId, modifiedListing) {
		return $http({
			method: 'PUT',
			url: 'http://localhost:8040/api/Listing/' + listingId,
			data: modifiedListing
		}).then(function(response){
			return response.data;
		})
	},

	this.listingByUser = function(userId) {
		return $http({
			method: 'GET',
			url: 'http://localhost:8040/api/Listing/user/' + userId
		}).then(function(response){
			return response.data;
		})
	},

	this.getOneListing = function(listingId) {
		return $http({
			method: 'GET',
			url: 'http://localhost:8040/api/Listing/' + listingId
		}).then(function(response){
			return response.data;
		})
	},

	this.addFavorite = function(listingId, userId) {
		return $http({
			method: 'PUT',
			url: 'http://localhost:8040/api/user/favorite/add/' + userId + '?listing=' + listingId
		}).then(function(response){
			return response.data;
		})
	},

	this.removeFavorite = function(listingId, userId) {
		return $http({
			method: 'PUT',
			url: 'http://localhost:8040/api/user/favorite/remove/' + userId + '?listing=' + listingId
		}).then(function(response){
			return response.data;
		})
	}

})
