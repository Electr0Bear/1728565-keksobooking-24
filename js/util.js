import {putUserBaloon} from './map.js';

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

const onError = (err) => {
  const errorPopup = `<div class="error">
    <p style="color: #FFF">Не удалось загрузить данные с сервера.<br>Код ошибки: ${err}</p>
    <button type="button" class="error__button-onload" style="color: white; border: 4px solid #ff5635; background-color: #ff5635; border-radius: 8px;">OK</button>
    </div>`;
  document.querySelector('body').insertAdjacentHTML('beforeend', errorPopup);
  document.querySelector('.error__button-onload').addEventListener('click', () =>
    document.querySelector('.error').remove(),
  );
  closePopup(errorPopup);
};

const onGoodSubmit = (post) => {
  putUserBaloon(post);
  document.querySelector('.ad-form__reset').click();
  const successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
  const successPopup = successPopupTemplate.cloneNode(true);
  document.querySelector('body').appendChild(successPopup);
  closePopup(successPopup);
};

const onFailedSubmit = () => {
  document.querySelector('.ad-form__reset').click();
  const failurePopupTemplate = document.querySelector('#error').content.querySelector('.error');
  const failurePopup = failurePopupTemplate.cloneNode(true);
  document.querySelector('body').appendChild(failurePopup);
  closePopup(failurePopup);
};

export {onError, onGoodSubmit, onFailedSubmit};
