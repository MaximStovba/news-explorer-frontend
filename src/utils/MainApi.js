// MainApi.js

// signup — регистрация пользователя

// export const BASE_URL = 'https://www.api.news.students.nomoreparties.xyz';
export const BASE_URL = 'http://localhost:3001';

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
export const getContent = (token) => {
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
