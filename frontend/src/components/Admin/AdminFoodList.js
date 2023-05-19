import React from 'react'
import AdminFood from './AdminFood'
import Loading from '../Food/Loading'
import { useGlobalContext } from '../../pages/Food/context'
import { Link } from 'react-router-dom'

const AdminFoodList = () => {
  const { food, loading } = useGlobalContext()

  console.log(food)

  if (loading) {
    return <Loading />
  }
  if (food.length < 1) {
    return <h2 className="section-title">No Food Available</h2>
  }

  const listItems = food.map((item) => <AdminFood key={item.id} {...item} />)

  return (
    <div>
      <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Admin, Welcome to Cultural Stay
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          You can manage any Food Item & You can add a new Food Item by clicking
          the button below.
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Link
            to={`/admin/add-food`}
            class="w-[170px] sm:w-auto bg-[#0092FB] hover:bg-blue-700 hover:no-underline focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="text-left">
              <div class="-mt-1 font-sans text-sm font-semibold">
                Add New Food Item
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="title">
        <h2>Sri Lankan Food</h2>
        <div className="underline"></div>
      </div>
      <div className="main_content">{listItems}</div>
    </div>
  )
}

export default AdminFoodList
