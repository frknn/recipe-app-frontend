import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initUser } from './reducers/authReducer';
import { getAllRecipes } from './reducers/recipeReducer';
import { Provider } from 'react-redux'
import store from './store'

store.dispatch(initUser())
store.dispatch(getAllRecipes())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

