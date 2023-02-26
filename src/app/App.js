import React from 'react';
import './App.css';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Dashboard from '../dashboard';
import Order from '../order';
import User from '../user';
import Product from '../product';
import Unit from '../unit';
import { Switch, Route } from 'react-router-dom';
import routes from '../config/router';

export function App() {
// Applying testing
  return (
      <div className="app">
        <Sidebar routes={routes} />
        <div className="app__body">
          <Header routes={routes} />
          <Switch>
            <Route exact path={["/","/dashboard"]}>
              <Dashboard />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/unit">
              <Unit />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/user">
              <User />
            </Route>
         </Switch>
        </div>
      </div>
  )
}
