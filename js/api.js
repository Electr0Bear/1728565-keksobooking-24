const onError = (err) => {
  const errorPopup = `<div class="error">
    <p style="color: #FFF">Не удалось загрузить данные с сервера.<br>Код ошибки: ${err}</p>
    <button type="button" class="error__button-onload" style="color: white; border: 4px solid #ff5635; background-color: #ff5635; border-radius: 8px;">OK</button>
    </div>`;
  document.querySelector('body').insertAdjacentHTML('beforeend', errorPopup);
  document.querySelector('.error__button-onload').addEventListener('click', () =>
    document.querySelector('.error').remove(),
  );
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

export {
  getData
};
