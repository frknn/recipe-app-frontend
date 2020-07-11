import React, { useState } from 'react'
import './styles/Signup.css'
import closeIcon from './icons/close-icon.png'
import authService from '../services/authService'
import { toast } from 'react-toastify'

function Signup(props) {

  const [name, setName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const [signupErrorMessage, setSignupErrorMessage] = useState(null)

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (!(name && lastName && email && password && passwordAgain)) {
      setSignupErrorMessage('Lütfen tüm alanları doldurunuz!')
    }

    else if (password.length < 6) {
      setSignupErrorMessage('Şifre en az 6 karakter olmalıdır!')
    }

    else if (password !== passwordAgain) {
      setSignupErrorMessage('Şifreler eşleşmiyor!')
    }

    else {
      let signupObj = { name, lastName, email, password }
      const data = await authService.register(signupObj)
      console.log("DATA", data)

      if (!data.success) {
        setSignupErrorMessage(data.error)
        console.log("ERROR", data.error)
      } else {
        toast.success('Hesabınız oluşturuldu!')
        props.handleDisplaySignup(false)
      }
    }

  }

  return (
    <div className="signup">
      {signupErrorMessage ? <span onClick={() => setSignupErrorMessage(null)} style={{ cursor: 'pointer', backgroundColor: 'lightcoral', borderRadius: '0.5rem', color: "whitesmoke", margin: 0, padding: "0.2rem", border: "2px solid black" }}>{signupErrorMessage}</span> : null}
      <div className="signup-close-icon"><img onClick={() => props.handleDisplaySignup(false)} src={closeIcon} alt="close-icon" /></div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Adınız..." className="two-col-input" type="text" name="name" id="nameId" />
        <input value={lastName} onChange={(e) => setlastName(e.target.value)} placeholder="Soyadınız..." className="two-col-input" type="text" name="lasName" id="lastNameId" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mailiniz..." className="signup-email-input" type="email" name="email" id="signupEmailId" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifreniz..." className="two-col-input" type="password" name="password" id="signupPasswordId" />
        <input value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} placeholder="Şifre tekrar..." className="two-col-input" type="password" name="passwordAgain" id="signupPasswordAgainId" />
        <button type="submit" className="signup-button">Hesap Oluştur</button>
      </form>

    </div>
  )
}

export default Signup