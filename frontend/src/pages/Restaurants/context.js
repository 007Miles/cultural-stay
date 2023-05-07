import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'

const url = 'http://localhost:4000/api/restaurants'
const search = 'http://localhost:4000/api/restaurants?name='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${search}${searchTerm}`)
      const data = await response.json()
      // const data = response
      const { restaurants } = data
      if (restaurants) {
        const newRestaurants = restaurants.map((item) => {
          const {
            _id,
            image,
            name,
            description,
            city,
            address,
            phone,
            website,
            area,
            food,
            rating,
            rate_count,
          } = item
          return {
            id: _id,
            image,
            name,
            description,
            city,
            address,
            phone,
            website,
            area,
            food,
            rating,
            rate_count,
          }
        })
        setRestaurants(newRestaurants)
      } else {
        setRestaurants([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchRestaurants()
  }, [searchTerm, fetchRestaurants])

  return (
    <AppContext.Provider
      value={{
        loading,
        restaurants,
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
