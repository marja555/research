import React from "react";

function ProjectsCard (props) {

 function handleClick(){
    console.log('fknfdlkn')
  }

  return (
    <figure className={props.name}>
      <img
          className="projects__logo"
          src={`${props.link}`}
        />
      <p className="projects__card-text">Направление включает в себя исследования и разработки технологий МО и КТ.</p>
      <button className="projects-button" type="button" onClick={handleClick}></button>
    </figure>
  );
}

export default ProjectsCard;