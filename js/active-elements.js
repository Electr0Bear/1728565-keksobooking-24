const adForm = document.querySelector('.ad-form');
const adFieldsets = document.querySelectorAll('.ad-form-header, .ad-form__element');
const mapForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter, .map__features');

const setStatus = (status) => {
  adForm.classList.toggle('ad-form--disabled');
  mapForm.classList.toggle('map__filters--disabled');

  adFieldsets.forEach((filter) => {
    filter.disabled = !status;
  });
  mapFilters.forEach((filter) => {
    filter.disabled = !status;
  });
};

export {setStatus};
