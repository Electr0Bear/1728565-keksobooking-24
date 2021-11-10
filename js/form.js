const form = document.querySelector('.ad-form');
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
const roomNumber = document.querySelector('#room_number');
const guestNumber = document.querySelector('#capacity');

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

const checkRoomCapacity = () => {
  const rooms = roomNumber.value;
  const guests = guestNumber.value;
  if (rooms === 100 && guests !== 0) {
    guestNumber.setCustomValidity('Недопустимое количество гостей для выбранного количества комнат. Данное помещение не подходит для размещения гостей');
  } else if (rooms < guests) {
    guestNumber.setCustomValidity(`Недопустимое количество гостей для выбранного количества комнат. Допускается гостей: не более ${roomNumber.value}`);
  } else if (rooms !== 100 && guests === 0) {
    guestNumber.setCustomValidity('Недопустимое количество гостей для выбранного количества комнат. Должно быть хотя бы 1 место для размещения');
  } else {
    guestNumber.setCustomValidity('');
  }

  return guestNumber.checkValidity();
};

form.addEventListener('submit', (evt) => {
  checkRoomCapacity();
  if (!checkRoomCapacity()) {
    evt.preventDefault();
  }
});


