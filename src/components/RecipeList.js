import React from 'react'
import './styles/RecipeList.css'
import RecipeCard from './RecipeCard'

function RecipeList({recipes}) {

  return (
    <div className="recipe-list">
      {recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)}
    </div>
  )
}

export default RecipeList
