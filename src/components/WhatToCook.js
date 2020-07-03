import React from 'react'
import {Link} from 'react-router-dom'
import questionIcon from './icons/question-mark.png'

function WhatToCook() {
  return (
    <div className="search-item">
      <Link to="/filtrele" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <span>Ne Pişirsem</span>
        <img style={{ width: '1.5rem', height: '1.5rem' }} src={questionIcon} alt="question-icon" />
      </Link>
    </div>
  )
}

export default WhatToCook