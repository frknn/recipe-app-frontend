import React, { useState, useEffect } from 'react'
import './styles/RecipePage.css'
import { useParams } from 'react-router-dom'
import recipeService from '../services/recipeService'
import closeIcon from './icons/close-icon.png'
import { Link } from 'react-router-dom'

function RecipePage() {

  let { id } = useParams()

  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  let url = "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"

  useEffect(() => {
    recipeService.getRecipeById(id).then(res => {
      if (res.success) {
        setRecipe(res.data)
      } else {
        setRecipe(null)
      }
      setLoading(false)
    }).catch(err => alert(err))
  }, [id])

  return (loading ? null : recipe ?
    <div className="recipe-page-wrapper">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="close">
          <img style={{ width: "2rem", height: "2rem" }} src={closeIcon} alt="close-icon" /><span className="close-label">KAPAT</span>
        </div>
      </Link>
      <div className="recipe-page-img-ingredients-wrapper">
        <div style={{ backgroundImage: `url(${url})` }} className="recipe-page-img">
          <div className="under-image-info">

            <div>
              <h1>{recipe.title}</h1>
              <p>{recipe.description}</p>
              <span>{recipe.category}</span>
              <span> - </span>
              <span>{recipe.prepTime} dk hazırlama</span>
              <span> - </span>
              <span>{recipe.cookTime} dk pişirme</span>
              <span> - </span>
              <span>{recipe.amount} Kişilik</span> </div>
          </div>
        </div>
        <div className="recipe-page-ingredients">
          <h2>Malzemeler</h2>
          <ul>
            {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </div>
      </div>

      <div className="recipe-page-content">
        <h2>Tarif Adımları</h2>
        <ul>
          {
            recipe.recipeSteps.map((rs, idx) => <li key={idx}>{rs}</li>)
          }

        </ul>
      </div>

    </div> : <h1>Tarif bulunamadı!</h1>)


}

export default RecipePage
