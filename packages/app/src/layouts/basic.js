import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
const BasicLayout = () => {
  return (
  <Router>
        <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path={`/login`} component={() => <Login />} />
        </Switch>
  </Router>

  )
}

export default BasicLayout;