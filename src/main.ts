import mapboxgl from "mapbox-gl";
import { IStation } from "./interfaces";
import { stations } from "./stations";

import "./style.css";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN || "";

const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v11",
	center: [
		(-3.1837694644928 + -2.85494613647461) / 2,
		(53.6465263366699 + 53.1968383789063) / 2,
	],
	zoom: 9.5,
});

stations.forEach((station: IStation) => {
	new mapboxgl.Marker({ color: "#ffdc00" })
		.setLngLat([station.position.lon, station.position.lat])
		.setPopup(new mapboxgl.Popup().setHTML(`<h1>${station.name}</h1>`))
		.addTo(map);
});

map.on("click", (e) => {
	console.log(`A click event has occurred at ${e.lngLat}`);
});
