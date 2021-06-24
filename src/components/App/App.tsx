import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Main } from '../Main/Main';
import { Navigation } from '../Navigation/Navigation';
import { Page404 } from '../Page404/Page404';

export const App: React.FC = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact={true} path="/">
        <Redirect to="/main" />
      </Route>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
);
