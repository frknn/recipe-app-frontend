import React, { useState } from 'react'
import Header from './Header'
import ModalWrapper from './ModalWrapper'
import Login from './Login'
import Signup from './Signup'
import RecipeList from './RecipeList'

function Home(props) {

  const [loginDisplay, setLoginDisplay] = useState('none')
  const [signupDisplay, setSignupDisplay] = useState('none')

  const handleLoginDisplay = (display) => {
    setLoginDisplay(display)
  }

  const handleSignupDisplay = (display) => {
    setSignupDisplay(display)
  }

  return (
    <>
      <Header currentUser={props.currentUser} handleLoginDisplay={handleLoginDisplay} handlePageSwitch={props.handlePageSwitch} handleSignupDisplay={handleSignupDisplay} />
      <ModalWrapper elementDisplay={loginDisplay}>
        <Login setCurrentUser={props.setCurrentUser} handleLoginDisplay={handleLoginDisplay} />
      </ModalWrapper>
      <ModalWrapper elementDisplay={signupDisplay}>
        <Signup handleSignupDisplay={handleSignupDisplay} />
      </ModalWrapper>
      <RecipeList />
    </>
  )
}

export default Home