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
  };

  this.createListing = function(listingInfo) {
    return $http({
      method: 'POST',
      url: '/api/Listing/create',
      data: listingInfo
    }).then(function(response){
      return response.data;
    })
  };

  this.addFavorite = function(listingId) {
    return $http({
      method: 'PUT',
      url: '/api/user/favorite/add?listing=' + listingId
    }).then(function(response){
      return response.data;
    })
  };

  this.getFavorites = function(){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/user/favorites'
    }).then(function(res){
      console.log(res);
      dfd.resolve(res.data);
    }, function(err){
      dfd.reject(err);
    });
  };

  this.listingByUser = function(userId) {
    return $http({
      method: 'GET',
      url: '/api/Listing/user/' + userId
    }).then(function(response){
      return response.data;
    })
  };

  this.removeFavorite = function(id){
    var dfd = $q.defer();
    $http({
      method: 'PUT',
      url: '/api/user/favorite/remove/' + id
    }).then(function(res){
      dfd.resolve(res);
    }, function(err){
      dfd.reject(err);
    });
    return dfd.promise;
  };

  this.updateListing = function(listingId, modifiedListing) {
    return $http({
      method: 'PUT',
      url: 'http://localhost:8040/api/Listing/' + listingId,
      data: modifiedListing
    }).then(function(response){
      return response.data;
    })
  };

});
