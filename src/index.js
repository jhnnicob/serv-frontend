import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import PrivateRoute from './components/custom-route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import ForgotPassword from './forgotPassword';

ReactDOM.render(
  <Router>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>

        <PrivateRoute path="/">
          <App />
        </PrivateRoute>
      </Switch>
  </Router>,
  document.getElementById('root')
);

