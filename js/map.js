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

// const pinIcon = L.icon({
//   iconUrl: '../img/pin.svg',
//   iconSize: [52, 52],
//   iconAnchor: [26, 52],
// });

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

mainMarker.addTo(map);
mainMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

export {map};
