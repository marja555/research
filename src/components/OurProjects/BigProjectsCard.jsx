import React from "react";

function BigProjectsCard (props) {

  function handleClick(){
    console.log('fknfdlkn')
  }

  return (
    <figure className={props.name}>
      <p className="projects__card-text_big">Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.</p>
      <img
        className="projects__logo"
        src={`${props.link}`}
      />
      <button className="projects-button_big" type="button" onClick={handleClick}></button>
    </figure>
  );
}

export default BigProjectsCard;