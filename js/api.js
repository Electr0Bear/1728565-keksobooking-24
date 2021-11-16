import {onError, onGoodSubmit, onFailedSubmit} from './util.js';

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
  fetch('https://24.javascript.pages.academy/keksobookin',
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
      onGoodSubmit(post);
    })
    .catch((err) => {
      onFailedSubmit(err);
    });
};

export {
  getData,
  postData
};
