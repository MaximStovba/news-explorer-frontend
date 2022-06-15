// About.js

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Об авторе</h2>
        <article className="about__article">
          <p className="about__text">Привет, меня зовут Максим. Обучение по программе «Веб-разработчик» Яндекс.Практикума помогло мне  начать эффективно применять современные технологии разработки.</p>
          <p className="about__text">Владею языками HTML, CSS и JavaScript. Создаю интерфейсы с помощью библиотеки React. Применяю Git, чтобы работать в команде, и Webpack, чтобы собирать файлы проекта автоматически. Разбираюсь в устройстве сервера: могу настроить Nginx и запрограммировать сервер на Node.js.</p>
        </article>
        <div className="about__img-container"></div>
      </div>
    </section>
  );
}

export default About;
