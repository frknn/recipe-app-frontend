import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import { useSelector } from 'react-redux'
function Home() {

  const recipes = useSelector(state => state.recipes)

  return (
    <>
      <Header />
      <div style={{ margin: '5rem auto' }}>
        <RecipeList recipes={recipes} />
      </div>
    </>
  )
}

export default Home