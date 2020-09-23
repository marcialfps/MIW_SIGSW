//Representa el mapa geográfico
let map;
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

//Capa de KML
var ctaLayer;

/**
 * Inicialización del mapa
 */
function initMap() {
  var misOpciones = {
    center: { lat: 43.35481, lng: -5.851805 },
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  };
  map = new google.maps.Map(document.getElementById("map_frame"), misOpciones);

  ctaLayer = new google.maps.KmlLayer({
    url: "https://www.dropbox.com/s/c76evcnvm65bizb/EstacionesCA_2016.kml?dl=1",
    map: map,
  });

  console.log(ctaLayer);
  showHeatmap("test");
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
