import React from 'react'
import RecipeSearch from './RecipeSearch'
import WhatToCook from './WhatToCook'
import './styles/SearchItems.css'

function SearchItems(props) {
  return (
    <div className="search-items">
      <RecipeSearch handlePageSwitch={props.handlePageSwitch}/>
      <WhatToCook handlePageSwitch={props.handlePageSwitch}/>
    </div>
  )
}

export default SearchItems
