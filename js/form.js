const title = document.querySelector('#title');
const propertyType = document.querySelector('#type');
const price = document.querySelector('#price');
const propertyPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

title.addEventListener('invalid', () => {
  if (title.validity.tooShort) {
    title.setCustomValidity('Заголовок должен состоять минимум из 20 символов');
  } else if (title.validity.tooLong) {
    title.setCustomValidity('Заголовок не должен превышать 100 символов');
  } else if (title.validity.valueMissing) {
    title.setCustomValidity('Обязательное поле');
  } else {
    title.setCustomValidity('');
  }
});

price.addEventListener('input', () => {
  if (price.validity.rangeUnderflow) {
    price.setCustomValidity(`Для выбранного типа жилья стоимость не может быть меньше ${price.min}`);
  } else if (price.validity.rangeOverflow) {
    price.setCustomValidity('Стоимость не должна превышать 1 000 000');
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});

price.addEventListener('invalid', () => {
  if (price.validity.valueMissing) {
    price.setCustomValidity('Обязательное поле');
  } else if (!price.validity) {
    price.setCustomValidity('');
  }
});

propertyType.addEventListener('change', () => {
  const currentType = propertyType.value;
  price.min = propertyPrices[currentType];
  price.placeholder = propertyPrices[currentType];
});
