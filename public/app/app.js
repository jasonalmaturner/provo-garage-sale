var app = angular.module('treasureHunters', ["ngRoute", "ngMaterial", "ngAnimate"]);

app.config(function($routeProvider){

$routeProvider
	.when('/home', {
		templateUrl:'app/views/home/homeTmpl.html',
		controller: 'listingCtrl',
		// resolve: {
		// 	listings: function(mainService){
		// 		var dfd = $q.defer();
		// 		navigator.geolocation.getCurrentPosition(function(position){
		// 			mainService.getListings([position.coords.latitude, position.coords.longitude]).then(function(res){
		// 				dfd.resolve(res);
		// 			}, function(err){
		// 				dfd.reject(err);
		// 			});
		// 		});
		// 		return dfd.promise;
		// 	}
		// }
	})

});
