import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <Link to="/">
          <h2>Waleed Bin Khalid</h2>
        </Link>
        <p><a href="mailto:waleedbinkhalidch@gmail.com">waleedbinkhalidch@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Waleed. A code-blooded Software Engineer, <a href="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html" rel="noreferrer" target="_blank">React Frontend Web Developer</a>,
         <a href="http://web.uaf.edu.pk/" rel="noreferrer" target="_blank">University of Agriculture, Faisalabad</a>.
        I live in <a href="https://en.wikipedia.org/wiki/Lahore" rel="noreferrer" target="_blank">Lahore - the city of Gardens</a>.
        I enjoy learning and creating new things.
        I&apos;m passionate
        about <a href="https://javascript.info/intro" rel="noreferrer" target="_blank">JavaScript</a>
        , <a href="https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964" rel="noreferrer" target="_blank">ECMAScript</a>
        , <a href="https://reactjs.org/" rel="noreferrer" target="_blank">ReactJS</a>
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
      <p className="copyright">&copy; Waleed Bin Khalid <Link to="/">https://wbkch.github.io/WaleedSite /</Link>.</p>
    </section>
  </section>
);

export default SideBar;
