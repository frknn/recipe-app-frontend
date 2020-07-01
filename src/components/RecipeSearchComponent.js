import React from 'react'
import './styles/RecipeSearchComponent.css'
import closeIcon from './icons/close-icon.png'


function RecipeSearchComponent(props) {
  return (
    <div className="close-wrapper">
      <div className="close" onClick={() => props.handlePageSwitch('header')}>
        <img style={{ width: "2rem", height: "2rem" }} src={closeIcon} alt="close-icon" /><span className="close-label">KAPAT</span>
      </div>
      <input className="recipe-search-input" type="text" placeholder="Yemek tarifi arayın..." autoFocus/>
    </div>

  )
}

export default RecipeSearchComponent
