import React from "react";

function ProjectsCard (props) {

  return (
    <figure className={props.name}>
      <img
          className="projects__logo"
          src={`${props.link}`}
        />
      <p className="projects__card-text">Направление включает в себя исследования и разработки технологий МО и КТ.</p>
      {/* <figcaption className="place__caption">
          <h2 className="place__title">{props.card.name}</h2>
          <div className="place__like-container">
            <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
            <p className="place__like-counter">{props.card.likes.length}</p>
          </div>
        </figcaption>
        <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>*/}
    </figure>
  );
}

export default ProjectsCard;