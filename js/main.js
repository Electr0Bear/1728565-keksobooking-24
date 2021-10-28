// Функция возвращающая случайное целое число в заданном диапазоне
const getRndInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция возвращающая случайное число в заданном диапазоне с указанием количества знаков после запятой
const getRndFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
};

getRndInteger(8, 1);
getRndFloat(1.1, 1.2, 3);
