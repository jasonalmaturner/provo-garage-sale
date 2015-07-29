var app = angular.module('treasureHunters', ["ngRoute"]);

app.config(function($routeProvider, $q){

$routeProvider
	.when('/home', {
		templateUrl:'app/views/home/homeTmpl.html',
		controller: 'homeCtrl',
		resolve: {
			listings: function(mainService){
				var dfd = $q.defer();
				navigator.geolocation.getCurrentPosition(function(position){
					mainService.getListings([position.coords.latitude, position.coords.longitude]).then(function(res){
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
