import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const NotFound = lazy(() => import('./NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}
