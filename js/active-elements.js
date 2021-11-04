const adForm = document.querySelector('.ad-form');
const adFieldsets = document.querySelectorAll('.ad-form-header, .ad-form__element');
const mapForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter, .map__features');

const setInactive = () => {
  adForm.classList.add('ad-form--disabled');
  adFieldsets.forEach((fieldset) => {
    fieldset.setAttribute('disabled', '');
  });

  mapForm.classList.add('map__filters--disabled');
  mapFilters.forEach((filter) => {
    filter.setAttribute('disabled', '');
  });
};

const setActive = () => {
  adForm.classList.remove('ad-form--disabled');
  adFieldsets.forEach((fieldset) => {
    fieldset.removeAttribute('disabled');
  });

  mapForm.classList.remove('map__filters--disabled');
  mapFilters.forEach((filter) => {
    filter.removeAttribute('disabled');
  });
};

export {setInactive, setActive};
