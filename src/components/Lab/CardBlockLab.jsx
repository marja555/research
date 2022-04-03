import React from "react";

function CardBlockLab(props) {
  const handleClick = () => {
    props.onCardClick();
  }
    return (
      <div className="card-block-lab" onClick={handleClick}>
        <div className="card-block-lab__content">
          <h3 className="card-block-lab__title">{props.card.title}</h3>
          <div className="card-block-lab__icon-circle">
            <img src={props.card.icon} alt="icon" className="card-block-lab__icon" />
          </div>
          <p className="card-block-lab__text">Направление включает в себя исследования 
            <br />и разработки <br />технологий МО и КТ</p>
          <button className="card-block-lab__button" type="button">Подробнее</button>
        </div>
      </div>
    )
}

export default CardBlockLab;