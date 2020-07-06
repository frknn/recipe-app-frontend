import React, { useState, useEffect } from 'react'
import Header from './Header'
import ModalWrapper from './ModalWrapper'
import Login from './Login'
import Signup from './Signup'
import RecipeList from './RecipeList'
import axios from 'axios'

function Home(props) {

  const [loginDisplay, setLoginDisplay] = useState(false)
  const [signupDisplay, setSignupDisplay] = useState(false)
  const [recipes, setRecipes] = useState([])

  let url = "http://localhost:5000/api/v1/recipes"

  useEffect(() => {
    axios.get(url).then(res => {
      console.log('IN HOME: ', res.data.data)
      setRecipes(res.data.data)
    })
  }, [url])

  const handleLoginDisplay = (display) => {
    setLoginDisplay(display)
  }

  const handleSignupDisplay = (display) => {
    setSignupDisplay(display)
  }

  return (
    <>
      <Header setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} handleLoginDisplay={handleLoginDisplay} handlePageSwitch={props.handlePageSwitch} handleSignupDisplay={handleSignupDisplay} />
      {loginDisplay ? <ModalWrapper>
        <Login setCurrentUser={props.setCurrentUser} handleLoginDisplay={handleLoginDisplay} />
      </ModalWrapper> : null}
      {signupDisplay ? <ModalWrapper>
        <Signup handleSignupDisplay={handleSignupDisplay} />
      </ModalWrapper> : null}
      <RecipeList recipes={recipes} />
    </>
  )
}

export default Home