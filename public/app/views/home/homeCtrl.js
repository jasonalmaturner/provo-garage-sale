// home controller file

var app = angular.module('treasureHunters');

app.controller('homeCtrl', function($scope, listings) {
  $scope.theListings = listings;
  console.log($scope.theListings);
  $scope.active = false;
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  $scope.testClick = function(instance, theEvent, marker){
    console.log(111,instance, 222,theEvent, 333,marker);
    for(var i = 0; i < $scope.theListings.length; i++){
      if($scope.theListings[i]._id === marker._id){
        $scope.theListings[i].clicked = true;
        console.log($scope.theListings[i])
        console.log('match')
      } else {
        $scope.theListings[i].clicked = false;
      }
    }
  };
});
