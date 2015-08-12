// update listing controller
var app = angular.module('treasureHunters');

app.controller('updateCtrl', function($scope, mainService, $location, listings, $mdDialog) {

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
  'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
  'WY').split(' ').map(function (state) { return { abbrev: state }; });

  $scope.userListings = listings;

  $scope.showRemove = false;

  $scope.listingClick = function (listing) {
    // var listingmod = listing;
    // Date(listingmod.startDate);
    // Date(listingmod.endDate);
    $scope.showRemove = true;
    listing.startDate = new Date(listing.startDate);
    listing.endDate = new Date(listing.endDate);
    listing.time = new Date(listing.time);
  	$scope.editListing = listing;
  }

  $scope.updateListing = function (listingid, listinginfo, ev) {
    mainService.updateListing(listingid, listinginfo).then(function (res, err) {
      if (err) {
        $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Update failed, please try again.')
          .ok('Ok')
          .targetEvent(ev)
        )
      }
      else {
        mainService.listingByUser($scope.currentUser._id).then(function(resp) {
          $scope.userListings = resp;
            $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Listing updated successfully!')
            .ok('Ok')
            .targetEvent(ev)
          )
        }, function (err) {
          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Error retrieving new listings')
            .ok('Ok')
            .targetEvent(ev)
          )
        })
      }
    })
  }

  $scope.removeListing = function (listingid, ev) {
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete your listing?')
      .ok('Please do it!')
      .cancel('Cancel')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
        mainService.removeListing(listingid).then(function (res, err) {
          mainService.listingByUser($scope.currentUser._id).then(function(resp) {
            $scope.userListings = resp;
            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('Listing removed!')
              .ok('Ok')
              .targetEvent(ev)
            )
            $scope.showRemove = false;  
            }, function (err) {
              $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Error retrieving new listings')
                .ok('Ok')
                .targetEvent(ev)
              ) 
            })
        }, function (err) {
          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Removing listing failed, please try again')
            .ok('Ok')
            .targetEvent(ev)
          ) 
        });
    });
  };
});
