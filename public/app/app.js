// application file

var app = angular.module('treasureHunters', ["ngRoute", "ngMaterial", "ngAnimate"]);

app.config(function($routeProvider){

$routeProvider
	.when('/home', {
		templateUrl:'app/views/home/homeTmpl.html',
		controller: 'homeCtrl',
		resolve: {
			listings: function(mainService, $q){
				var dfd = $q.defer();
				navigator.geolocation.getCurrentPosition(function(position){
					mainService.getListings([position.coords.longitude, position.coords.latitude]).then(function(res){
						dfd.resolve(res);
					}, function(err){
						dfd.reject(err);
					});
				});
				return dfd.promise;
			}
		}
	})

});
