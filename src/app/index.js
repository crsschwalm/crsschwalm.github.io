import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import ReactGA from 'react-ga';

import '../assets/scss/app.scss';
import '../assets/scss/page.scss';
import { Connect, Code, Intro, Stack } from '../pages';
import { Header } from '../components';

const pages = [
  {
    link: '/intro',
    label: 'Intro',
    className: 'intro',
    id: 'intro-id',
    PageComponent: Intro,
    icon: '☕️',
  },
  {
    link: '/stack',
    label: 'Dev Stack',
    className: 'stack',
    id: 'stack-id',
    PageComponent: Stack,
    icon: '🥞',
  },
  {
    link: '/code',
    label: 'My Work',
    className: 'code',
    id: 'code-id',
    PageComponent: Code,
    icon: '👨‍💻',
  },
  {
    link: '/connect',
    label: 'Connect',
    className: 'connect',
    id: 'connect-id',
    PageComponent: Connect,
    icon: '🤝',
  },
];

const renderPages = ({ PageComponent, ...pageProps }) => (
  <PageComponent key={pageProps.id} {...pageProps} />
);

export default () => {
  useEffect(() => {
    ReactGA.initialize('UA-160277350-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Header pages={pages} />
      <Switch>
        <Route path="/">{pages.map(renderPages)}</Route>
      </Switch>
      <ReactTooltip />
      <ReactTooltip
        id="easterEgg"
        effect="solid"
        place="bottom"
        className="opaque"
      >
        <span style={{ fontSize: '100px' }} role="img">
          🐣
        </span>
      </ReactTooltip>
    </Router>
  );
};
