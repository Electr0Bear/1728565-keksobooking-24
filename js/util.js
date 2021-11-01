// Функция возвращающая случайное целое число в заданном диапазоне
const getRndInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция возвращающая случайное число в заданном диапазоне с указанием количества знаков после запятой
const getRndFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
};

// Функиця, возвращающая массив из случаного набора уникальных элементов от передаваемого массива
const getRndElements = (array) => {
  const rndArr = [...new Set(Array.from({length: getRndInteger(1, array.length)}, () => array[getRndInteger(0, array.length - 1)]))];
  return rndArr;
};

export {getRndInteger, getRndFloat, getRndElements};
