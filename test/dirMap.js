angular.module('mapsApp', []).controller('MapCtrl', function ($scope) {

	google.maps.event.addDomListener(window, "load", initMap);
    //Data
var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    },
    {
        lat: 40.226734,
        long: -111.660287
    },
    {
        lat: 40.251274,
        long: -111.658629
    },
    {
        lat: 40.231010,
        long: -111.660501
    }
];

	var initMap = function() {
		 var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(40.226294, -111.660776),
        //styles:[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b4d4e1"},{"visibility":"on"}]}]
    }
		$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	}
    // var mapOptions = {
    //     zoom: 12,
    //     center: new google.maps.LatLng(40.226294, -111.660776),
    //     //styles:[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b4d4e1"},{"visibility":"on"}]}]
    // }

    // $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city,
            animation: google.maps.Animation.DROP,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        
        google.maps.event.addListener(marker, 'click', function(){
            $scope.openInfoWindow(null, marker);
            $scope.$digest();
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        for (var i = 0; i < $scope.markers.length; i++) {
            $scope.markers[i].setAnimation(null)
            $scope.markers[i].setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
        }

        e && e.preventDefault();
        
        // infoWindow.setContent('<h2>' + selectedMarker.title + '</h2>' + selectedMarker.content);
        // infoWindow.open($scope.map, selectedMarker);
        $scope.markerId = $scope.markers.indexOf(selectedMarker);
        $scope.map.setCenter(selectedMarker.getPosition())
        selectedMarker.setIcon('http://maps.gpsvisualizer.com/google_maps/icons/google/green.png');
        if (selectedMarker.getAnimation() != null) {
            selectedMarker.setAnimation(null);
        } else {
            selectedMarker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
})