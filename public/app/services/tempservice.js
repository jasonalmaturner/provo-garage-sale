var app = angular.module('treasureHunters');

app.service('mainService', function($http, $q) {

	this.getAllListings = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8040/api/Listing'
		})
	}

})