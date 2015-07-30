// main service file

var app = angular.module('treasureHunters');

app.service('mainService', function($http, $q){

this.getListings = function(position){
  var dfd = $q.defer();
  $http({
    method: 'GET',
    url: '/api/Listings/' + position[0] + '/' + position[1] + '?distance=50000'
  }).then(function(res){
    dfd.resolve(res.data);
  }, function(err){
    dfd.reject(err);
  });
  return dfd.promise;
}

});
