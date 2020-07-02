import React from 'react'
import './styles/RecipeList.css'
import RecipeCard from './RecipeCard'

function RecipeList(props) {
  return (
    <div className="recipe-list">
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>

    </div>
  )
}

export default RecipeList
