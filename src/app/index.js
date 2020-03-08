import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReactTooltip from 'react-tooltip'

import '../assets/scss/app.scss'
import '../assets/scss/page.scss'
import { Homepage, Connect, Code, About } from '../pages'
import { Header } from '../components'

const pages = [
  { link: '/home', label: "Intro", className: "home", id: "home-id", PageComponent: Homepage, icon: '🏠' },
  { link: '/code', label: "My Work", className: "code", id: "code-id", PageComponent: Code, icon: '👨‍💻' },
  { link: '/me', label: "About Me", className: "about", id: "about-id", PageComponent: About, icon: '🙋‍♂️' },
  { link: '/connect', label: "Connect", className: "connect", id: "connect-id", PageComponent: Connect, icon: '🤝' }
]

const renderPages = ({ PageComponent, ...pageProps }) => <PageComponent key={pageProps.id} {...pageProps} />

export default () => (
  <Router>
    <Header pages={pages} />
    <Switch>
      <Route path="/">
        {pages.map(renderPages)}
      </Route>

      {/* {
        pages.map(({ PageComponent, link, ...pageProps }) => <Route exact path={link}><PageComponent {...pageProps} /></Route>)
      } */}
    </Switch>
    <ReactTooltip />
  </Router>
)