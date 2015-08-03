// application file

var app = angular.module('treasureHunters', ["ngRoute", "ngMaterial", "ngAnimate", "uiGmapgoogle-maps"]);

app.config(function($routeProvider, uiGmapGoogleMapApiProvider){

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
			},
			favorites: function(mainService){
				return mainService.getFavorites();
			}
		}
	})
	.when('/listing', {
		templateUrl: 'app/views/listing/listing.html',
		controller: 'listingCtrl'
	})
	.when('/user', {
		templateUrl: 'app/views/user/userTmpl.html',
		controller: 'userCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	})

uiGmapGoogleMapApiProvider.configure({
	key: 'AIzaSyBifIcf6wbqjTZfAcuKKBjp1wk0XRMA_wA',
	v: '3.17',
	libraries: 'weather, geometry, visualization'
})


});
