import React from 'react';
import './App.css';
import RecipeSearchComponent from './components/RecipeSearchComponent';
import WhatToCookComponent from './components/WhatToCookComponent';
import RecipeForm from './components/RecipeForm';
import RecipePage from './components/RecipePage';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify'
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/ara" component={RecipeSearchComponent} />
        <Route path="/filtrele" component={WhatToCookComponent} />
        <PrivateRoute path="/paylas" component={RecipeForm} />
        <Route exact path="/tarifler" render={() => <Redirect to="/" />} />
        <Route path="/tarifler/:id" component={RecipePage} />
        <Route exact path="/" component={Home} />
      </Switch>
      <ToastContainer />
    </Router>
  )
}

export default App;
