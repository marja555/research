import React from "react";
import ProjectsCard from "./ProjectCard";
import ProjectsFilter from "./ProgectsFilter";
import GasLogo from "../../blocks/projects/GasLogo.svg"

function OurProjects() {

  return (
    <>
      <h2 className="projects__title">наши проекты</h2>
      <ProjectsFilter/>
      <div className="projects-container">
        <ProjectsCard name="projects__card projects__card_opened" link={"../../blocks/projects/GasLogo.svg"}/>
        <ProjectsCard name="projects__card" link={"../../blocks/projects/GasLogo.svg"}/>
        <ProjectsCard name="projects__card" link="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"/>
      </div>

    </>
  );
}

export default OurProjects;