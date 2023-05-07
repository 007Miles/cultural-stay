import React from 'react'
// import FoodList from '../../components/Food/FoodList'
import { AppProvider } from './context'

const Restaurants = () => {
  return (
    <main>
      <AppProvider>
        <div>
          {/* <FoodList /> */}
          Restaurant page
        </div>
      </AppProvider>
    </main>
  )
}

export default Restaurants
