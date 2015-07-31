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
			// navigator.geolocation.getCurrentPosition(function())

			uiGmapGoogleMapApi.then(function(map){
				console.log(map);
			}, function(err){
				console.log(err);
			})

			uiGmapIsReady.promise().then(function(map){
				console.log(map);
			}, function(err){
				console.log(err)
			});

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
