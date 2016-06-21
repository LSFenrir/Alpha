/**
 * Created by Robin Holzwarth on 16.06.2016.
 */
var map, marker, current_lat, current_lon;

var lat_Gebaeude = [49.122537, 49.148578, 49.275522, 49.112540, 49.154460];
var len_Gebaude = [9.210931, 9.216501, 9.712354, 9.743762, 9.208087];
var sname =  ["Campus Heilbronn - Sontheim", "Campus Heilbronn - Am Europaplatz", "Campus Künzelsau - Reinhold-Würth-Hochschule", "Campus Schwäbisch Hall", "Forschungsinkubator"];
var sstraße = ["Max-Planck-Straße 39", "Am Europaplatz 11", "Daimlerstraße 35", "Ziegeleiweg 4", "Im Zukunftspark 10"];
var sort = ["74081 Heilbronn", "74076 Heilbronn", "74653 Künzelsau", "74523 Schwäbisch Hall", "74076 Heilbronn"];


var directionsService ;
var directionsDisplay ;

function initMap() {

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;

navigator.geolocation.getCurrentPosition(function (position) {

    current_lat = position.coords.latitude;
    current_lon = position.coords.longitude;


    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: current_lat, lng: current_lon},
        zoom: 18
    });

    marker = new google.maps.Marker({
        position: {lat: current_lat, lng: current_lon},
        map:map,
        title:'Position'
    })

});
    /* Check for route
    
    var queryString = window.location.search.replace(/^\?/, '');
    string = queryString.split('=');
    alert(string[1]);
    if(string[1]){
        calcroute((string[1]-1));
    }*/

}




function close_prev(){

    $(".preview_container").css("display","none");
}

function standgebaeude(standort) {

    if (!map) {

       map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat_Gebaeude[standort-1], lng: len_Gebaude[standort-1]},
            zoom: 18
        });
    }
    else{
        map.setCenter({lat:lat_Gebaeude[standort-1],lng:len_Gebaude[standort-1]});
    }
    marker = new google.maps.Marker({
        position: {lat: lat_Gebaeude[standort-1], lng: len_Gebaude[standort-1]},
        map:map,
        title:'Position'
    });

    $("dt.name").html(sname[standort-1]);
    $("dd.straße").html(sstraße[standort-1]);
    $("dd.ort").html(sort[standort-1]);
    $(".preview_container").css("display","block");



}

function calcroute(standort){

    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(lat_Gebaeude[standort],len_Gebaude[standort]);

}

function calculateAndDisplayRoute(lat,len) {
    directionsService.route({
        origin: {lat:current_lat,lng:current_lon},
        destination: {lat:lat,lng:len},
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
