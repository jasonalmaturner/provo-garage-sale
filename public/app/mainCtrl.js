// main control file

var app = angular.module('treasureHunters');

app.controller('mainCtrl', function($scope, authService){
	$scope.$watch(authService.isLoggedIn, function (isLoggedIn){
		$scope.currentUser = authService.currentUser;
	})
});