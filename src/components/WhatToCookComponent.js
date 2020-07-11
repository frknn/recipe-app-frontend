import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import './styles/WhatToCookComponent.css'
import IngredientItem from './IngredientItem'
import RecipeList from './RecipeList'
import closeIcon from './icons/close-icon.png'
import recipeService from '../services/recipeService'


function WhatToCookComponent() {

  let categories = [
    'kahvaltılık', 'atıştırmalık', 'aperatif', 'meze', 'başlangıç', 'ara sıcak', 'ana yemek', 'tatlı', 'ekmek arası', 'soğuk içecek', 'sıcak içecek'
  ]

  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [category, setCategory] = useState(categories[0])

  const addIngredient = e => {
    if (e.key === 'Enter') {
      if (ingredients.length < 15) {
        if (!ingredients.includes(ingredient)) {
          setIngredients(ingredients.concat(ingredient))
          setIngredient('')
        } else {
          alert(`${ingredient} zaten eklendi.`)
          setIngredient('')
        }
      } else {
        alert('En fazla 15 malzeme ekleybilirsiniz.')
        setIngredient('')
      }
    }
  }

  const removeIngredient = (item) => {
    setIngredients(ingredients.filter(i => i !== item))
  }


  const handleSearch = async () => {
    let filterString = `?${prepTime ? `prepTime=${prepTime}&` : ''}${cookTime ? `cookTime=${cookTime}&` : ''}${category ? `category=${category}&` : ''}${ingredients.length ? `ingredients=${ingredients.join(',')}` : ''}`
    if (filterString[filterString.length - 1] === '&') {
      filterString = filterString.slice(0, -1)
    }
    console.log('URL: ', filterString)
    const res = await recipeService.getFilteredRecipes(filterString)
    console.log('FILTERED DATA: ', res.data)
    if (res.data.length) {
      setFilteredRecipes(res.data)
      toast.success(`${res.data.length} tarif bulundu!`)
    }
    else {
      setFilteredRecipes([])
      toast.error('Kriterlere göre tarif bulunamadı!')
    }
  }


  return (
    <div className="close-wrapper">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="close">
          <img style={{ width: "2rem", height: "2rem" }} src={closeIcon} alt="close-icon" /><span className="close-label">KAPAT</span>
        </div>
      </Link>
      <input onKeyDown={addIngredient} value={ingredient} onChange={e => setIngredient(e.target.value)} className="recipe-search-input" type="text" placeholder="Malzemelerinizi tek tek girip enter'a basın..." maxLength="30" autoFocus />
      <div className="ingredients-list">
        {
          ingredients.map(i => <IngredientItem key={i} removeIngredient={removeIngredient} item={i} />)
        }
      </div>
      <div className="filter-section">
        <div className="time-input-div">
          <span className="input-text">Hazırlanma süresi </span><input value={prepTime} onChange={(e) => setPrepTime(e.target.value)} className="time-input" type="number" min="1" /><span className="input-text"> dakikadan kısa olsun.</span>
        </div>
        <div className="time-input-div">
          <span className="input-text">Pişirme süresi </span><input value={cookTime} onChange={(e) => setCookTime(e.target.value)} className="time-input" type="number" min="1" /><span className="input-text"> dakikadan kısa olsun.</span>
        </div>
        <div className="category-input-div">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-input" name="category" id="categoryId">
            {
              categories.map(category =>
                <option key={category} value={category}>{category}</option>
              )
            }
          </select>
          <span className="input-text"> kategorisinde olsun.</span>
        </div>
        <button onClick={handleSearch} className="filter-button">Ara</button>
        {
          filteredRecipes.length ?
            <>
              <h1 className="recipes-found-title">Bulunan Tarifler</h1>
              <RecipeList recipes={filteredRecipes} />
            </>
            :
            null}
      </div>
    </div>
  )
}

export default WhatToCookComponent