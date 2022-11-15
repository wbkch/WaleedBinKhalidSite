import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Resume = () => (
  <Main
    title="Resume"
    description="WALEED BIN KHALID's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
        </div>
      </header>

      <div style={{ height: '100vh' }}>
        <iframe className="holds-the-iframe" title="Waleed Resume" src="https://docs.google.com/gview?url=https://github.com/wbkhalid/wbkhalid/raw/mater/Waleed%20Resume.pdf&embedded=true" style={{ width: '100%', height: '100%' }} frameBorder="0" />
      </div>
    </article>
  </Main>
);

export default Resume;
