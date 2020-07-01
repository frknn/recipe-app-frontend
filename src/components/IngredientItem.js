import React from 'react'
import closeIcon from './icons/close-icon.png'
import './styles/IngredientItem.css'

function IngredientItem(props) {
  return (
    <div className="ingredient-item">
      <div className="ingredient-item-p"><p>{props.item}</p></div>
      <div onClick={() => props.removeIngredient(props.item)} className="ingredient-item-img"><img src={closeIcon} alt="close-icon" /></div>
    </div>
  )
}

export default IngredientItem
