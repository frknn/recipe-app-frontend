import React from 'react'
import './styles/Header.css'
import SiteTitle from './SiteTitle'
import LoginSignup from './LoginSignup'
import SearchItems from './SearchItems'

function Header(props) {
  return (
    <header className="site-header-wrapper">
      <div className="header">
        <SiteTitle />
        <SearchItems handlePageSwitch={props.handlePageSwitch}/>
        <LoginSignup handleLoginDisplay={props.handleLoginDisplay} handleSignupDisplay={props.handleSignupDisplay}/>
      </div>
    </header>
  )
}

export default Header