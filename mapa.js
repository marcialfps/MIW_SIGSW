//Representa el mapa geográfico
var map;

/**
 * Inicialización del mapa
 */
function initMap() {
    var misOpciones = {
        center: {lat: 43.354810, lng: -5.851805},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControl: false,
        streetViewControl: false
    };
    map = new google.maps.Map(document.getElementById("map_frame"), misOpciones);
}
