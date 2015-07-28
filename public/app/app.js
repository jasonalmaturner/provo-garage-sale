var app = angular.module('treasureHunters', ["ngRoute"]);

app.config(function($routeProvider){

$routeProvider
	.when('/home', {
		templateUrl:'app/views/home/homeTmpl.html',
		controller: 'homeCtrl'
	})


});