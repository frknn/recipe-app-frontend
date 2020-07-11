import React from 'react'
import './styles/Header.css'
import SiteTitle from './SiteTitle'
import LoginSignup from './LoginSignup'
import SearchItems from './SearchItems'
import LoggedIn from './LoggedIn'
import { useSelector } from 'react-redux'

function Header() {

  const currentUser = useSelector(state => state.user)

  return (
    <header className="site-header-wrapper">
      <div className="header">
        <SiteTitle />
        <SearchItems />
        {currentUser ? <LoggedIn currentUser={currentUser} /> : <LoginSignup />}
      </div>
    </header>
  )
}

export default Header