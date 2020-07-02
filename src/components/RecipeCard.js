import React from 'react'
import './styles/RecipeCard.css'
import userIcon from './icons/user-icon.png'

function RecipeCard() {
  return (
    <div className="recipe-card">
      <div className="card-img">
        <img src="http://uppizzadoner.com/wp-content/uploads/2019/04/tost2.jpg" alt="food-img" />
      </div>
      <div className="card-content">
        <h3 className="recipe-title">Karışık Tost</h3>
        <p className="intro-sentence">Kahvaltının vazgeçilmezi</p>
        <span className="cat-min">Kategori</span><span> - </span><span className="cat-min">20 dk</span>
        <div className="recipe-owner">
          <img class="user-icon" src={userIcon} alt="user-icon" /><span>Ad Soyad</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
