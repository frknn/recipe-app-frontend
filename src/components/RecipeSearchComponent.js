import React from 'react'
import { Link } from 'react-router-dom';
import './styles/RecipeSearchComponent.css'
import closeIcon from './icons/close-icon.png'


function RecipeSearchComponent(props) {
  return (
    <div className="close-wrapper">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="close">
          <img style={{ width: "2rem", height: "2rem" }} src={closeIcon} alt="close-icon" /><span className="close-label">KAPAT</span>
        </div>
      </Link>
      <input className="recipe-search-input" type="text" placeholder="Yemek tarifi arayın..." autoFocus />
    </div>

  )
}

export default RecipeSearchComponent
