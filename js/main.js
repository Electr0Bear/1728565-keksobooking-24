// Функция возвращающая случайное целое число в заданном диапазоне
const getRndInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return 'Ошибка. Значения в диапазоне должны быть положительными числами!';
  }

  if (min === max) {
    return min;
  }

  if (min > max) {
    return Math.floor(Math.random() * (Math.floor(min) - Math.ceil(max) + 1) + Math.ceil(max));
  }

  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
}

// Функция возвращающая случайное число в заданном диапазоне с указанием количества знаков после запятой
const getRndDecimal = (min, max, decimal) => {
  if (min < 0 || max < 0) {
    return 'Ошибка. Значения в диапазоне должны быть положительными числами!';
  }

  if (min === max) {
    return min;
  }

  let rndDecimal;

  if (min > max) {
    rndDecimal = Math.random() * (min - max) + max;
    return +rndDecimal.toFixed(decimal);
  }

  rndDecimal = Math.random() * (max - min) + min;
  return +rndDecimal.toFixed(decimal);
}

getRndInteger (8, 1);
getRndDecimal(1.1, 1.2, 3);
