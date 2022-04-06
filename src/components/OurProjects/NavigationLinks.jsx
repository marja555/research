import React from "react";

function NavigationLinks() {

  return (
    <div className="projects__navigation">
      <button className="projects__link-button"></button>
      <div className="projects__link projects__link_active">1</div>
      <div className="projects__link">2</div>
      <div className="projects__link">3</div>
      <div className="projects__link">4</div>
      <div className="projects__link">...</div>
      <div className="projects__link">30</div>
        <button className="projects__link-button projects__link-button_right"></button>
    </div>
  );
}

export default NavigationLinks;