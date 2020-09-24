// Map
let map;
const misOpciones = {
  center: { lat: 43.35481, lng: -5.851805 },
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
  streetViewControl: false,
};

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

// Capa WMS
const defaultTileSize = 256;

// - Estaciones
const stations_WMS_url =
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/CalidadAire/Estaciones_VLA_CO/wms.aspx?";
const stations_WMS_Layers = "Estaciones VLA CO";
const stations_WMS = (coord, zoom) => {
  const proj = map.getProjection();
  const zfactor = Math.pow(2, zoom);
  const top = proj.fromPointToLatLng(
    new google.maps.Point((coord.x * 256) / zfactor, (coord.y * 256) / zfactor)
  );
  const bot = proj.fromPointToLatLng(
    new google.maps.Point(
      ((coord.x + 1) * 256) / zfactor,
      ((coord.y + 1) * 256) / zfactor
    )
  );
  const bbox = top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();

  let myURL =
    stations_WMS_url +
    "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";
  myURL += `&LAYERS=${stations_WMS_Layers}&BBOX=${bbox}`;
  // console.log("Estaciones: ", myURL)
  return myURL;
};

// - Emisiones
const emissions_WMS_url =
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/Emisiones/MonoxidoCarbono_CO/wms.aspx?";
const emissions_WMS_Layers = "Monóxido de carbono (CO)";
const emissions_WMS = (coord, zoom) => {
  const proj = map.getProjection();
  const zfactor = Math.pow(2, zoom);
  const top = proj.fromPointToLatLng(
    new google.maps.Point((coord.x * 256) / zfactor, (coord.y * 256) / zfactor)
  );
  const bot = proj.fromPointToLatLng(
    new google.maps.Point(
      ((coord.x + 1) * 256) / zfactor,
      ((coord.y + 1) * 256) / zfactor
    )
  );
  const bbox = top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();

  let myURL =
    emissions_WMS_url +
    "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";
  myURL += `&LAYERS=${emissions_WMS_Layers}&BBOX=${bbox}`;
  // console.log("Emisiones: ", myURL)
  return myURL;
};

// Inicialización del mapa
function initMap() {
  //Street view
  streetViewMapDiv = document.getElementById("streetview_frame");
  streetViewMap = new google.maps.StreetViewPanorama(streetViewMapDiv, streetViewMapOptions);
  //InfoWindow
  infoWindow = new google.maps.InfoWindow();
  //Elevation service
  elevationService = new google.maps.ElevationService();
  //Map
  map = new google.maps.Map(document.getElementById("map_frame"), misOpciones);
  kmlLayer = new google.maps.KmlLayer(kmlUrl, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map,
  });
  kmlLayer.addListener("click", function (event) {
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    //Mostrar infow window y stretView
    showInfoWindow(event);
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

  showWmsLayer();
}

const showWmsLayer = (size) => {
  const tileSize = size || defaultTileSize;

  // Stations
  let overlayOptions = {
    getTileUrl: stations_WMS,
    tileSize: new google.maps.Size(tileSize, tileSize),
  };
  let overlayWMS = new google.maps.ImageMapType(overlayOptions);
  map.overlayMapTypes.push(overlayWMS);

  // Emissions
  overlayOptions = {
    getTileUrl: emissions_WMS,
    tileSize: new google.maps.Size(tileSize, tileSize),
  };
  overlayWMS = new google.maps.ImageMapType(overlayOptions);
  map.overlayMapTypes.push(overlayWMS);
};

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
function getElevation(position) {
  elevationService.getElevationForLocations({
    'locations': [position]
  }, function(results, status) {
    if (status === 'OK') {
      // Retrieve the first result
      if (results[0]) {
        return (results[0].elevation).toFixed(2) + ' metros';
        
      } else {
        return 'No disponible';
      }
    } else {
      return 'No disponible';
    }
  });
}

/* Función para mostrar un infoWindow sobre el marcador que el usuario selecciona */
function showInfoWindow(event) {
  //Get elevation info
  let elevation = getElevation(event.latLng);
  if (elevation == undefined) elevation = 'No disponible';
  //Show info
  infoWindow.setContent('<b>' + event.featureData.name + '</b><br/>Elevación: ' + elevation);
  infoWindow.setPosition(event.latLng);
  infoWindow.open(map);
}