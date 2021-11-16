import {postData} from './api.js';

const title = document.querySelector('#title');
const propertyType = document.querySelector('#type');
const price = document.querySelector('#price');
const PropertyPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const roomNumber = document.querySelector('#room_number');
const guestNumber = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const form = document.querySelector('.ad-form');

title.addEventListener('input', () => {
  title.setCustomValidity(title.validity.tooShort ? 'Заголовок должен состоять минимум из 30 символов' : '');
});

price.addEventListener('input', () => {
  price.setCustomValidity('');
  if (price.validity.rangeUnderflow) {
    price.setCustomValidity(`Для выбранного типа жилья стоимость не может быть меньше ${price.min}`);
  } else if (price.validity.rangeOverflow) {
    price.setCustomValidity('Стоимость не должна превышать 1 000 000');
  }
  price.reportValidity();
});

propertyType.addEventListener('change', () => {
  const currentType = propertyType.value;
  price.min = PropertyPrices[currentType];
  price.placeholder = PropertyPrices[currentType];
});

const checkRoomCapacity = () => {
  const rooms = +roomNumber.value;
  const guests = +guestNumber.value;
  guestNumber.setCustomValidity('');
  if (rooms === 100 && guests !== 0) {
    guestNumber.setCustomValidity('Недопустимое количество гостей для выбранного количества комнат. Данное помещение не подходит для размещения гостей');
  } else if (rooms < guests) {
    guestNumber.setCustomValidity(`Недопустимое количество гостей для выбранного количества комнат. Допускается гостей: не более ${roomNumber.value}`);
  } else if (rooms !== 100 && guests === 0) {
    guestNumber.setCustomValidity('Недопустимое количество гостей для выбранного количества комнат. Должно быть хотя бы 1 место для размещения');
  }
};

checkRoomCapacity();

roomNumber.addEventListener('change', () => {
  checkRoomCapacity();
});

guestNumber.addEventListener('change', () => {
  checkRoomCapacity();
});

const timeTableHandler = (currentInput, targetInput) => {
  targetInput.value = currentInput.value;
};

timeIn.addEventListener('change', (evt) => {
  timeTableHandler(evt.target, timeOut);
});

timeOut.addEventListener('change', (evt) => {
  timeTableHandler(evt.target, timeIn);
});

const formOnSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    postData(new FormData(form));
  });
};

export {formOnSubmit};
