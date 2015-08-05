// authorization service file

var app = angular.module('treasureHunters');

app.service('authService', function($http, $q){

	var currentUser;

	this.login = function() {
		$http({
			method: 'GET',
			url: '/api/user'
		}).then(function(res){
			console.log(res);
			currentUser = res.data;
		}, function(err){
			console.log(err);
		});
	};

	this.logout = function(){

	};

	this.isLoggedIn = function(){
		return currentUser ? true : false;
	};

	this.currentUser = function(){
		return currentUser;
	};

});
