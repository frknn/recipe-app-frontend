import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './styles/RecipeSearchComponent.css'
import closeIcon from './icons/close-icon.png'
import RecipeList from './RecipeList';
import { getAllRecipes } from '../reducers/recipeReducer'
import { useDispatch, useSelector } from 'react-redux';


function RecipeSearchComponent() {

  const recipes = useSelector(state => state.recipes)
  const dispatch = useDispatch()

  const [recipe, setRecipe] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState([])

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch])

  useEffect(() => {
    setFilteredRecipes(recipes.filter(r => r.title.toLowerCase().includes(recipe.toLowerCase())))
  }, [recipe, recipes])

  return (
    <div className="close-wrapper">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="close">
          <img style={{ width: "2rem", height: "2rem" }} src={closeIcon} alt="close-icon" /><span className="close-label">KAPAT</span>
        </div>
      </Link>
      <input value={recipe} onChange={(e) => setRecipe(e.target.value)} className="recipe-search-input" type="text" placeholder="Yemek tarifi arayın..." autoFocus />
      <div style={{ width: '100%' }}>
        {recipe ? filteredRecipes.length ? <RecipeList recipes={filteredRecipes} /> : <h1 style={{ textAlign: 'center', opacity: '0.4', padding: '1rem' }}>Tarif Bulunamadı :(</h1> : null}
      </div>
    </div>
  )
}

export default RecipeSearchComponent
