const getData = (onSuccess, onError) => {
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

const postData = (onSuccess, onError, body) => {
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
    .then(() => {
      onSuccess();
    })
    .catch((err) => {
      onError(err);
    });
};

export {
  getData,
  postData
};
