import recipeService from '../services/recipeService'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_RECIPES':
      return action.data
    case 'CREATE_RECIPE':
      if(action.data) {
        return [...state, action.data]
      } else {
        return [...state]
      }
    case 'GET_RECIPE_BY_TITLE':
      return action.data
    default:
      return state
  }
}

export const getAllRecipes = () => {
  return async (dispatch) => {
    const res = await recipeService.getAllRecipes()
    dispatch({
      type: 'GET_ALL_RECIPES',
      data: res.data
    })
  }
}

export const createRecipe = (recipe) => {
  return async (dispatch) => {
    const res = await recipeService.createRecipe(recipe)
    if (res.success) {
      dispatch({
        type: 'CREATE_RECIPE',
        data: res.data,
        error: null,
        success: 'Tarif Paylaşıldı!'
      })
    } else {
      dispatch({
        type: 'CREATE_RECIPE',
        data: null,
        error: res.error
      })
    }

  }
}

export default reducer
