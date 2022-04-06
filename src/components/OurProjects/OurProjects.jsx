import React from "react";
import ProjectsCard from "./ProjectCard";
import ProjectsFilter from "./ProgectsFilter";
import BigProjectsCard from "./BigProjectsCard";
import NavigationLinks from "./NavigationLinks";

function OurProjects() {

  return (
    <>
      <h2 className="projects__title">наши проекты</h2>
      <ProjectsFilter/>
      <div className="projects-container">
        <BigProjectsCard name="projects__card_big" link={"../../blocks/projects/GasLogo.svg"}/>
        <ProjectsCard name="projects__card" link={"../../blocks/projects/GasLogo.svg"}/>
        <ProjectsCard name="projects__card"
                      link="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"/>
      </div>
      <NavigationLinks/>
    </>
  );
}

export default OurProjects;