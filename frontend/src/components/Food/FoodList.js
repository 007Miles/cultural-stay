import React from 'react'
import Food from './Food'
import Loading from './Loading'
import { useGlobalContext } from '../../pages/Food/context'
import './food.css'

const FoodList = () => {
  const { food, loading } = useGlobalContext()

  console.log(food)

  if (loading) {
    return <Loading />
  }
  if (food.length < 1) {
    return <h2 className="section-title">No Food Available</h2>
  }

  const listItems = food.map((item) => <Food key={item.id} {...item} />)

  return (
    <div>
      <div className="title">
        <h2>Sri Lankan Food</h2>
        <div className="underline"></div>
      </div>
      <div className="main_content">{listItems}</div>
    </div>
  )
}

export default FoodList
