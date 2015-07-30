var app = angular.module('treasureHunters');

app.controller('homeCtrl', function($scope, listings) {
  $scope.theListings = listings;
  $scope.active = true;
  $scope.active1 = true;
});
