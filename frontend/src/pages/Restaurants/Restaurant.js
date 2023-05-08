import React from 'react'
import RestaurantList from '../../components/Restaurants/RestaurantList'
import { AppProvider } from './context'

const Restaurants = () => {
  return (
    <main>
      <AppProvider>
        <div>
          <RestaurantList />
        </div>
      </AppProvider>
    </main>
  )
}

export default Restaurants
