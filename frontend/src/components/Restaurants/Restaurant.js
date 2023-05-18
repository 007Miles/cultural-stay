import React from 'react'
import { Link } from 'react-router-dom'
import { Ripple, initTE } from 'tw-elements'
import '../../components/Food/food.css'

const Restaurant = ({ image, name, id, description, city }) => {
  initTE({ Ripple })
  return (
    <div class="w-[300px] h-[400px] mb-[40px] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:cursor-pointer hover:scale-110 hover:shadow-[0px_0px_10px_5px_#0092FB]">
      <div
        class="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          class="rounded-t-lg h-[200px] w-[300px]"
          src={image[0]}
          alt={name}
        />
        <a href="#!">
          <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div class="p-6">
        <h5 class="mb-2 h-[40px] text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name} - {city}
        </h5>
        <p class="mt-4 mb-0 h-[40px] text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>
      <Link to={`/restaurants/${id}`}>
        <button
          type="button"
          class="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          View Details
        </button>
      </Link>
    </div>
  )
}

export default Restaurant
