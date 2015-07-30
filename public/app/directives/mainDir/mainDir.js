// Main directive file of mainDir.html

var app = angular.module('treasureHunters');

app.directive('mainDir', function(){
	return {
		restrict: 'EA',
		templateUrl: 'app/directives/mainDir/mainDir.html',
		// scope: {
		// 	listings: '='
		// },
		controller: function($scope){
		},
		link: function(elem, attr, scope){
		}
	}
});
