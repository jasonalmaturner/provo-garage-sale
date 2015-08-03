// authorization service file 

var app = angular.module('treasureHunters');

app.service('authService', function(){
	var currentUser;

	return {
		loging: function() {},
		logout: function(){},
		isLoggedIn: function(){},
		currentUser: function(){return currentUser;}
	}
});
