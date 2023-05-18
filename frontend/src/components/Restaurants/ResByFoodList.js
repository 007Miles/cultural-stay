import React, { useCallback, useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import Loading from '../Food/Loading'
import { useGlobalContext } from '../../pages/Restaurants/contextResByFood'
import '../../components/Food/food.css'
import { useLocation } from 'react-router-dom'

const ResByFoodList = () => {
  const { setSearchTerm, restaurant, loading } = useGlobalContext()
  const location = useLocation()
  let searchValue = React.useRef('')

  const name = location.state.food.name

  searchValue = name

  const searchRes = () => {
    setSearchTerm(searchValue)
  }

  if (loading) {
    return <Loading />
  }
  if (restaurant.length < 1) {
    return <h2 className="section-title">No Restaurant Provides {name}</h2>
  }

  const listItems = restaurant.map((item) => (
    <Restaurant key={item.id} {...item} />
  ))

  return (
    <div onLoad={searchRes}>
      <div className="title">
        <h2>Resaturants to look for {name}</h2>
        <div className="underline"></div>
      </div>
      <div className="main_content">{listItems}</div>
    </div>
  )
}

export default ResByFoodList
