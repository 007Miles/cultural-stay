import React, { useCallback, useEffect, useState } from 'react'
import Food from './Food'
import Loading from './Loading'
import { useGlobalContext } from '../../pages/Food/contextFoodByRes.js'
import './food.css'
import { useLocation } from 'react-router-dom'

function FoodByResList() {
  const { setSearchTerm, food, loading } = useGlobalContext()
  const location = useLocation()
  let searchValue = React.useRef('')

  const name = location.state.name
  console.log(location)

  searchValue = name

  const searchFood = () => {
    setSearchTerm(searchValue)
  }

  if (loading) {
    return <Loading />
  }
  if (food.length < 1) {
    return <h2 className="section-title">No Food Items in {name}</h2>
  }

  const listItems = food.map((item) => <Food key={item.id} {...item} />)

  return (
    <div onLoad={searchFood}>
      <div className="title">
        <h2>Food Items in {name}</h2>
        <div className="underline"></div>
      </div>
      <div className="main_content">{listItems}</div>
    </div>
  )
}

export default FoodByResList
