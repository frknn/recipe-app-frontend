import React, { useState } from 'react'
import './styles/Login.css'
import closeIcon from './icons/close-icon.png'
import { login } from '../services/loginService';

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let loginObj = { email, password }
    const data = await login(loginObj)
    console.log('DATA: ', data)
    if(!data.success){
      alert('Yanlış kullanıcı adı veya şifre!')
    } else {
      alert(`Başarıyla giriş yaptınız!`)
      window.localStorage.setItem('currentUser', JSON.stringify(data))
      props.setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')))
      props.handleLoginDisplay('none')
    }
  }

  return (
    <div className="login">
      <div onClick={() => props.handleLoginDisplay('none')} className="login-close-icon"><img src={closeIcon} alt="close-icon" /></div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mailinizi giriniz..." className="email-input" type="email" name="email" id="emailId" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Şifrenizi giriniz..." className="password-input" type="password" name="email" id="passwordId" />
        <button type="submit" className="login-button">Giriş Yap</button>
      </form>
      {email}
      <br />
      {password}
    </div>
  )
}

export default Login