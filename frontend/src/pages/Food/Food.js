import React from 'react'
import FoodList from '../../components/Food/FoodList'
import { AppProvider } from './context'
// import '../../components/Food/food.css'

const Foods = () => {
  return (
    <main>
      <AppProvider>
        <div>
          <FoodList />
        </div>
      </AppProvider>
    </main>
  )
}

export default Foods
