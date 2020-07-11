import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import closeIcon from './icons/close-icon.png'
import upArrowIcon from './icons/up-arrow.png'
import downArrowIcon from './icons/down-arrow.png'
import './styles/RecipeForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { createRecipe } from '../reducers/recipeReducer'
import { toast } from 'react-toastify'
import { removeError } from '../reducers/errorReducer'
import { removeSuccess } from '../reducers/successReducer'

const RecipeStep = ({ step, handleRemove, index, handleMove }) => {
  return (
    <div className="recipe-step">
      <div className="up-down">
        <div onClick={() => handleMove('up', index)} className="btn-up"><img src={upArrowIcon} alt="up-arrow" /></div>
        <div onClick={() => handleMove('down', index)} className="btn-down"><img src={downArrowIcon} alt="down-arrow" /></div>
      </div>
      <div className="step-div">{step}</div>
      <div onClick={() => handleRemove(index)} className="recipe-step-img-span">
        <img src={closeIcon} alt="close-icon" />
      </div>
    </div>
  )
}

function RecipeForm() {

  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector(state => state.error)
  const success = useSelector(state => state.success)

  useEffect(() => {
    if (error.error) {
      toast.error(error.error)
      dispatch(removeError())
    } else if (success.success) {
      toast.success(success.success)
      dispatch(removeSuccess())
      history.push('/')
    }
  }, [error.error, success.success, history, dispatch])

  let categories = [
    'kahvaltılık', 'atıştırmalık', 'aperatif', 'meze', 'başlangıç', 'ara sıcak', 'ana yemek', 'tatlı', 'ekmek arası', 'soğuk içecek', 'sıcak içecek'
  ]

  const [currentStep, setCurrentStep] = useState('')
  const [recipeSteps, setRecipeSteps] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [ingredients, setIngredients] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(title && description && amount && prepTime && cookTime && ingredients.split('\n').map(i => i.trim()).filter(i => i).length && recipeSteps.length)) {
      toast.error('Lütfen tüm alanları doldurun!')
    } else {
      const recipeObj = {
        title,
        description,
        amount,
        category,
        prepTime,
        cookTime,
        ingredients: ingredients.split('\n').map(i => i.trim()).filter(i => i),
        recipeSteps
      }
      dispatch(createRecipe(recipeObj))
    }
  }

  const addStep = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (currentStep) {
        setRecipeSteps(recipeSteps.concat(currentStep))
        setCurrentStep('')
      }
    }
  }

  const removeStep = (index) => {
    setRecipeSteps(recipeSteps.filter((recipe, idx) => idx !== index))
  }

  const moveStep = (direction, index) => {
    let tempArr = [...recipeSteps]
    let tempVal = tempArr[index]

    if (direction === 'up' && index !== 0) {
      tempArr[index] = tempArr[index - 1]
      tempArr[index - 1] = tempVal
      setRecipeSteps(tempArr)
    }
    else if (direction === 'down' && index !== recipeSteps.length - 1) {
      tempArr[index] = tempArr[index + 1]
      tempArr[index + 1] = tempVal
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
              <input value={prepTime} onChange={(e) => setPrepTime(e.target.value)} className="number-input" type="number" name="prepTimeName" id="prepTimeId" />
              <p>dakikada hazırlanır</p>
            </div>
            <div>
              <input value={cookTime} onChange={(e) => setCookTime(e.target.value)} className="number-input" type="number" name="cookTimeName" id="cookTimeId" />
              <p>dakikada pişer</p>
            </div>
          </div>
          <div className="category-input-div">
            <span className="input-text"> Bu tarif bir</span>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-input" name="category" id="categoryId">
              {
                categories.map(category =>
                  <option key={category} value={category}>{category}</option>
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
            <input onKeyPress={addStep} placeholder="Tarif adımınızı yazıp enter'a basın..." className="recipe-steps-textarea" value={currentStep} onChange={(e) => setCurrentStep(e.target.value)} name="recipeStep" id="recipeStepId" />
            <div className="recipe-steps-list">
              {
                recipeSteps.map((step, index) =>
                  <RecipeStep handleMove={moveStep} handleRemove={removeStep} key={index} index={index} step={step} />
                )
              }
            </div>

          </div>
          <button type="submit" className="recipe-post-button">Onaya Gönder!</button>
        </form>
      </div>
      {prepTime}
    </div>
  )

}

export default RecipeForm