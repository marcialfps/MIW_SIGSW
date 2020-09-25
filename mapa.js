// Map
const misOpciones = {
  center: { lat: 43.35481, lng: -5.851805 },
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
  streetViewControl: false,
};
let map = new google.maps.Map(document.getElementById("map_frame"), misOpciones);


// StreetView Map
let streetViewMapDiv;
let streetViewMap;
const streetViewMapOptions = {
  pov: {
    heading: 34,
    pitch: 10,
  },
  visible: false,
};

// Marcadores para distancias
let poly;
let firstMark, secondMark;

//InfoWindow
let infoWindow;

//Elevation
let elevationService;

// Capa de KML
let kmlLayer;
const kmlUrl =
  "https://www.dropbox.com/s/c76evcnvm65bizb/EstacionesCA_2016.kml?dl=1";


//Se añade la petición getFeaturesInfo incialmente sobre unos puntos X, Y puestos directaente
var featureInfoWMS = function () {
  //Capas de la petición
  let layers_getFeatureInfo = 'Estaciones%20VLA%20CO'
  let bbox = '-21.502441,32.199832,11.983887,45.449379'
  let styles = 'default';
  let srs = '4326';
  let width = '256';
  let height = '256';
  let format = 'text/html';
  let x = '162';
  let y = '80';

  //Construcción de la URL
  let myURL = stations_WMS_url + "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo";
  myURL += "&QUERY_LAYERS=" + layers_getFeatureInfo;
  myURL += "&BBOX=" + bbox;
  myURL += "&STYLES=" + styles;
  myURL += "&SRS=EPSG:" + srs;
  myURL += "&WIDTH=" + width;
  myURL += "&HEIGHT=" + height;
  myURL += "&FORMAT=" + format;
  myURL += "&X=" + x;
  myURL += "&Y=" + y;

  return myURL;
}

function initPage() {
  initUI(); // Ver wms_manager.js
  initMap();

}

// Inicialización de los datos del mapa
function initMap() {
  //Street view
  streetViewMapDiv = document.getElementById("streetview_frame");
  streetViewMap = new google.maps.StreetViewPanorama(streetViewMapDiv, streetViewMapOptions);
  //InfoWindow
  infoWindow = new google.maps.InfoWindow();
  //Elevation service
  elevationService = new google.maps.ElevationService();
  //Map
  kmlLayer = new google.maps.KmlLayer(kmlUrl, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map,
  });
  kmlLayer.addListener("click", function (event) {
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    //Mostrar infow window y stretView
    getElevation(event);
    showStreetView(position);

    //Calculo de distancias
    if (document.getElementById("distances").checked) {
      hideStreetView();
      if ((firstMark && secondMark) || !firstMark) {
        firstMark = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        secondMark = null;
        if (poly) poly.setMap(null);
      } else {
        secondMark = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        setLine();
      }
    }
  });

  if (wms_services_emissions.length && wms_services_stations.length) showWmsLayer(0);
}


/**
 * Muestra la información para una X y una Y dadas
 */
function showFeatureInfo() {
  let overlayOptions = {
    getTileUrl: featureInfoWMS,
    tileSize: new google.maps.Size(defaultTileSize, defaultTileSize),
  };
  let overlayWMS = new google.maps.ImageMapType(overlayOptions);
  map.overlayMapTypes.push(overlayWMS);
}

/* Función para mostrar el streetView del punto que se pasa por parámetro */
function showStreetView(coordinates) {
  streetViewMapDiv.style.display = "flex";
  streetViewMap.setOptions({ position: coordinates, visible: true });
}

/* Función para ocultar el streetView */
function hideStreetView() {
  streetViewMap.setOptions({ visible: false });
  streetViewMapDiv.style.display = "none";
}

// Distances
function setLine() {
  poly = new google.maps.Polyline({
    strokeColor: "#000000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    path: [firstMark, secondMark],
  });
  poly.setMap(map);
  document.getElementById(
    "distance"
  ).innerHTML = `Distancia entre estaciones de ${haversine_distance(
    firstMark,
    secondMark
  ).toFixed(2)} km.`;
}

//Funcion auxiliar para obtener la distancia entre los dos puntos
function haversine_distance(mk1, mk2) {
  var R = 6371.071;
  var rlat1 = mk1.lat * (Math.PI / 180);
  var rlat2 = mk2.lat * (Math.PI / 180);
  var difflat = rlat2 - rlat1;
  var difflon = (mk2.lng - mk1.lng) * (Math.PI / 180);

  var d =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
        Math.cos(rlat1) *
        Math.cos(rlat2) *
        Math.sin(difflon / 2) *
        Math.sin(difflon / 2)
      )
    );
  return d;
}

// Elimina las lineas al desactivar el checkbox de distancias
function distanceClick() {
  if (!document.getElementById("distances").checked && poly) {
    poly.setMap(null);
  }
}

/* Función para calcular la elevación que tiene el punto que se pasa por parámetro */

function getElevation(event) {

  var locations = [];
  locations.push(event.latLng);

  // Create a LocationElevationRequest object using the array's one value
  var positionalRequest = {
    'locations': locations
  }

  // Initiate the location request
  elevationService.getElevationForLocations(positionalRequest, function (results, status) {
    if (status == google.maps.ElevationStatus.OK) {
      // Retrieve the first result
      if (results[0]) {
        var elevation = (results[0].elevation).toFixed(2);
        showInfoWindow(event, elevation.toString().replace(".", ",") + " metros.");
      } else {
        showInfoWindow(event, "No disponible");
      }
    } else {
      showInfoWindow(event, "No disponible");
    }
  });
}

/* Función para mostrar un infoWindow sobre el marcador que el usuario selecciona */
function showInfoWindow(event, elevation) {
  infoWindow.setContent('<b>' + event.featureData.name + '</b><br/><b>Elevación:</b> ' + elevation);
  infoWindow.setPosition(event.latLng);
  infoWindow.open(map);
}