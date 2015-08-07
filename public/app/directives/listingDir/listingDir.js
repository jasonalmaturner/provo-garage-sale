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
				if(listing.favorite){
					mainService.removeFavorite(listing._id).then(function(res){
						listing.favorite = false;
						console.log($scope.favorites);
						$scope.favorites = updateFavorites(listing, $scope.theListings, $scope.favorites);
						console.log($scope.favorites);
						// $scope.matchFavorites();
					}, function(err){
						// $scope.matchFavorites();
						console.log(err);
					})
				} else {
					mainService.addFavorite(listing._id).then(function(res){
						listing.favorite = true;
						console.log($scope.favorites);
						$scope.favorites = updateFavorites(listing, $scope.theListings, $scope.favorites);
						console.log($scope.favorites);
						// $scope.matchFavorites();
					}, function(err){
						// $scope.matchFavorites();
						console.log(err);
					})
				};
				// listing.favorite = !listing.favorite;
			}

			var updateFavorites = function(theListing, listings, favorites){
				var newFavorites = favorites.slice(0);
				if(theListing.favorite){
					newFavorites.push(theListing);
				} else {
					for(var i = 0; i < newFavorites.length; i++){
						if(newFavorites[i]._id === theListing._id){
							newFavorites.splice(i, 1);
						};
					};
				};
				return newFavorites;
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
