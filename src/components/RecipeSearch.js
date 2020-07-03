import React from 'react'
import { Link } from 'react-router-dom'
import './styles/RecipeSearch.css'
import searchIcon from './icons/icons8-search-50.png'

function RecipeSearch(props) {
  return (
    <div className="search-item">
      <Link to="/ara" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <img style={{ width: '1.5rem', height: '1.5rem' }} src={searchIcon} alt="search-icon" />
        <span>Tarif Ara</span>
      </Link>
    </div>
  )
}

export default RecipeSearch
