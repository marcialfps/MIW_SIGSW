//Representa el mapa geográfico
const historico = [
  {
    Fecha: "2015-01-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-01-01 01:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2015-02-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-02-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2015-03-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-03-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2015-04-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-04-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2015-05-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-05-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2015-06-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-06-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2015-07-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-07-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2015-08-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-08-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2015-09-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-09-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2015-10-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-10-01 02:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2015-11-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-11-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2015-12-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2015-12-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2016-01-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-01-01 01:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2016-02-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-02-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2016-03-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-03-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2016-04-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-04-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2016-05-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-05-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2016-06-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-06-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2016-07-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-07-01 02:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2016-08-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-08-01 02:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2016-09-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-09-01 02:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2016-10-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-10-01 02:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2016-11-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-11-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2016-12-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2016-12-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2017-01-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-01-01 01:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2017-02-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-02-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2017-03-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-03-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2017-04-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-04-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2017-05-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-05-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2017-06-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-06-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2017-07-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-07-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2017-08-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-08-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2017-09-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-09-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2017-10-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-10-01 02:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2017-11-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-11-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2017-12-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2017-12-01 01:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2018-01-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-01-01 01:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2018-02-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-02-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2018-03-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-03-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2018-04-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-04-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2018-05-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-05-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2018-06-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-06-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2018-07-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-07-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2018-08-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-08-01 02:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2018-09-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-09-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2018-10-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-10-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2018-11-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-11-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2018-12-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2018-12-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2019-01-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-01-01 01:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2019-02-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-02-01 01:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2019-03-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-03-01 01:00h",
    "P.DEPORTES-CO": 0.3,
    Flag: "T",
  },
  {
    Fecha: "2019-04-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-04-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2019-05-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-05-01 02:00h",
    "P.DEPORTES-CO": 0.6,
    Flag: "T",
  },
  {
    Fecha: "2019-06-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-06-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2019-07-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-07-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2019-08-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-08-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2019-09-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-09-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2019-10-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-10-01 02:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2019-11-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-11-01 01:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2019-12-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2019-12-01 01:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2020-01-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-01-01 01:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2020-02-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-02-01 01:00h",
    "P.DEPORTES-CO": 0.5,
    Flag: "T",
  },
  {
    Fecha: "2020-03-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-03-01 01:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2020-04-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-04-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2020-05-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-05-01 02:00h",
    "P.DEPORTES-CO": 0.4,
    Flag: "T",
  },
  {
    Fecha: "2020-06-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-06-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2020-07-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-07-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2020-08-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-08-01 02:00h",
    "P.DEPORTES-CO": 0.2,
    Flag: "T",
  },
  {
    Fecha: "2020-09-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-09-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-10-01 02:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-11-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2020-12-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
  {
    Fecha: "2021-01-01 01:00h",
    "P.DEPORTES-CO": null,
    Flag: "N",
  },
];

// Map
let map;
const misOpciones = {
  center: { lat: 43.35481, lng: -5.851805 },
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
  streetViewControl: false
};

// StreetView Map
let streetViewMapDiv;
let streetViewMap;
const streetViewMapOptions = {
    pov: {
      heading: 34,
      pitch: 10
    },
    visible: false
  };

// Capa de KML
let kmlLayer;
const kmlUrl = 'https://www.dropbox.com/s/c76evcnvm65bizb/EstacionesCA_2016.kml?dl=1';

// Capa WMS
const defaultTileSize = 256;

// - Estaciones
const stations_WMS_url = 'https://wms.mapama.gob.es/sig/EvaluacionAmbiental/CalidadAire/Estaciones_VLA_CO/wms.aspx?';
const stations_WMS_Layers = 'Estaciones VLA CO';
const stations_WMS = (coord, zoom) => {
  const proj = map.getProjection();
  const zfactor = Math.pow(2, zoom);
  const top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256 / zfactor, coord.y * 256 / zfactor));
  const bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256 / zfactor, (coord.y + 1) * 256 / zfactor));
  const bbox = top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();

  let myURL = stations_WMS_url + "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";
  myURL += `&LAYERS=${stations_WMS_Layers}&BBOX=${bbox}`;
  // console.log("Estaciones: ", myURL)
  return myURL;
}

// - Emisiones
const emissions_WMS_url = 'https://wms.mapama.gob.es/sig/EvaluacionAmbiental/Emisiones/MonoxidoCarbono_CO/wms.aspx?';
const emissions_WMS_Layers = 'Monóxido de carbono (CO)';
const emissions_WMS = (coord, zoom) => {
  const proj = map.getProjection();
  const zfactor = Math.pow(2, zoom);
  const top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256 / zfactor, coord.y * 256 / zfactor));
  const bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256 / zfactor, (coord.y + 1) * 256 / zfactor));
  const bbox = top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();

  let myURL = emissions_WMS_url + "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";
  myURL += `&LAYERS=${emissions_WMS_Layers}&BBOX=${bbox}`;
  // console.log("Emisiones: ", myURL)
  return myURL;
}


// Inicialización del mapa
function initMap() {
  streetViewMapDiv = document.getElementById('streetview_frame');
  streetViewMap = new google.maps.StreetViewPanorama(streetViewMapDiv, streetViewMapOptions);

  map = new google.maps.Map(document.getElementById("map_frame"), misOpciones);
  kmlLayer = new google.maps.KmlLayer(kmlUrl, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  kmlLayer.addListener('click', function(event) {
      //TODO test
      var fenway = {lat: 42.345573, lng: -71.098326};
      showStreetView(fenway);
    /* var content = event.featureDatainfoWindowHtml;
    var testimonial = document.getElementById('streetview_frame');
    testimonial.innerHTML = content; */
  });

  showHeatmap("test");
  showWmsLayer();
}

function showHeatmap(station) {
  const data = historico;
  const heatMapData = [
    {
      location: new google.maps.LatLng(43.35481, -5.851805),
      weight: data[1]["P.DEPORTES-CO"],
    },
  ];

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData,
  });
  heatmap.set("radius", 20);
  heatmap.set("opacity", 1);
  heatmap.setMap(map);
}

const showWmsLayer = (size) => {
  const tileSize = size || defaultTileSize;

  // Stations
  let overlayOptions =
  {
    getTileUrl: stations_WMS,
    tileSize: new google.maps.Size(tileSize, tileSize)
  };
  let overlayWMS = new google.maps.ImageMapType(overlayOptions);
  map.overlayMapTypes.push(overlayWMS);

  // Emissions
  overlayOptions =
  {
    getTileUrl: emissions_WMS,
    tileSize: new google.maps.Size(tileSize, tileSize)
  };
  overlayWMS = new google.maps.ImageMapType(overlayOptions);
  map.overlayMapTypes.push(overlayWMS);

}

// Street view
function showStreetView(coordinates) {
    streetViewMap.setOptions({position: coordinates, visible: true})
}

function hideStreetView() {
  streetViewMap.setOptions({visible: false});
  streetViewMapDiv.style.display = 'none';
}
