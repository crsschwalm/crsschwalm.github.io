import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import '../assets/css/app.css'
import '../assets/css/page.css'
import { Homepage, Connect, Code, About, Scroll } from '../pages'
import { Header } from '../components'

const pages = [
  { link: '/home', label: "Intro", className: "home", id: "home-id", PageComponent: Homepage },
  { link: '/code', label: "My Stats", className: "code", id: "code-id", PageComponent: Code },
  { link: '/me', label: "About Me", className: "about", id: "about-id", PageComponent: About },
  { link: '/connect', label: "Connect", className: "connect", id: "connect-id", PageComponent: Connect }
]

export default () => (
  <Router>
    <Header pages={pages} />
    <Switch>
      <Route exact path="/">
        {pages.map(({ PageComponent, ...pageProps }) => <PageComponent key={pageProps.id} {...pageProps} />)}
      </Route>

      {
        pages.map(({ PageComponent, link, ...pageProps }) => <Route exact path={link}><PageComponent {...pageProps} /></Route>)
      }
    </Switch>
  </Router>
)