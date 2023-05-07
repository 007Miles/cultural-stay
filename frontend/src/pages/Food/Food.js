import React from 'react'
import FoodList from '../../components/Food/FoodList'
import { AppProvider } from './context'

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
