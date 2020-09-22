//Representa el mapa geográfico
var map;

//Capa de KML
var ctaLayer;

/**
 * Inicialización del mapa
 */
function initMap() {
    var misOpciones = {
        center: {lat: 43.354810, lng: -5.851805},
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
    };
    map = new google.maps.Map(document.getElementById("map_frame"), misOpciones);

    ctaLayer = new google.maps.KmlLayer({
        url: 'https://www.dropbox.com/s/c76evcnvm65bizb/EstacionesCA_2016.kml?dl=1',
        map: map
    });

    console.log(ctaLayer)

}
