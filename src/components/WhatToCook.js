import React from 'react'
import questionIcon from './icons/question-mark.png'

function WhatToCook(props) {
  return (
    <div className="search-item" onClick={() => props.handlePageSwitch('filter')}>
      <span>Ne Pişirsem</span>
      <img style={{ width: '1.5rem', height: '1.5rem' }} src={questionIcon} alt="question-icon" />

    </div>
  )
}

export default WhatToCook