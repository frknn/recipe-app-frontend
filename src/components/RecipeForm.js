import React, { useState } from 'react'
import './styles/RecipeForm.css'

function RecipeForm() {

  const [recipeSteps, setRecipeSteps] = useState(1)

  let items = []

  for (let i = 0; i < recipeSteps; i++) {
    items.push(<>
      <textarea className="recipe-steps-textarea" name="recipeStep" id="recipeStepId" cols="60" rows="5" placeholder="Tarifinizi adım adım anlatın, gerektikçe adım ekleyin." />
      <div className="add-remove-button-div">
        <button onClick={() => setRecipeSteps(recipeSteps + 1)} className="add">Ekle</button>
        {i !== 0 ? <button onClick={() => setRecipeSteps(recipeSteps - 1)} className="remove">Kaldır</button> : null}
      </div>
    </>)
  }

  return (
    <div className="recipe-form-wrapper">
      <h1>Tarifini Paylaş!</h1>
      <div className="recipe-form">
        <input className="recipe-title-post" type="text" name="recipeTitle" id="recipeTitleId" placeholder="Tarifinizin başlığını girin..." autoFocus />
        <input className="recipe-intro-sentence" type="text" name="recipeIntroSentence" id="recipeIntroSentenceId" placeholder="Tanıtım cümlenizi girin..." />
        <div className="amount-prep-cook">
          <div>
            <input className="number-input" type="number" name="amount" id="amountId" />
            <p>kişilik</p>
          </div>
          <div>
            <input className="number-input" type="number" name="amount" id="amountId" />
            <p>dakikada hazırlanır</p>
          </div>
          <div>
            <input className="number-input" type="number" name="amount" id="amountId" />
            <p>dakikada pişer</p>
          </div>
        </div>
        <div className="category-input-div">
          <span className="input-text"> Bu tarif bir</span>
          <select className="category-input" name="category" id="categoryId">
            <option value="kahvaltılık">kahvaltılıktır</option>
            <option value="atıştırmalık">atıştırmalıktır</option>
            <option value="başlangıç">başlangıçtır</option>
            <option value="araSıcak">ara sıcaktır</option>
            <option value="aksamYemegi">akşam yemeğidir</option>
            <option value="ekmekArasi">ekmek arasıdır</option>
            <option value="sogukIcecek">soğuk içecektir</option>
            <option value="sicakIcecek">sıcak içecektir</option>
            <option value="tatli">Tatlı</option>
          </select>
        </div>
        <div className="ingredients">
          <p>Malzemeler</p>
          <textarea className="ingredients-textarea" name="ingredients" id="ingrediensId" cols="60" rows="10" placeholder="Malzemeleri satır satır, miktarıyla birlikte giriniz. Örn:
        2 adet domates
        3 adet yumurta"></textarea>
        </div>
        <div className="recipe-steps">
          <p>Tarif Adımları</p>
          <div className="recipe-steps-list">
            {
              items
            }
          </div>
        </div>
        <button class="recipe-post-button">Onaya Gönder!</button>
      </div>

    </div>
  )
}

export default RecipeForm