import React from "react";

export const Education = ({ title, text, image }) => {
  return (
    <div>
      <h2 className="education__title">{title}</h2>
      <p className="education__text">{text}</p>
      <div className="education__counteiner">
        <img src={image} className="education__image" />
        <p className="education__list">Образовательные программы аспирантуры в области МО и КТ</p>
        <ul className="education__list-text">
          <li >Прикладные технологии искусственного интеллекта;</li>
          <li >Машинное обучение и искусственный интеллект;</li>
          <li >Биометрические информационные системы;</li>
          <li >Речевые информационные системы;</li>
          <li >Когнитивные вычисления и квантовый интеллект;</li>
          <li >Большие данные и экстренные вычисления;</li>
          <li >Семантические системы и инженерия знаний;</li>
          <li >Технологии разработки компьютерных игр</li>
        </ul>
        <p className="education__more"> Подробнее → </p>
      </div>
    </div>
  );
};
