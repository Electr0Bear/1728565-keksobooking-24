const request = async () => {
  const response = await fetch('https://24.javascript.pages.academy/keksobooking/data');
  const adverts = await response.json();
  return adverts;
};

const objects = await request();

export {
  objects
};
