var locations_position = 0;
var v_location = ["Standort 1", "Standort 2", "Standort 3", "Standort 4", "Standort 5"];
var v_street = ["Straße 1", "Straße 2", "Straße 3", "Straße 4", "Straße 5"];
var v_postcode = ["PLZ 1 Ort 1", "PLZ 2 Ort 2", "PLZ 3 Ort 3", "PLZ 4 Ort 4", "PLZ 5 Ort 5"];

function init() {

    //*$.event.special.swipe.scrollSupressionThreshold = 10; // More than this horizontal displacement, and we will suppress scrolling.
    //$.event.special.swipe.horizontalDistanceThreshold = 30; // Swipe horizontal displacement must be more than this.
    //$.event.special.swipe.durationThreshold = 500;  // More time than this, and it isn't a swipe.
    //$.event.special.swipe.verticalDistanceThreshold = 75; // Swipe vertical displacement must be less than this.

    //$("body").on("swiperight", swiperighthandler);
    //$("body").on("swipeleft", swipelefthandler);


}

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

function swiperighthandler() {
    if(locations_position>0)
    {
        locations_position--;
        move_location_menu();
    }
}
function swipelefthandler() {
    if(locations_position<4)
    {
        locations_position++;
        move_location_menu();
    }
}

function show_locations() {

    $("div#location_container").animate({
        left: 0
    }, 500, "swing", function () {
    });


}

function move_location_menu() {
    $("p.location").text(v_location[locations_position]);
    $("p.street").text(v_street[locations_position]);
    $("p.postcode").text(v_postcode[locations_position]);
}

function calc_route(){

    $("div#location_container").animate({
        left: "100%",
    }, 500, "swing", function () {
    });
}