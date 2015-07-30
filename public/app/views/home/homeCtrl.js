// home controller file
var app = angular.module('treasureHunters');

app.controller('homeCtrl', function($scope, listings) {
  $scope.theListings = listings;
  console.log(listings);
  $scope.active = false;
});
