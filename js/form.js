const title = document.querySelector('#title');
const address = document.querySelector('#address');
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

title.addEventListener('invalid', () => {
  title.setCustomValidity('');
  if (title.validity.tooShort) {
    title.setCustomValidity('Заголовок должен состоять минимум из 20 символов');
  } else if (title.validity.valueMissing) {
    title.setCustomValidity('Обязательное поле');
  }
});

address.addEventListener('invalid', () => {
  address.validity.valueMissing ?
    address.setCustomValidity('Обязательное поле')
    : address.setCustomValidity('');
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

price.addEventListener('invalid', () => {
  price.validity.valueMissing ?
    price.setCustomValidity('Обязательное поле')
    : false;
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
  targetInput.value !== currentInput.value ?
    targetInput.value = currentInput.value
    : false;
};

timeIn.addEventListener('change', (evt) => {
  timeTableHandler(evt.target, timeOut);
});

timeOut.addEventListener('change', (evt) => {
  timeTableHandler(evt.target, timeIn);
});
