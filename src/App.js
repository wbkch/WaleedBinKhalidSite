/* eslint-disable no-console */
import React, {
  Suspense, lazy,
} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
// const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
// const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));

function App() {
  console.log(localStorage.getItem('isLight') === 'true');

  // React useEffect hook that will fire up
  // when "darkTheme" changes
  // useEffect(() => {
  //   // Accessing scss variable "--background-color"
  //   // and "--text-color" using plain JavaScript
  //   // and changing the same according to the state of "darkTheme"
  //   document.documentElement.style.setProperty('--light-color', 'yellow');
  //   const root = document.documentElement;
  //   console.log(root);
  //   // root?.style.setProperty(
  //   //   '--lighto',
  //   //   localStorage.getItem('isLight') === 'true',
  //   // );

  //   // console.log()
  // });

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Switch>
          <Route exact path="/" component={Index} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/projects" component={Projects} /> */}
          {/* <Route path="/stats" component={Stats} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
