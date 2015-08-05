// home controller file

var app = angular.module('treasureHunters');

app.controller('homeCtrl', function($scope, listings) {
  $scope.theListings = listings;
  
  // $scope.favorites = favorites;
  // console.log($scope.theListings);
  // $scope.active = false;
  //
  // $scope.testClick = function(instance, theEvent, marker){
  //   console.log(111,instance, 222, instance.getIcon, 333,marker);
  //   for(var i = 0; i < $scope.theListings.length; i++){
  //     if($scope.theListings[i]._id === marker._id){
  //       $scope.theListings[i].clicked = true;
  //       $scope.theListings[i].icon = 'http://maps.gpsvisualizer.com/google_maps/icons/google/green.png'
  //       // instance.setIcon('http://maps.gpsvisualizer.com/google_maps/icons/google/green.png');
  //     } else {
  //       $scope.theListings[i].clicked = false;
  //       $scope.theListings[i].icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
  //       // instance.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
  //     }
  //   }
  // };
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 };
});
