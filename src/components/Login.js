import React, { useState } from 'react'
import './styles/Login.css'
import closeIcon from './icons/close-icon.png'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../reducers/authReducer';
import { setError, removeError } from '../reducers/errorReducer';

function Login(props) {

  const dispatch = useDispatch()
  const error = useSelector(state => state.error)
  const user = useSelector(state => state.user)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!(email && password)) {
      dispatch(setError('Lütfen kullanıcı adı ve şifrenizi giriniz!'))
      return
    }
    dispatch(login({ email, password }))
  }

  return (
    <div className="login">
      {error.error ? <span onClick={() => dispatch(removeError())} style={{ cursor: 'pointer', backgroundColor: 'lightcoral', borderRadius: '0.5rem', color: "whitesmoke", margin: 0, padding: "0.2rem", border: "2px solid black" }}>{error.error}</span> : user ? props.handleDisplayLogin(false) : null}
      <div className="login-close-icon"><img onClick={() => props.handleDisplayLogin(false)} src={closeIcon} alt="close-icon" /></div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mailinizi giriniz..." className="email-input" type="email" name="email" id="emailId" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Şifrenizi giriniz..." className="password-input" type="password" name="email" id="passwordId" />
        <button type="submit" className="login-button">Giriş Yap</button>
      </form>
    </div>
  )
}

export default Login