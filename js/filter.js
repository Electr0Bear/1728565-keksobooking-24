import {markerLayer} from './map.js';

const filterType = document.querySelector('#housing-type');
const filterPrice = document.querySelector('#housing-price');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterFeatureSection = document.querySelector('.map__features');

const filterValues = {
  type: '',
  price: '',
  rooms: '',
  guests: '',
  features: [],
};

const onClickFilter = (cb) => {
  filterType.addEventListener('change', (evt) => {
    filterValues.type = evt.target.value;
    markerLayer.closePopup();
    cb();
  });

  filterPrice.addEventListener('change', (evt) => {
    filterValues.price = evt.target.value;
    markerLayer.closePopup();
    cb();
  });

  filterRooms.addEventListener('change', (evt) => {
    filterValues.rooms = evt.target.value;
    markerLayer.closePopup();
    cb();
  });

  filterGuests.addEventListener('change', (evt) => {
    filterValues.guests = evt.target.value;
    markerLayer.closePopup();
    cb();
  });

  filterFeatureSection.addEventListener('change', () => {
    const filterFeatureCheckboxesChecked = filterFeatureSection.querySelectorAll('.map__checkbox:checked');
    filterValues.features = Array.from(filterFeatureCheckboxesChecked).map((checkbox) => checkbox.value);
    markerLayer.closePopup();
    cb();
  });
};

export {onClickFilter};
