/**
 * Created by Robin Holzwarth on 16.06.2016.
 */
var map, marker, lat, lon;

var lat_Gebaeude = [49.122537, 49.148578, 49.275522, 49.112540, 49.154460]
var len_Gebaude = [9.210931, 9.216501, 9.712354, 9.743762, 9.208087]

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
        title:'Position'
    })

})
}

function createroute(target_lat, target_lng){


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
        map.setCenter({lat:lat_Gebaeude[ort-1],lng:len_Gebaude[ort-1]});
    }
    $("dt.name").html(name[standort-1]);
    $("dt.straße").html(straße[standort-1]);
    $("dt.ort").html(ort[standort-1]);
    $(".preview_container").css("display","block");



}