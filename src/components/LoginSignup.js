import React from 'react'
import './styles/LoginSignup.css'
import { useState } from 'react'
import ModalWrapper from './ModalWrapper'
import Login from './Login'
import Signup from './Signup'

function LoginSignup() {

  const [displayLogin, setDisplayLogin] = useState(false)
  const [displaySignup, setDisplaySignup] = useState(false)

  const handleDisplayLogin = (display) => {
    setDisplayLogin(display)
  }

  const handleDisplaySignup = (display) => {
    setDisplaySignup(display)
  }

  return (
    <div className="login-signup">
      <span onClick={() => handleDisplayLogin(true)} className="login-signup-span">Giriş Yap</span><span className="login-signup-line"><b>/</b></span><span onClick={() => handleDisplaySignup(true)} className="login-signup-span">Hesap Oluştur</span>
      {displayLogin ? <ModalWrapper>
        <Login handleDisplayLogin={handleDisplayLogin} />
      </ModalWrapper> : displaySignup ? <ModalWrapper>
        <Signup handleDisplaySignup={handleDisplaySignup} />
      </ModalWrapper> : null}
    </div>
  )
}

export default LoginSignup
