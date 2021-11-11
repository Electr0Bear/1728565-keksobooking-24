const title = document.querySelector('#title');
const address = document.querySelector('#address');
const propertyType = document.querySelector('#type');
const price = document.querySelector('#price');
const PROPERTY_PRICES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const roomNumber = document.querySelector('#room_number');
const guestNumber = document.querySelector('#capacity');
const timeTable = document.querySelector('.ad-form__element--time');

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
  if (price.validity.valueMissing) {
    price.setCustomValidity('Обязательное поле');
  }
});

propertyType.addEventListener('change', () => {
  const currentType = propertyType.value;
  price.min = PROPERTY_PRICES[currentType];
  price.placeholder = PROPERTY_PRICES[currentType];
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

timeTable.addEventListener('change', (evt) => {
  const timeSelectInputs = timeTable.querySelectorAll('select');
  timeSelectInputs.forEach((element) => {
    if (element.value !== evt.target.value) {
      element.value = evt.target.value;
    }
  });
});
