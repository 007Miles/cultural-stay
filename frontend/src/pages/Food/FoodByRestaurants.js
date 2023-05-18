import React from 'react'
import { AppProvider } from './contextFoodByRes'
import FoodByResList from '../../components/Food/FoodByResList'

const FoodByRestaurants = () => {
  return (
    <main>
      <AppProvider>
        <div>
          <FoodByResList />
        </div>
      </AppProvider>
    </main>
  )
}

export default FoodByRestaurants
