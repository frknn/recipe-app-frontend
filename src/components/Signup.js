import React from 'react'
import './styles/Signup.css'
import closeIcon from './icons/close-icon.png'

function Signup(props) {
  return (
    <div className="signup">
      <div onClick={() => props.handleSignupDisplay('none')} className="signup-close-icon"><img src={closeIcon} alt="close-icon" /></div>
      <input placeholder="Adınız..." className="two-col-input" type="text" name="name" id="nameId" />
      <input placeholder="Soyadınız..." className="two-col-input" type="text" name="lasName" id="lastNameId" />
      <input placeholder="E-mailiniz..." className="signup-email-input" type="email" name="email" id="signupEmailId" />
      <input placeholder="Şifreniz..." className="two-col-input" type="password" name="password" id="signupPasswordId" />
      <input placeholder="Şifre tekrar..." className="two-col-input" type="password" name="passwordAgain" id="signupPasswordAgainId" />
      <button className="signup-button">Hesap Oluştur</button>
    </div>
  )
}

export default Signup