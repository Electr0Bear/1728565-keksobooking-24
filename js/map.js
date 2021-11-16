import {createBalloon} from './mapballoon.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .setView({
    lat: 35.660644,
    lng: 139.782431,
  }, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
  .addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: 35.660644,
    lng: 139.782431,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const putBalloons = (posts) => {
  posts.forEach((element) => {
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
      .addTo(map)
      .bindPopup(createBalloon(element));
  });
};

mainMarker.addTo(map);
let {lat, lng} = mainMarker.getLatLng();
address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  const currentAddr = evt.target.getLatLng();
  lat = currentAddr.lat;
  lng = currentAddr.lng;
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

export {map, putBalloons};
