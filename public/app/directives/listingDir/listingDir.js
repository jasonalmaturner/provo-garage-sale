// Listing directive 

var app = angular.module('treasureHunters');

app.directive('listingDir', function(){
	return {
		restrict: "EA",
		templateUrl: "app/directives/listingDir/listingDir.html",
		link: function (elem, attr, scope){

		},
		controller: function($scope, mainService){
			$scope.toggleFavorite = function(id){
				console.log(id)
			}
		}
	}
});
