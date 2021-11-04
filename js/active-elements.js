const adForm = document.querySelector('.ad-form');
const adFieldsets = document.querySelectorAll('.ad-form-header, .ad-form__element');
const mapForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter, .map__features');

const setActive = (status) => {
  if (status) {
    adForm.classList.remove('ad-form--disabled');
    mapForm.classList.remove('map__filters--disabled');
  } else {
    adForm.classList.add('ad-form--disabled');
    mapForm.classList.add('map__filters--disabled');
  }

  adFieldsets.forEach((filter) => {
    filter.disabled = !status;
  });
  mapFilters.forEach((filter) => {
    filter.disabled = !status;
  });
};

export {setActive};
