/*
  En este fichero se administra el acceso a los distintos WMS que aportan la información
  sobre los gases o emisiones que mostramos: CO, NO2, C6H6, SO2 y Ni
*/
class WMS_Service {
  st
  constructor(name, base_url, layers, isStationsWms) {
    this.name = name;
    this.base_url = base_url;
    this.layers = layers;
    this.isStationsWms = isStationsWms || false;

    this.getTileUrl = (coord, zoom) => {
      let myURL =
        base_url +
        "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";

      myURL += `&LAYERS=${this.layers}&BBOX=${getBoundingBox(coord, zoom)}`;
      return myURL;
    }
  }
}

// Extracted the processing of the map's bounding box
const getBoundingBox = (coord, zoom) => {
  if (!map) return;

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
  return bbox;
}

/* Definición de los servicios WMS */

const defaultTileSize = 256;

// ESTACIONES
// - CO (Monóxido de Carbono)
const stations_CO_WMS = new WMS_Service(
  "Estaciones CO",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/CalidadAire/Estaciones_VLA_CO/wms.aspx?",
  "Estaciones VLA CO",
  true
);

// - NO2 (Dióxido de Nitrógeno)
const stations_NO2_WMS = new WMS_Service(
  "Estaciones NO2",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/CalidadAire/Estaciones_VLA_NO2/wms.aspx?",
  "Estaciones VLA NO2",
  true
);

// - C6H6 (Benceno)
const stations_C6H6_WMS = new WMS_Service(
  "Estaciones C6H6 (Benceno)",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/CalidadAire/Estaciones_VLA_C6H6/wms.aspx?",
  "Estaciones VLA C6H6",
  true
);

// - SO2 (Dióxido de Azufre)
const stations_SO2_WMS = new WMS_Service(
  "Estaciones SO2",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/CalidadAire/Estaciones_VLH_SO2/wms.aspx?",
  "Estaciones VLH SO2",
  true
);

// - Ni (Níquel)
const stations_Ni_WMS = new WMS_Service(
  "Estaciones Ni (Níquel y compuestos)",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/CalidadAire/Estaciones_VO_Ni/wms.aspx?",
  "Estaciones VO Ni",
  true
);


// EMISIONES
// - CO (Monóxido de Carbono)
const emissions_CO_WMS = new WMS_Service(
  "Emisiones CO",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/Emisiones/MonoxidoCarbono_CO/wms.aspx?",
  "Monóxido de carbono (CO)"
);

// - NO2 (Dióxido de Nitrógeno)
const emissions_NO2_WMS = new WMS_Service(
  "Emisiones NO2",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/Emisiones/OxidosNitrogeno_NOx/wms.aspx?",
  "Óxidos de Nitrógeno (NOx)"
);

// - C6H6 (Benceno)
const emissions_C6H6_WMS = new WMS_Service(
  "Emisiones C6H6 (Benceno)",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/Emisiones/Benceno_C6H6/wms.aspx?",
  "Benceno C6H6"
);

// - SO2 (Dióxido de Azufre)
const emissions_SO2_WMS = new WMS_Service(
  "Emisiones SO2",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/Emisiones/OxidosAzufre_SOx/wms.aspx?",
  "Óxidos de azufre (SOx/SO2)"
);

// - Ni (Níquel)
const emissions_Ni_WMS = new WMS_Service(
  "Emisiones Ni (Níquel y compuestos)",
  "https://wms.mapama.gob.es/sig/EvaluacionAmbiental/Emisiones/Niquel_Ni/wms.aspx?",
  "Níquel y sus compuestos (Ni)"
);


/* Variables de control de los WMS */

let wms_selector = document.getElementById("gasses-selector");

const wms_services_stations = [
  stations_CO_WMS,
  stations_NO2_WMS,
  stations_C6H6_WMS,
  stations_SO2_WMS,
  stations_Ni_WMS
];

const wms_services_emissions = [
  emissions_CO_WMS,
  emissions_NO2_WMS,
  emissions_C6H6_WMS,
  emissions_SO2_WMS,
  emissions_Ni_WMS
];

let current_stations_wms = stations_CO_WMS;
let current_emissions_wms = emissions_CO_WMS;

// Rellena la combobox con los valores de los WMS creados y gestiona qué hacer al seleccionar valor
function initUI() {

  for (let wms_service of wms_services_emissions) {
    wms_selector.innerHTML += `<option value="${wms_service.name}">${wms_service.name}</option>`
  }

  wms_selector.addEventListener('change', (e) => {
    // Get the reference to the selected wms
    const index = wms_services_emissions.findIndex(service => service.name.localeCompare(e.target.value) === 0);

    current_stations_wms = wms_services_stations[index];
    current_emissions_wms = wms_services_emissions[index];
    showWmsLayer();
  });
}

// Organiza las capas WMS que muestra el mapa
const showWmsLayer = (size) => {

  if (!current_stations_wms || !current_emissions_wms) return;
  const tileSize = size || defaultTileSize;

  // Clear old overlays
  map.overlayMapTypes.clear();

  // Set new overlays (stations and emissions)
  let overlayOptions = {
    getTileUrl: current_stations_wms.getTileUrl,
    tileSize: new google.maps.Size(tileSize, tileSize),
  };
  let overlayWMS = new google.maps.ImageMapType(overlayOptions);
  map.overlayMapTypes.push(overlayWMS);

  overlayOptions = {
    getTileUrl: current_emissions_wms.getTileUrl,
    tileSize: new google.maps.Size(tileSize, tileSize),
  };
  overlayWMS = new google.maps.ImageMapType(overlayOptions);
  map.overlayMapTypes.push(overlayWMS);
};