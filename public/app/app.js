// application file

var app = angular.module('treasureHunters', ["ngRoute", "ngMaterial", "ngAnimate", "uiGmapgoogle-maps"]);

app.config(function($routeProvider, uiGmapGoogleMapApiProvider){

$routeProvider
	.when('/home', {
		templateUrl: 'app/views/home/homeTmpl.html',
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
			// favorites: function(mainService){
			// 	authService.login();
			// 	return authService.currentUser();
			// }
		}
	})
	.when('/listing', {
		templateUrl: 'app/views/listing/listingTmpl.html',
		controller: 'listingCtrl'
	})
	.when('/update', {
		templateUrl: 'app/views/update/updateTmpl.html',
		controller: 'updateCtrl',
		resolve: {
			listings: function(mainService, authService, $q) {
				var dfd = $q.defer();
				mainService.listingByUser(authService.currentUser()._id).then(function(res) {
					console.log(res);
					dfd.resolve(res);
				}, function (err) {
					dfd.reject(err);
				});
				return dfd.promise;
			}
		}
	})
	.when('/user', {
		templateUrl: 'app/views/user/userTmpl.html',
		controller: 'userCtrl'
	})
	.when('/terms', {
		templateUrl: 'app/views/home/footer/terms.html',
		controller: 'mainCtrl'
	})
	.when('/privacy', {
		templateUrl: 'app/views/home/footer/privacy.html',
		controller: 'mainCtrl'
	})
	.when('/about', {
		templateUrl: 'app/views/home/footer/about.html',
		controller: 'mainCtrl'
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
