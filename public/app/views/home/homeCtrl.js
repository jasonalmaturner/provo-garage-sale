// home controller file

var app = angular.module('treasureHunters');

app.controller('homeCtrl', function($scope, listings) {
  $scope.theListings = listings;
  $scope.favorites = $scope.currentUser ? $scope.currentUser.favorites : false;
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 };
});
