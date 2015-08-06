// update listing controller
var app = angular.module('treasureHunters');

app.controller('updateCtrl', function($scope, mainService, $location) {

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
  'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
  'WY').split(' ').map(function (state) { return { abbrev: state }; });

  $scope.updateListing = {};

  $scope.updateListing = function (newListing) {
  	// mainService.createListing(newListing).then(function(res) {
  	// 	console.log(res);
  	// }, function(err){
		// 	console.log(err);
		// })
  }

});
