// listing controller file

var app = angular.module('treasureHunters');

app.controller('listingCtrl', function($scope, mainService, $location) {
  $scope.userState = '';
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
  'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
  'WY').split(' ').map(function (state) { return { abbrev: state }; });

  $scope.newListing = {};

  $scope.submitListing = function (newListing) {
  	mainService.createListing(newListing).then(function (res, err) {
  		if (err) {
  			alert('Submission failed, please try again');
  		}
  		else {
  			alert('Submission successful, thank you for using our app!');
  			$location.path("home");
  		}
  	})
  }

});
