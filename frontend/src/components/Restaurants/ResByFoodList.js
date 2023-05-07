import React from 'react'
import Restaurant from './Restaurant'
import Loading from '../Food/Loading'
import { useGlobalContext } from '../../pages/Restaurants/contextResByFood'
import '../../components/Food/food.css'

const ResByFoodList = () => {
  const { restaurant, loading } = useGlobalContext()

  console.log(restaurant)

  if (loading) {
    return <Loading />
  }
  if (restaurant.length < 1) {
    return <h2 className="section-title">No Restaurants Available</h2>
  }

  const listItems = restaurant.map((item) => (
    <Restaurant key={item.id} {...item} />
  ))

  return (
    <div>
      <div className="title">
        <h2>Resaturants to look for</h2>
        <div className="underline"></div>
      </div>
      <div className="main_content">{listItems}</div>
    </div>
  )
}

export default ResByFoodList