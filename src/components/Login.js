import React, { useState } from 'react'
import './styles/Login.css'
import closeIcon from './icons/close-icon.png'
import { login } from '../services/authService';

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginErrorMessage, setLoginErrorMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!(email && password)) {
      setLoginErrorMessage('Lütfen kullanıcı adı ve şifrenizi giriniz!')
      return
    }
    let loginObj = { email, password }
    const data = await login(loginObj)
    if (!data.success) {
      setLoginErrorMessage(data.error)
    } else {
      window.localStorage.setItem('currentUser', JSON.stringify(data.user))
      window.localStorage.setItem('authToken', JSON.stringify(data.token))
      props.setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')))
      props.handleLoginDisplay(false)
    }
  }

  return (
    <div className="login">
      {loginErrorMessage ? <span onClick={() => setLoginErrorMessage(null)} style={{ cursor: 'pointer', backgroundColor: 'lightcoral', borderRadius: '0.5rem', color: "whitesmoke", margin: 0, padding: "0.2rem", border: "2px solid black" }}>{loginErrorMessage}</span> : null}
      <div onClick={() => props.handleLoginDisplay(false)} className="login-close-icon"><img src={closeIcon} alt="close-icon" /></div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mailinizi giriniz..." className="email-input" type="email" name="email" id="emailId" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Şifrenizi giriniz..." className="password-input" type="password" name="email" id="passwordId" />
        <button type="submit" className="login-button">Giriş Yap</button>
      </form>
    </div>
  )
}

export default Login