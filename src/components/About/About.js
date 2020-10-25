// About.js

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Об авторе</h2>
        <article className="about__article">
          <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
          <p className="about__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </article>
        <div className="about__img-container"></div>
      </div>
    </section>
  );
}

export default About;
