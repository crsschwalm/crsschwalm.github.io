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


export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/me">
        <About />
      </Route>
      <Route path="/connect">
        <Connect />
      </Route>
      <Route path="/code">
        <Code />
      </Route>
    </Switch>
  </Router>
)