import React from "react";
import L from "leaflet";

function Map() {
  const position = [-1.293735, 36.895821];
  var container = L.DomUtil.get("map");
  if (container != null) {
    container._leaflet_id = null;
  }

  // initialize the mao
  const Mymap = L.map("map").setView(position, 18);

  L.tileLayer(
    `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/1/1/0?access_token=pk.eyJ1Ijoic3RlcGgtYSIsImEiOiJja2VuMzAyMHAwcTBnMnZvOG1iazR0cmE1In0.HU4bpm_MN1UIYzghlBHdMQ`,
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoic3RlcGgtYSIsImEiOiJja2VuMzAyMHAwcTBnMnZvOG1iazR0cmE1In0.HU4bpm_MN1UIYzghlBHdMQ",
    }
  ).addTo(Mymap);

  return <> </>;
}

export default Map;
