import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeSearchComponent from './components/RecipeSearchComponent';
import WhatToCookComponent from './components/WhatToCookComponent';
import Login from './components/Login';
import ModalWrapper from './components/ModalWrapper';
import Signup from './components/Signup';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';



function App() {

  const [page, setPage] = useState('header')
  const [loginDisplay, setLoginDisplay] = useState('none')
  const [signupDisplay, setSignupDisplay] = useState('none')

  const handlePageSwitch = (page) => {
    setPage(page)
  }

  const handleLoginDisplay = (display) => {
    setLoginDisplay(display)
  }

  const handleSignupDisplay = (display) => {
    setSignupDisplay(display)
  }

  
  switch (page) {
    case 'header':
      return (
        <>
          <Header handleLoginDisplay={handleLoginDisplay} handlePageSwitch={handlePageSwitch} handleSignupDisplay={handleSignupDisplay}/>
          <ModalWrapper elementDisplay={loginDisplay}>
            <Login handleLoginDisplay={handleLoginDisplay} />
          </ModalWrapper>
          <ModalWrapper elementDisplay={signupDisplay}>
            <Signup handleSignupDisplay={handleSignupDisplay}/>
          </ModalWrapper>
          <RecipeList/>
          <RecipeForm/>
        </>
      )

    case 'search':
      return (<RecipeSearchComponent handlePageSwitch={handlePageSwitch} />)

    case 'filter':
      return (<WhatToCookComponent handlePageSwitch={handlePageSwitch} />)

    default:
      return (<Header handlePageSwitch={handlePageSwitch} />)
  }
}

export default App;
