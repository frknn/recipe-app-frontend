import React from 'react'
import './styles/LoginSignup.css'

function LoginSignup(props) {
  return (
    <div className="login-signup">
      <span onClick={() => props.handleLoginDisplay(true)} className="login-signup-span">Giriş Yap</span><span className="login-signup-line"><b>/</b></span><span onClick={() => props.handleSignupDisplay(true)} className="login-signup-span">Hesap Oluştur</span>
    </div>
  )
}

export default LoginSignup
