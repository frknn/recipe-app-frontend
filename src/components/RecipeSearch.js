import React from 'react'
import './styles/RecipeSearch.css'
import searchIcon from './icons/icons8-search-50.png'

function RecipeSearch(props) {
  return (
    <div className="search-item" onClick={() => props.handlePageSwitch('search')}>
      <img style={{ width: '1.5rem', height: '1.5rem' }} src={searchIcon} alt="search-icon" />
      <span>Tarif Ara</span>
    </div>
  )
}

export default RecipeSearch
