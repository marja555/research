import React from "react";
import { Publications } from "./Publications";

function Main(props) {
  return (
    <>
      <nav className="navbar"></nav>
      <header className="header"></header>
      <section className="tech"></section>
      <article className="about-us"></article>
      <section className="lab"></section>
      <section className="projects"></section>
      <section className="education"></section>
      <section className="publications">
        <Publications />
      </section>
      <section className="team"></section>
      <form className="form"></form>
      <footer className="footer"></footer>
    </>
  );
}

export default Main;
