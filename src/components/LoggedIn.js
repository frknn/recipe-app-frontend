import React from 'react'
import { Link } from 'react-router-dom'
import './styles/LoggedIn.css'

function LoggedIn(props) {

  const handleLogout = () => {
    window.localStorage.removeItem('currentUser')
    props.setCurrentUser(null)
  }

  return (
    <div className="logged-in-wrapper">
      <span>{props.currentUser.email}</span>
      <div>
        <Link to="/paylas" style={{ textDecoration: "inherit", color: "inherit" }}><span>Tarif Paylaş</span></Link>
        <span> - </span>
        <span onClick={handleLogout}>Çıkış Yap</span>
      </div>
    </div>
  )
}

export default LoggedIn
