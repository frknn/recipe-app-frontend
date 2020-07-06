import React from 'react'
import './styles/RecipeList.css'
import RecipeCard from './RecipeCard'

function RecipeList(props) {
  console.log('RECIPES: ',props.recipes)
  return (
    <div className="recipe-list">
      {props.recipes.map(recipe => <RecipeCard recipe={recipe} />)}
    </div>
  )
}

export default RecipeList
