var locations_position = 0;
var v_location = ["Standort 1", "Standort 2", "Standort 3", "Standort 4", "Standort 5"];
var v_street = ["Straße 1", "Straße 2", "Straße 3", "Straße 4", "Straße 5"];
var v_postcode = ["PLZ 1 Ort 1", "PLZ 2 Ort 2", "PLZ 3 Ort 3", "PLZ 4 Ort 4", "PLZ 5 Ort 5"];


var map;

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: {lat: 49.122631, lng: 9.206131},
        zoom: 17,
        tilt: 0,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false
    });

}

function calc_route(){

    $("div#location_container").animate({
        left: "100%",
    }, 500, "swing", function () {
    });
}