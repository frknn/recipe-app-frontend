import React from 'react'
import { Link } from 'react-router-dom'
import './styles/LoggedIn.css'
import { useDispatch } from 'react-redux'
import { logout } from '../reducers/authReducer'

function LoggedIn({ currentUser }) {

  const dispatch = useDispatch()

  return (
    <div className="logged-in-wrapper">
      <span>{currentUser.email}</span>
      <div>
        <Link to="/paylas" style={{ textDecoration: "inherit", color: "inherit" }}><span>Tarif Paylaş</span></Link>
        <span> - </span>
        <span onClick={() => dispatch(logout())}>Çıkış Yap</span>
      </div>
    </div>
  )
}

export default LoggedIn
