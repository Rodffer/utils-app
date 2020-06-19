import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter basename="utils-app">
      <Switch>
        <Route path="/" exact component={Main}/>
      </Switch>
    </BrowserRouter>
  )
}