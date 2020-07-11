import axios from 'axios'

let url = 'http://localhost:5000/api/v1/recipes'

const getAllRecipes = async () => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    return error.response.data
  }
}

const createRecipe = async (recipe) => {

  const token = JSON.parse(window.localStorage.getItem('authToken'))

  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  }

  try {
    const res = await axios.post(url, recipe, config)
    return res.data
  } catch (error) {
    return error.response.data
  }
}

const getFilteredRecipes = async (filterString) => {
  try {
    const res = await axios.get(`${url}${filterString}`)
    return res.data
  } catch (error) {
    return error.response.data
  }
}

const getRecipeById = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`)
    return res.data
  } catch (error) {
    return error.response.data
  }
}

export default {
  getAllRecipes,
  createRecipe,
  getFilteredRecipes,
  getRecipeById
}