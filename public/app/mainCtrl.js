// main control file

var app = angular.module('treasureHunters');

app.controller('mainCtrl', function($scope, authService, $location){
	$scope.$watch(authService.isLoggedIn, function (isLoggedIn){
		$scope.isLoggedIn = isLoggedIn;
		$scope.currentUser = authService.currentUser();
		console.log($scope.currentUser);
	});

	$scope.distances = ["5 miles", "15 miles", "25 miles"];

  $scope.showSearchBar = $location.path() === '/home';

  $scope.location = '';
  $scope.submitLocSearch = function(location, distance){
      mainService.getListings($scope.location).then(function(res){
          $scope.theListings = res.data;
      })
  }    

});
