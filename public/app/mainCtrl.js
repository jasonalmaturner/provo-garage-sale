// main control file

var app = angular.module('treasureHunters');

app.controller('mainCtrl', function($scope, authService, $location, mainService, $mdDialog){

    // User State 
    $scope.$watch(authService.isLoggedIn, function (isLoggedIn){
			$scope.isLoggedIn = isLoggedIn;
			$scope.currentUser = authService.currentUser();
			console.log($scope.currentUser);
		});


    $scope.addClick = function(ev) {
        console.log("hit add")
        if ($scope.currentUser !== undefined) {
            $location.path('listing')
        }
        else {
            $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('You must login to Add a Listing!')
                .ok('Ok, Got it!')
                .targetEvent(ev)
            );

        };
    };

    $scope.myListingClick = function(ev) {
        if ($scope.currentUser !== undefined) {
            $location.path('update');
        }
        else {
            $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('You must login to Manage Listings!')
                .ok('Ok, Got it!')
                .targetEvent(ev)
            );
        }
    };
});
