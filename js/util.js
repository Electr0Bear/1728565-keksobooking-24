const form = document.querySelector('.ad-form');

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
};

export {closePopup, resetForm};
