import React from 'react';
import Header from './Header';

function Main(props) {
    return (
      <>
        <nav className="navbar"></nav>
        <header className="header">
          <Header/>
        </header>
        <section className="tech"></section>
        <article className="about-us"></article>
        <section className="lab"></section>
        <section className="projects"></section>
        <section className="education"></section>
        <section className="publications"></section>
        <section className="team"></section>
        <form className="form"></form>
        <footer className="footer"></footer>
      </>
    )
}

export default Main;