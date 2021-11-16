import {closePopup} from './util.js';
import {putUserBaloon} from './map.js';

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

const onGoodSubmit = () => {
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

const refactorData = (object) => {
  const post = {
    author: {
      avatar: '',
    },
    offer: {
      title: object.title,
      address: object.address,
      price: object.price,
      type: object.type,
      rooms: object.rooms,
      guests: object.capacity,
      checkin: object.timein,
      checkout: object.timeout,
      features: object.feature,
      description: object.description,
      photos: object.files,
    },
  };
  return post;
};

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((posts) => {
      onSuccess(posts);
    })
    .catch((err) => {
      onError(err);
    });
};

const postData = (body) => {
  fetch('https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((post) => {
      onGoodSubmit();
      putUserBaloon(refactorData(post));
    })
    .catch((err) => {
      onFailedSubmit(err);
    });
};

export {
  getData,
  postData
};
