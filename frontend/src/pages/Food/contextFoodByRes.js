import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

// const search = 'http://localhost:4000/api/food?restaurants='
const search = 'https://cultural-stay.onrender.com/api/food?restaurants='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [food, setFood] = useState([])

  const fetchFood = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${search}${searchTerm}`)
      const data = await response.json()
      // const data = response
      const { food } = data
      if (food) {
        const newFood = food.map((item) => {
          const {
            _id,
            image,
            name,
            description,
            sinhala_name,
            ingrediants,
            method,
            restaurants,
          } = item
          return {
            id: _id,
            image,
            name,
            description,
            sinhala_name,
            ingrediants,
            method,
            restaurants,
          }
        })
        setFood(newFood)
      } else {
        setFood([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchFood()
  }, [searchTerm, fetchFood])

  return (
    <AppContext.Provider
      value={{
        loading,
        food,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
