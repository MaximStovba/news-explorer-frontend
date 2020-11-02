// NewsApi.js

export const BASE_URL = 'https://nomoreparties.co/news/v2/top-headlines?';
export const API_KEY = 'ac262763b55b48bca9f3ff767b60c2be';
export const P_SIZE = 10;

// метод загрузки карточек с сервера
// q — то, что ввёл пользователь в поиск;
// apiKey — ключ, который вы получите после регистрации;
// from — 7 дней назад от текущей даты;
// to — текущая дата;
// pageSize — максимально допустимый массив. Выберите 100 статей

export const getInitialCards = ( q, from, to ) => {
  return fetch(`${BASE_URL}q=${q}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=${P_SIZE}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  });
};
