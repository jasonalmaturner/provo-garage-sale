// home controller file

var app = angular.module('treasureHunters');

app.controller('homeCtrl', function($scope, listings, mainService) {
	$scope.theListings = listings;
    for (var i = 0; i < $scope.theListings.length; i++) {
        $scope.theListings[i].startDate = new Date($scope.theListings[i].startDate);
        $scope.theListings[i].endDate = new Date($scope.theListings[i].endDate);
        $scope.theListings[i].startDate.setHours(0,0,0,0);
        $scope.theListings[i].endDate.setHours(0,0,0,0);
        $scope.theListings[i].startDate = $scope.theListings[i].startDate.toISOString();
        $scope.theListings[i].endDate = $scope.theListings[i].endDate.toISOString();
    }
	$scope.favorites = $scope.currentUser ? $scope.currentUser.favorites : false;
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 };

                      // Search by Distance
  $scope.distances = ["5", "15", "25"];

                      // Search by location

	$scope.submitLocSearch = function(location, distance){
  	mainService.geocode(location).then(function(res) {
  		$scope.map.center.latitude = res.data.latitude;
  		$scope.map.center.longitude = res.data.longitude;
  		mainService.getListings([res.data.longitude, res.data.latitude], distance).then(function(resp){
          	$scope.theListings = resp;
      	})
  	})
  };

  $scope.dateSearch = new Date;
  $scope.dateSearch.setHours(0,0,0,0);
  $scope.dateSearch.toISOString();

  $scope.dateFilter = function (date) {
      $scope.dateModified = date;
      $scope.dateModified.setHours(0,0,0,0)
      $scope.dateModified = $scope.dateModified.toISOString();
  }
});
