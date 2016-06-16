/**
 * Created by Robin Holzwarth on 16.06.2016.
 */
var map;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}