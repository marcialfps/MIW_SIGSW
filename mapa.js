// Map
const misOpciones = {
  center: { lat: 43.35481, lng: -5.851805 },
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
  streetViewControl: false,
};
let map = new google.maps.Map(document.getElementById("map_frame"), misOpciones);

var puntoControl = new google.maps.LatLng(43.354810, -5.851805);
const TILE_SIZE = 256;

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
function featureInfoWMS(pixelX, pixelY, tileX, tileY) {
  //Capas de la petición
  let stations_WMS_url = current_stations_wms.base_url;
  let layers_getFeatureInfo = current_stations_wms.layers;

  let styles = 'default';
  let srs = '4326';
  let width = defaultTileSize.toString();
  let height = defaultTileSize.toString();
  let format = 'application/json';
  let x = pixelX; //'162';
  let y = pixelY; //'80';

  //Construcción de la URL
  let myURL = stations_WMS_url + "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo";
  myURL += "&QUERY_LAYERS=" + layers_getFeatureInfo;
  myURL += "&BBOX=" + getBoundingBox({ x: tileX, y: tileY }, map.getZoom());
  myURL += "&STYLES=" + styles;
  myURL += "&SRS=EPSG:" + srs;
  myURL += "&WIDTH=" + width;
  myURL += "&HEIGHT=" + height;
  myURL += "&FORMAT=" + format;
  myURL += "&X=" + x;
  myURL += "&Y=" + y;


  return myURL;
}

/**
 * Muestra la información para una X y una Y dadas
 */
function showFeatureInfo(pixelX, pixelY, tileX, tileY) {
  const url = featureInfoWMS(pixelX, pixelY, tileX, tileY);
  const http = new XMLHttpRequest()

  http.open("GET", url)
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      parserDataFeatureInfo(this.responseText)
    }
  }
  http.send()
}

/**
 * Parsea la información obtenida de la petición GetFeatureInfo
 * @param {*} data
 */
function parserDataFeatureInfo(data) {
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(data, "text/xml");

  document.getElementById("titleData").innerHTML = "Información de la estación";

  console.log("FEATURE INFO RESPONSE: ", xmlDoc)
  if (xmlDoc.getElementsByTagName("ServiceException")[0] != undefined) {
    document.getElementById("data").innerHTML = "<p>No se han encontrado datos</p>"
  }
  else if (xmlDoc.getElementsByTagName("FIELDS")[0] != undefined && xmlDoc.getElementsByTagName("FIELDS")[0].attributes != undefined) {
    document.getElementById("data").innerHTML =
      "<ul>" +
      "<li><strong>" + "Código Nacional: " + "</strong>" + xmlDoc.getElementsByTagName("FIELDS")[0].attributes[2].nodeValue + "</li>" +
      "<li><strong>" + "Año: " + "</strong>" + xmlDoc.getElementsByTagName("FIELDS")[0].attributes[3].nodeValue + "</li>" +
      "<li><strong>" + "Código Europeo: " + "</strong>" + xmlDoc.getElementsByTagName("FIELDS")[0].attributes[4].nodeValue + "</li>" +
      "<li><strong>" + "Nombre de la estación: " + "</strong>" + xmlDoc.getElementsByTagName("FIELDS")[0].attributes[5].nodeValue + "</li>" +
      "<li><strong>" + "Valor legislado: " + "</strong>" + xmlDoc.getElementsByTagName("FIELDS")[0].attributes[6].nodeValue + "</li>" +
      "<li><strong>" + "Datos: " + "</strong>" + xmlDoc.getElementsByTagName("FIELDS")[0].attributes[10].nodeValue + "</li>" +
      "</ul>"
  }
  else {
    document.getElementById("data").innerHTML = "<p>No se han encontrado datos</p>"
  }
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

    puntoControl = event.latLng;
    calculatePixelPoint(puntoControl, map.getZoom());

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

function calculatePixelPoint(latLng, zoom) {
  var scale = 1 << zoom;

  var worldCoordinate = calculateLocaltion(latLng);

  var pixelCoordinate = new google.maps.Point(
    Math.floor(worldCoordinate.x * scale),
    Math.floor(worldCoordinate.y * scale));

  var tileCoordinate = new google.maps.Point(
    Math.floor(worldCoordinate.x * scale / TILE_SIZE),
    Math.floor(worldCoordinate.y * scale / TILE_SIZE));

  pixelCoordinate.x -= tileCoordinate.x * TILE_SIZE;
  pixelCoordinate.y -= tileCoordinate.y * TILE_SIZE;

  showFeatureInfo(pixelCoordinate.x, pixelCoordinate.y, tileCoordinate.x, tileCoordinate.y);

}

function calculateLocaltion(latLng) {
  var siny = Math.sin(latLng.lat() * Math.PI / 180);
  siny = Math.min(Math.max(siny, -0.9999), 0.9999);

  return new google.maps.Point(
    TILE_SIZE * (0.5 + latLng.lng() / 360),
    TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
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

  // Show distance data and fill with content
  document.getElementById("distanceData").classList.remove("invisible");
  document.getElementById(
    "distanceInfo"
  ).innerHTML = `Distancia entre estaciones: ${haversine_distance(
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
  if (document.getElementById("distances").checked) {
    document.getElementById("distanceData").classList.remove("invisible");
    document.getElementById("distanceInfo").innerText = "Pulsa sobre dos estaciones para conocer la distancia que las separa";
  }
  else {
    if (poly) poly.setMap(null);
    // Esconder los datos de distancias
    document.getElementById("distanceData").classList.add("invisible");
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