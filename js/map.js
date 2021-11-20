import {createBalloon} from './mapballoon.js';
import {filterPosts} from './filter.js';

const MAP_DEFAULT_LAT = 35.660644;
const MAP_DEFAULT_LNG = 139.782431;
const MAIN_PIN_ICON = '../img/main-pin.svg';
const PIN_ICON = '../img/pin.svg';
const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .setView({
    lat: MAP_DEFAULT_LAT,
    lng: MAP_DEFAULT_LNG,
  }, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
  .addTo(map);

const markerLayer = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MAIN_PIN_ICON,
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: PIN_ICON,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: MAP_DEFAULT_LAT,
    lng: MAP_DEFAULT_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

let {lat, lng} = mainMarker.getLatLng();
address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  const currentAddr = evt.target.getLatLng();
  lat = currentAddr.lat;
  lng = currentAddr.lng;
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const putBalloons = (posts) => {
  markerLayer.clearLayers();
  const filteredPosts = filterPosts(posts).slice(0, 10);
  filteredPosts.forEach((element) => {
    const {location} = element;
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(markerLayer)
      .bindPopup(createBalloon(element));
  });
};

const resetMainMarker = () => {
  mainMarker.setLatLng({
    lat: MAP_DEFAULT_LAT,
    lng: MAP_DEFAULT_LNG,
  });
  address.value = `${MAP_DEFAULT_LAT.toFixed(5)}, ${MAP_DEFAULT_LNG.toFixed(5)}`;
};

export {map, markerLayer, putBalloons, resetMainMarker};
