import React, {useState} from 'react';
import  Lab  from './Lab';
import LabPopup from './Lab/LabPopup';


function Main(props) {
  const [isLabPopupOpen, setIsLabPopupOpen] = useState(false);
  
  const handleCardLabClick = () => {
    setIsLabPopupOpen(true);
  }
  const handleLabPopupClose = () => {
    setIsLabPopupOpen(false);
  }
    return (
      <>
        <nav className="navbar"></nav>
        <header className="header"></header>
        <section className="tech"></section>
        <article className="about-us"></article>
        <Lab onCardClick={handleCardLabClick} />
        <section className="projects"></section>
        <section className="education"></section>
        <section className="publications"></section>
        <section className="team"></section>
        <form className="form"></form>
        <footer className="footer"></footer>
        <LabPopup isOpen={isLabPopupOpen} isClose={handleLabPopupClose}/>
      </>
    )
}

export default Main;