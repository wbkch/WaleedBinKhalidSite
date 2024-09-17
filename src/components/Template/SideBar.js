import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <Link to="/">
          <h2>WALEED BIN KHALID</h2>
        </Link>
        <p><a href="mailto:me.waleedbinkhalid@gmail.com">me.waleedbinkhalid@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Waleed. A code-blooded Computer
        Scientist, <a href="https://skillcrush.com/blog/front-end-back-end-full-stack/" rel="noreferrer" target="_blank">Frontend Developer</a>,
        and Alumni of <a href="http://web.uaf.edu.pk/" rel="noreferrer" target="_blank">University of Agriculture</a>.
        I live in <a href="https://en.wikipedia.org/wiki/Lahore" rel="noreferrer" target="_blank">Lahore - the city of gardens</a>.
        I enjoy learning and creating new things.
        I&apos;m passionate
        about <a href="https://javascript.info/intro" rel="noreferrer" target="_blank">JavaScript</a>
        , <a href="https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964" rel="noreferrer" target="_blank">ECMAScript</a>
        , <a href="https://reactjs.org/" rel="noreferrer" target="_blank">ReactJS</a>
        , <a href="https://nodejs.org/en/about/" rel="noreferrer" target="_blank">NodeJS</a>
        , <a href="https://www.mongodb.com/why-use-mongodb" rel="noreferrer" target="_blank">MongoDB</a>
        , and <a href="https://dev.to/andrewbaisden/modern-full-stack-developer-tech-stack-2021-49ij" rel="noreferrer" target="_blank">Latest Technologies</a>.
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Resume</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; WALEED BIN KHALID <Link to="/">wbkhalid.netlify.app</Link>.</p>
    </section>
  </section>
);

export default SideBar;
