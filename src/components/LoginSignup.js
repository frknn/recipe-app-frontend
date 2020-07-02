import React from 'react'
import './styles/LoginSignup.css'

function LoginSignup(props) {
  return (
    <div className="login-signup">
      <span onClick={() => props.handleLoginDisplay('flex')} className="login-signup-span">Giriş Yap</span><span className="login-signup-line"><b>/</b></span><span onClick={() => props.handleSignupDisplay('flex')} className="login-signup-span">Hesap Oluştur</span>
    </div>
  )
}

export default LoginSignup
