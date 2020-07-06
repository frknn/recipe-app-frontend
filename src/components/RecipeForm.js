import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import closeIcon from './icons/close-icon.png'
import './styles/RecipeForm.css'

const RecipeStep = ({ step, handleRemove, index, handleMove }) => {
  return (
    <div className="recipe-step">
      <div className="up-down">
        <button onClick={() => handleMove('up', index)} className="btn-up">Yukarı</button>
        <button onClick={() => handleMove('down', index)} className="btn-down">Aşağı</button>
      </div>
      <div className="step-div">{step}</div>
      <div onClick={() => handleRemove(index)} className="recipe-step-img-span">
        <img src={closeIcon} alt="close-icon" />
      </div>
    </div>
  )
}


function RecipeForm() {

  let categories = [
    {
      key: 'kahvaltilik',
      value: 'kahvaltılıktır'
    },
    {
      key: 'atistirmalik',
      value: 'atıştırmalıktır'
    },
    {
      key: 'baslangic',
      value: 'başlangıçtır'
    }, {
      key: 'araSicak',
      value: 'ara sıcaktır'
    },
    {
      key: 'aksamYemegi',
      value: 'akşam yemeğidir'
    },
    {
      key: 'ekmekArasi',
      value: 'ekmek arasıdır'
    },
    {
      key: 'sogukIcecek',
      value: 'soğuk içecektir'
    },
    {
      key: 'sicakIcecek',
      value: 'sıcak içecektir'
    },
    {
      key: 'tatli',
      value: 'tatlıdır'
    },
  ]


  const [currentStep, setCurrentStep] = useState('')
  const [recipeSteps, setRecipeSteps] = useState(['asdas', 'asfaskdhflksdglahsdglaksdfklasdfaksdhflkasdgfklahsgdahsdgaljsdgfalksdgfaklsgaksdfasdf', 'dasjhaskdghaskjhjaksdhgjaklsdhgjaksdhgkalsdhgklasdhgkljasdhgkljashgklasdhglkjasdhgjklasdhgalskdghaslkdghaksdghaslkdghaskdghaksldghalksdghlaskdhgasdghaskldghasdgasjkldgasdg', 'a'])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [category, setCategory] = useState(categories[0].key)
  const [ingredients, setIngredients] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(title && description && amount && prepTime && cookTime && ingredients.split('\n').map(i => i.trim()).filter(i => i).length)) {
      alert('Lütfen tüm alanları doldurunuz!')
    } else {
      alert('Form gönderilmeye hazır!')
    }
  }

  const addStep = (e) => {
    if (e.key === 'Enter') {
      setRecipeSteps(recipeSteps.concat(e.target.value))
      setCurrentStep('')
    }
  }

  const removeStep = (index) => {
    setRecipeSteps(recipeSteps.filter((recipe, idx) => idx !== index))
  }

  const moveStep = (direction, index) => {
    let tempVal;
    let tempArr
    if(direction === 'up' && index !== 0){
      tempArr = [...recipeSteps]
      tempVal = tempArr[index]
      tempArr[index] = tempArr[index-1]
      tempArr[index-1] = tempVal
      setRecipeSteps(tempArr)
    }
    if(direction === 'down' && index !== recipeSteps.length - 1){
      tempArr=[...recipeSteps]
      tempVal=tempArr[index]
      tempArr[index] = tempArr[index+1]
      tempArr[index+1] = tempVal
      setRecipeSteps(tempArr)
    }

  }

  return (
    <div className="recipe-form-wrapper">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="close">
          <img style={{ width: "2rem", height: "2rem" }} src={closeIcon} alt="close-icon" /><span className="close-label">KAPAT</span>
        </div>
      </Link>
      <div className="recipe-form">
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="recipe-title-post" type="text" name="recipeTitle" id="recipeTitleId" placeholder="Tarifinizin başlığını girin..." autoFocus />
          <input value={description} onChange={(e) => setDescription(e.target.value)} className="recipe-intro-sentence" type="text" name="recipeIntroSentence" id="recipeIntroSentenceId" placeholder="Tanıtım cümlenizi girin..." />
          <div className="amount-prep-cook">
            <div>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} className="number-input" type="number" name="amount" id="amountId" />
              <p>kişilik</p>
            </div>
            <div>
              <input value={prepTime} onChange={(e) => setPrepTime(e.target.value)} className="number-input" type="number" name="amount" id="amountId" />
              <p>dakikada hazırlanır</p>
            </div>
            <div>
              <input value={cookTime} onChange={(e) => setCookTime(e.target.value)} className="number-input" type="number" name="amount" id="amountId" />
              <p>dakikada pişer</p>
            </div>
          </div>
          <div className="category-input-div">
            <span className="input-text"> Bu tarif bir</span>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-input" name="category" id="categoryId">
              {
                categories.map(category =>
                  <option key={category.key} value={category.key}>{category.value}</option>
                )
              }
            </select>
          </div>
          <div className="ingredients">
            <p>Malzemeler</p>
            <textarea value={ingredients} onChange={(e) => { setIngredients(e.target.value) }} className="ingredients-textarea" name="ingredients" id="ingrediensId" cols="60" rows="10" placeholder="Malzemeleri satır satır, miktarıyla birlikte giriniz. Örn:
        2 adet domates
        250 gr kıyma
        "></textarea>
          </div>
          <div className="recipe-steps">
            <p className="recipe-steps-title">Tarif Adımları</p>
            <input onKeyDown={addStep} placeholder="Tarif adımınızı yazıp enter'a basın..." className="recipe-steps-textarea" value={currentStep} onChange={(e) => setCurrentStep(e.target.value)} name="recipeStep" id="recipeStepId" />
            <div className="recipe-steps-list">
              {
                recipeSteps.map((step, index) =>
                  <RecipeStep handleMove={moveStep} handleRemove={removeStep} key={index} index={index} step={step} />
                )
              }
            </div>

          </div>
          <button className="btn-add" onClick={() => console.log(ingredients.split('\n').map(i => i.trim()).filter(i => i))} type="submit" className="recipe-post-button">Onaya Gönder!</button>
        </form>
      </div>
      {title} | {description} | {amount} | {prepTime} | {cookTime} | {category} | {ingredients} | {recipeSteps}
    </div>
  )
}

export default RecipeForm