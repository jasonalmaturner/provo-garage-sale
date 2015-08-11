// listing controller file

var app = angular.module('treasureHunters');

app.controller('listingCtrl', function($scope, mainService, $location, $mdDialog) {
  $scope.userState = '';
  
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
  'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
  'WY').split(' ').map(function (state) { return { abbrev: state }; });

  $scope.newListing = {};

  $scope.submitListing = function (newListing, ev) {
  	mainService.createListing(newListing).then(function (res, err) {
  		if (err) {
        $mdDialog.show(
  			$mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Submission failed, please try again')
          .ok('Ok')
          .targetEvent(ev)
        )
  		}
  		else {
        $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Submission successful, thank you for using website!')
          .ok('Ok')
          .targetEvent(ev)
        )
  			$location.path("home");
  		}
  	})
  }

});
