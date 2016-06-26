/**
 * Created by Robin Holzwarth on 16.06.2016.
 */
var map, marker, current_lat, current_lon;

var lat_Gebaeude = [49.122537, 49.148578, 49.275522, 49.112540, 49.154460];
var len_Gebaude = [9.210931, 9.216501, 9.712354, 9.743762, 9.208087];
var sname =  ["Campus Heilbronn - Sontheim", "Campus Heilbronn - Am Europaplatz", "Campus Künzelsau - Reinhold-Würth-Hochschule", "Campus Schwäbisch Hall", "Forschungsinkubator"];
var sstrasse = ["Max-Planck-Straße 39", "Am Europaplatz 11", "Daimlerstraße 35", "Ziegeleiweg 4", "Im Zukunftspark 10"];
var sort = ["74081 Heilbronn", "74076 Heilbronn", "74653 Künzelsau", "74523 Schwäbisch Hall", "74076 Heilbronn"];


var directionsService ;
var directionsDisplay ;

function initMap() {


    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();

    navigator.geolocation.getCurrentPosition(function (position) {

        current_lat = position.coords.latitude;
        current_lon = position.coords.longitude;


        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: current_lat, lng: current_lon},
            zoom: 18
        });


        marker = new google.maps.Marker({
            position: {lat: current_lat, lng: current_lon},
            map: map,
            title: 'Position'
        });


        google.maps.event.addListenerOnce(map, 'tilesloaded', checkroute());
    });

    //
}
function checkroute (){
    /* Check for route*/
    if (localStorage.route>0)
    {
        calcroute(localStorage.route);
        localStorage.route=0;

    }

}

function calc(route_number)
{
    localStorage.route=route_number;
    window.location.href="Routenberechnung.html";
}




function close_prev(){

    $(".preview_container").css("display","none");
}

function standgebaeude(standort) {

    if (!map) {

       map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat_Gebaeude[standort], lng: len_Gebaude[standort]},
            zoom: 18
        });
    }
    else{
        map.setCenter({lat:lat_Gebaeude[standort],lng:len_Gebaude[standort]});
    }
    marker = new google.maps.Marker({
        position: {lat: lat_Gebaeude[standort], lng: len_Gebaude[standort]},
        map:map,
        title:'Position'
    });

    $("dt.name").html(sname[standort]);
    $("dd.straße").html(sstrasse[standort]);
    $("dd.ort").html(sort[standort]);
    $(".preview_container").css("display","block");



}

function calcroute(standort){


    calculateAndDisplayRoute(lat_Gebaeude[standort-1],len_Gebaude[standort-1]);
    directionsDisplay.setMap(map);

}

function calculateAndDisplayRoute(lat,len) {

    var request = {
        origin:{lat:current_lat,lng:current_lon},
        destination: {lat:lat,lng:len},
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
        }
    });
}
