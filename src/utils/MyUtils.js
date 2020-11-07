// MyUtils.js

import dateFormat from 'dateformat';

// делаем первый символ строки заглавный
export function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

// функция подстановки правильных окончаний слов
export const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];



// форматируем дату
export function formatDate(date) {
  dateFormat.masks.hammerTime = 'd mmmm, yyyy';
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        'января', 'февраля', 'марта', 'апреля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ],
    timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
  };

  return dateFormat(date, "hammerTime");
}

// получение текущей даты в формате 2020-11-01
export function currentDate() {
  let time = new Date();
  dateFormat.masks.hammerTime = 'yyyy-mm-dd';

  return dateFormat(time, "hammerTime");
}

// получение текущей даты в формате 2020-11-01
export function sevenDaysAgoDate() {
  let time = Date.now() - 7 * 24 * 3600 * 1000;
  dateFormat.masks.hammerTime = 'yyyy-mm-dd';

  return dateFormat(time, "hammerTime");
}

