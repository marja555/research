import React from 'react';
import OurProjects from "./OurProjects/OurProjects";

function Main(props) {
    return (
      <>
        <nav className="navbar"></nav>
        <header className="header"></header>
        <section className="tech"></section>
        <article className="about-us"></article>
        <section className="lab"></section>
        <section className="projects">
            <OurProjects/>
        </section>
        <section className="education"></section>
        <section className="publications"></section>
        <section className="team"></section>
        <form className="form"></form>
        <footer className="footer"></footer>
      </>
    )
}

export default Main;