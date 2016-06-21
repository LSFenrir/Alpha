/**
 * Created by Robin Holzwarth on 16.06.2016.
 */
var map, marker, lat, lon;
function initMap() {


navigator.geolocation.getCurrentPosition(function (position) {

    lat = position.coords.latitude;
    lon = position.coords.longitude;


    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lon},
        zoom: 18
    });

    marker = new google.maps.Marker({
        position: {lat: lat, lng: lon},
        map:map,
        title:'Standort'
    })

})
}

function createroute(target_lat, target_lng){


}