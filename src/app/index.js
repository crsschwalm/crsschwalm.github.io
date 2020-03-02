import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import '../assets/css/app.css'
import '../assets/css/page.css'
import { Homepage, Connect, Code, About } from '../pages'
import { Header } from '../components'
import { useIsMobile } from '../services'

const pages = [
  { link: '/home', label: "Intro", className: "home", id: "home-id", PageComponent: Homepage },
  { link: '/code', label: "My Work", className: "code", id: "code-id", PageComponent: Code },
  { link: '/me', label: "About Me", className: "about", id: "about-id", PageComponent: About },
  { link: '/connect', label: "Connect", className: "connect", id: "connect-id", PageComponent: Connect }
]

const renderPages = ({ PageComponent, ...pageProps }) => <PageComponent key={pageProps.id} {...pageProps} />

export default () => {
  const activePages = useIsMobile() ? [pages[0]] : pages

  return (<Router>
    <Header pages={activePages} />
    <Switch>
      <Route path="/">
        {activePages.map(renderPages)}
      </Route>

      {/* {
        pages.map(({ PageComponent, link, ...pageProps }) => <Route exact path={link}><PageComponent {...pageProps} /></Route>)
      } */}
    </Switch>
  </Router>)
}