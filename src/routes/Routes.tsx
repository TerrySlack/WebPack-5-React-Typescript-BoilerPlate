import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Nav } from 'Containers/Nav';
import { Home } from 'Containers/Home';
import DetailView from 'Containers/DetailView';
import { ProfileView } from 'Containers/ProfileView';

export const history = createBrowserHistory();

interface Props {}

// Render Props.  Create here to prevent a rerender, on a route change, due to arrow functions always being considered new
const homeRoute = () => <Home />;
const detailRoute = () => <DetailView />;
const profileRoute = () => <ProfileView />;
const Routes: FC<Props> = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" render={homeRoute} />
      <Route exact path="/DetailView" render={detailRoute} />
      <Route exact path="/ProfileView" render={profileRoute} />
      <Route>404: Page not found</Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
