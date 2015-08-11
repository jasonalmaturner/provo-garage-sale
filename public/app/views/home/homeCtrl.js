// home controller file

var app = angular.module('treasureHunters');

app.controller('homeCtrl', function($scope, listings, mainService) {
	$scope.theListings = listings;
	$scope.favorites = $scope.currentUser ? $scope.currentUser.favorites : false;
  	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 };

                        // Search by Distance
    $scope.distances = ["5", "15", "25"];

                        // Search by location

  	$scope.submitLocSearch = function(location, distance){
    	console.log('hitmainctrl', location, $scope.locationSearch);
    	mainService.geocode(location).then(function(res) {
    		console.log('geocodeinmain', res);
    		$scope.map.center.latitude = res.data.latitude;
    		$scope.map.center.longitude = res.data.longitude;
    		mainService.getListings([res.data.longitude, res.data.latitude], distance).then(function(resp){
    			console.log("newlistingsmainctrl", resp);
            	$scope.theListings = resp;
            	console.log("thelistingsafter", $scope.theListings)
        	})
    	})
    }
});
