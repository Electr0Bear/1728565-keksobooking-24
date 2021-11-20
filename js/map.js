import {createBalloon} from './mapballoon.js';
import {filterPosts} from './filter.js';

const MAP_DEFAULT_LAT = 35.660644;
const MAP_DEFAULT_LNG = 139.782431;
const MAIN_PIN_ICON = '../img/main-pin.svg';
const MAIN_PIN_SIZE = 52;
const PIN_ICON = '../img/pin.svg';
const PIN_SIZE = 40;
const MAX_POSTS = 10;
const LOCATION_FLOATING_POINT = 5;
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
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE / 2, MAIN_PIN_SIZE],
});

const pinIcon = L.icon({
  iconUrl: PIN_ICON,
  iconSize: [PIN_SIZE, PIN_SIZE],
  iconAnchor: [PIN_SIZE / 2, PIN_SIZE],
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
address.value = `${lat.toFixed(LOCATION_FLOATING_POINT)}, ${lng.toFixed(LOCATION_FLOATING_POINT)}`;

mainMarker.on('moveend', (evt) => {
  const currentAddr = evt.target.getLatLng();
  lat = currentAddr.lat;
  lng = currentAddr.lng;
  address.value = `${lat.toFixed(LOCATION_FLOATING_POINT)}, ${lng.toFixed(LOCATION_FLOATING_POINT)}`;
});

const putBalloons = (posts) => {
  markerLayer.clearLayers();
  const filteredPosts = filterPosts(posts).slice(0, MAX_POSTS);
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
  address.value = `${MAP_DEFAULT_LAT.toFixed(LOCATION_FLOATING_POINT)}, ${MAP_DEFAULT_LNG.toFixed(LOCATION_FLOATING_POINT)}`;
};

export {map, markerLayer, putBalloons, resetMainMarker};
