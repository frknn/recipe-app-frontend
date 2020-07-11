import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import recipeReducer from './reducers/recipeReducer'
import authReducer from './reducers/authReducer'
import errorReducer from './reducers/errorReducer'
import successReducer from './reducers/successReducer'

const reducer = combineReducers({
  recipes: recipeReducer,
  user: authReducer,
  error: errorReducer,
  success: successReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store