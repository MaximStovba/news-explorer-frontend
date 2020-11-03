// MainApi.js

// signup — регистрация пользователя

//export const BASE_URL = 'https://www.api.news.students.nomoreparties.xyz';
export const BASE_URL = 'http://localhost:3001';
export const token = localStorage.getItem('token');

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email, name})
  })
  .then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      } else {
        return response;
      }
    } catch(e) {
      return (e)
    }
  })
  .then((res) => {
    // console.log(res);
    return res;
  })
  .catch((err) => console.log(err));
};

// signin — авторизация пользователя
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      } else {
        return response;
      }
    } catch(e) {
      return (e)
    }
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    } else {
      return data;
    }
  })
  .catch(err => console.log(err))
};

// Параметры запроса для проверки валидности токена
// и получения данных пользователя
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((err) => console.log(err));
};

// возвращает все сохранённые пользователем статьи
// GET /articles
export const getSavedCards = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
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

// сохраняет статью с переданными в теле
// keyword, title, text, date, source, link и image
// POST /articles
export const postNewCard = (keyword, articleData) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      keyword: keyword,
      title: articleData.title,
      text: articleData.description,
      date: articleData.publishedAt,
      source: articleData.source.name,
      link: articleData.url,
      image: articleData.urlToImage,
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  });
};

// удаляет сохранённую статью  по _id
// DELETE /articles/:articleId
export const deleteMyCard = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  });
};
