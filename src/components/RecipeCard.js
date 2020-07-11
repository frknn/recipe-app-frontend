import React from 'react'
import './styles/RecipeCard.css'
import userIcon from './icons/user-icon.png'
import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {

  return (
    <div className="recipe-card">
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/tarifler/${recipe._id}`} >
        <div className="card-img">
          <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" alt="food-img" />
        </div>
        <div className="card-content">
          <h3 className="recipe-title">{recipe.title}</h3>
          <p className="intro-sentence">{recipe.description}</p>
          <span className="cat-min">{recipe.category}</span><span> - </span><span className="cat-min">{recipe.prepTime} dk hazırlama</span><span> - </span><span className="cat-min">{recipe.cookTime} dk pişirme</span>
          <div className="recipe-owner">
            <img className="user-icon" src={userIcon} alt="user-icon" /><span>Ad Soyad</span>
          </div>
        </div>
      </Link >

    </div>

  )
}

export default RecipeCard
