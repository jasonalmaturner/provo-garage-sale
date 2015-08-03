// Main directive

var app = angular.module('treasureHunters');

app.directive('mainDir', function(){
	return {
		restrict: 'EA',
		templateUrl: 'app/directives/mainDir/mainDir.html',
		// scope: {
		// 	listings: '='
		// },
		controller: function($scope, uiGmapGoogleMapApi, uiGmapIsReady){
			navigator.geolocation.getCurrentPosition(function(position){
				$scope.map.center.latitude = position.coords.latitude;
				$scope.map.center.longitude = position.coords.longitude;
			})

			uiGmapGoogleMapApi.then(function(map){
			}, function(err){
			})

			// uiGmapIsReady.promise().then(function(map){
			// 	console.log(map);
			// }, function(err){
			// 	console.log(err)
			// });

			// $scope.map = {
			// 	center: {
			// 		latitude: 45,
			// 		longitude: -73
			// 	},
			// 	zoom: 8
			// };

			console.log($scope.theListings);
			$scope.active = false;

			// $scope.matchFavorites = function(){
			// 	for(var i = 0; i < $scope.theListings.length; i++){
			// 		for(var j = 0; j < $scope.favorites.length; j++){
			// 			if($scope.theListings[i]._id === $scope.favorites[i]){
			// 				$scope.theListings[i].favorite = true;
			// 		};
			// 	};
			// };
			// $scope.matchFavorites();

			$scope.testClick = function(instance, theEvent, marker){
				console.log(111,instance, 222, instance.getIcon, 333,marker);
				for(var i = 0; i < $scope.theListings.length; i++){
					if($scope.theListings[i]._id === marker._id){
						$scope.theListings[i].clicked = true;
						$scope.theListings[i].icon = 'http://maps.gpsvisualizer.com/google_maps/icons/google/green.png'
						// instance.setIcon('http://maps.gpsvisualizer.com/google_maps/icons/google/green.png');
					} else {
						$scope.theListings[i].clicked = false;
						$scope.theListings[i].icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
						// instance.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
					}
				}
			};

			$scope.listingClick = function(listing){
				listing.clicked = !listing.clicked;
				listing.icon = 'http://maps.gpsvisualizer.com/google_maps/icons/google/green.png';
				for(var i = 0; i < $scope.theListings.length; i++){

				}
			}
		},
		link: function(elem, attr, scope){
		}
	}
});
