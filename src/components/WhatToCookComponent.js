import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/WhatToCookComponent.css'
import IngredientItem from './IngredientItem'
import closeIcon from './icons/close-icon.png'


function WhatToCookComponent(props) {
  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])


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

  return (
    <div className="close-wrapper">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="close">
          <img style={{ width: "2rem", height: "2rem" }} src={closeIcon} alt="close-icon" /><span className="close-label">KAPAT</span>
        </div>
      </Link>
      <input onKeyDown={addIngredient} value={ingredient} onChange={e => setIngredient(e.target.value)} className="recipe-search-input" type="text" placeholder="Malzemelerinizi tek tek girin..." maxLength="30" autoFocus />
      <div className="ingredients-list">
        {
          ingredients.map(i => <IngredientItem key={i} removeIngredient={removeIngredient} item={i} />)
        }
      </div>
      <div className="filter-section">
        <div className="time-input-div">
          <span className="input-text">Hazırlanma süresi </span><input className="time-input" type="number" min="1" /><span className="input-text"> dakikadan kısa olsun.</span>
        </div>
        <div className="time-input-div">
          <span className="input-text">Pişirme süresi </span><input className="time-input" type="number" min="1" /><span className="input-text"> dakikadan kısa olsun.</span>
        </div>
        <div className="category-input-div">
          <select className="category-input" name="category" id="categoryId">
            <option value="kahvaltılık">Kahvaltılık</option>
            <option value="atıştırmalık">Atıştırmalık</option>
            <option value="başlangıç">Başlangıç</option>
            <option value="araSıcak">Ara sıcak</option>
            <option value="aksamYemegi">Akşam yemeği</option>
            <option value="ekmekArasi">Ekmek arası</option>
            <option value="sogukIcecek">Soğuk içecek</option>
            <option value="sicakIcecek">Sıcak içecek</option>
            <option value="tatli">Tatlı</option>
          </select>
          <span className="input-text"> kategorisinde olsun.</span>
        </div>
        <button className="filter-button">Ara</button>
      </div>
    </div>
  )
}

export default WhatToCookComponent