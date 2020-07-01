import React from 'react'
import './styles/Login.css'
import closeIcon from './icons/close-icon.png'

function Login(props) {
  return (
    <div className="login">
      <div onClick={() => props.handleLoginDisplay('none')} className="login-close-icon"><img src={closeIcon} alt="close-icon" /></div>
      <input placeholder="E-mailinizi giriniz..." className="email-input" type="email" name="email" id="emailId" />
      <input placeholder="Şifrenizi giriniz..." className="password-input" type="password" name="email" id="passwordId" />
      <button className="login-button">Giriş Yap</button>
    </div>
  )
}

export default Login