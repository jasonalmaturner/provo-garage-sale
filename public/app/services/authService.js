// authorization service file

var app = angular.module('treasureHunters');

app.service('authService', function($http, $q){

	var currentUser;
	this.login = login;
	var login = function() {
		$http({
			method: 'GET',
			url: '/api/user'
		}).then(function(res){
			currentUser = res.data;
			isLoggedIn = true;
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
	login();

});
