import React from 'react'
import { AppProvider } from './contextResByFood'
import ResByFoodList from '../../components/Restaurants/ResByFoodList'

const RestaurantsByFood = () => {
  return (
    <main>
      <AppProvider>
        <div>
          <ResByFoodList />
        </div>
      </AppProvider>
    </main>
  )
}

export default RestaurantsByFood
