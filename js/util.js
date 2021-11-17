import {resetMainMarker} from './map.js';

const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');

const closePopup = (element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    element.remove();
  });
  document.querySelector('body').addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      element.remove();
      document.querySelector('body').removeEventListener('keydown', evt);
    }
  });
};

const resetForm = () => {
  form.reset();
  filters.reset();
  const leafletBalloon = document.querySelector('.leaflet-popup');
  if (leafletBalloon) {
    leafletBalloon.remove();
  }
  resetMainMarker();
};

export {closePopup, resetForm};
