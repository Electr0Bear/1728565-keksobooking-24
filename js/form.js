const title = document.querySelector('#title');
const propertyType = document.querySelector('#type');
const price = document.querySelector('#price');

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

propertyType.addEventListener('change', (evt) => {
  evt.preventDefault();
  return propertyType.value;
});

const setPrice = () => {

}

setPrice();
