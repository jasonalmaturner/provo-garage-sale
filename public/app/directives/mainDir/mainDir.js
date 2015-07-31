// Main directive file of mainDir.html

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
		},
		link: function(elem, attr, scope){
		}
	}
});
