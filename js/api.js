const getData = (onSuccess) => {
  fetch ('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    });
};

export {getData};
