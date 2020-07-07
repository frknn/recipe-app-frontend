import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeSearchComponent from './components/RecipeSearchComponent';
import WhatToCookComponent from './components/WhatToCookComponent';
import RecipeForm from './components/RecipeForm';
import RecipePage from './components/RecipePage';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')))
  }, [])


  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/ara">
          <RecipeSearchComponent />
        </Route>
        <Route path="/filtrele">
          <WhatToCookComponent />
        </Route>
        <Route path="/paylas" render={() =>
          currentUser ? <RecipeForm /> :
            <Redirect to="/" />
        } />
        <Route path="/">
          {/* <Home setCurrentUser={setCurrentUser} currentUser={currentUser} /> */}
          <RecipeForm/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
