
class WMS_Service {

  constructor(name, base_url, layers, stations) {
    this.isStationsWms = stations || false;
    this.name = name;
    this.base_url = base_url;
    this.layers = layers;

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