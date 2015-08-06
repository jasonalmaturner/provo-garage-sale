// Listing directive

var app = angular.module('treasureHunters');

app.directive('listingDir', function(){
	return {
		restrict: "EA",
		templateUrl: "app/directives/listingDir/listingDir.html",
		link: function (elem, attr, scope){

		},
		controller: function($scope, mainService){
			$scope.toggleFavorite = function(listing){
				// if(listing.favorite){
				// 	mainService.removeFavorite
				// }
				mainService.addFavorite(listing._id).then(function(res){
					$scope.matchFavorites();
				}, function(err){
					console.log(err);
				})
			}
			$scope.star = function(){
				checked = false;
			}
			$scope.next = function() {
      	$scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    	};
  		$scope.previous = function() {
    		$scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
  		};
		}
	}
});
