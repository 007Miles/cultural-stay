import React from 'react'
import Loading from '../../components/Food/Loading'
import { useParams, Link } from 'react-router-dom'

// const url = 'http://localhost:4000/api/restaurants/'
const resUrl = 'http://localhost:4000/api/restaurants?food='
// const url = 'https://cultural-stay.onrender.com/api/restaurants/'
const url = 'https://fine-teal-ostrich-tam.cyclic.app/api/restaurants/'

const createMarkup = (text) => {
  return { __html: text }
}

const SingleRestaurant = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [restaurant, setRestaurant] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getRestaurant() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data.restaurant)
        // const data = response
        if (data.restaurant) {
          const {
            name: name,
            description: description,
            image: image,
            city: city,
            address: address,
            phone: phone,
            website: website,
            area: area,
            rating: rating,
            rate_count: rate_count,
            food: food,
          } = data.restaurant

          const newRestaurant = {
            name,
            description,
            image,
            city,
            address,
            phone,
            website,
            area,
            rating,
            rate_count,
            food,
          }
          setRestaurant(newRestaurant)
        } else {
          setRestaurant(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getRestaurant()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!restaurant) {
    return <h2 className="section-title">No Restaurant to display</h2>
  }
  const {
    name,
    description,
    image,
    city,
    address,
    phone,
    website,
    area,
    rating,
    rate_count,
    food,
  } = restaurant

  return (
    <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img class="mt-[80px] w-[400px] h-[250px]" alt={name} src={image[0]} />
        <img class="mt-6 w-[400px] h-[250px]" alt={name} src={image[1]} />
      </div>
      <div class="md:hidden">
        <img class="w-full" alt={name} src={image[0]} />
        <div class="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
          <img
            alt={image[0]}
            class="md:w-48 md:h-48 w-[130px] h-[130px]"
            src={image[1]}
          />
          <img
            alt={image[0]}
            class="md:w-48 md:h-48 w-[130px] h-[130px]"
            src={image[2]}
          />
          <img
            alt={image[0]}
            class="md:w-48 md:h-48 w-[130px] h-[130px]"
            src={image[3]}
          />
          <img
            alt={image[0]}
            class="md:w-48 md:h-48 w-[130px] h-[130px]"
            src={image[0]}
          />
        </div>
      </div>
      <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div class="border-b border-gray-200 pb-6 mt-[100px]">
          <h1 class="mt-[20px] lg:text-3xl text-3xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            {name} - {city}
          </h1>
          <div class="mt-[20px] text-gray-500 dark:text-white">
            <i>"{description}"</i>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
            Address
          </p>
          <div class="flex items-center justify-center">
            <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
              {address}
            </p>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
            Province
          </p>
          <div class="flex items-center justify-center">
            <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
              {area} Province
            </p>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
            Contact Number
          </p>
          <div class="flex items-center justify-center">
            <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
              {phone}
            </p>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
            Website
          </p>
          <div class="flex items-center justify-center">
            <a
              class="text-sm leading-none text-blue-600 dark:text-blue-300"
              href={website}
              target="_blank"
            >
              {website}
            </a>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
            Rating
          </p>
          <div class="flex items-center justify-center">
            <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
              {rating}/5 ({rate_count})
            </p>
          </div>
        </div>
        <Link to={`/food/by-restaurant/${name}`} state={{ name }}>
          <button class="dark:bg-white dark:text-gray-900 dark:hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-[#0092FB] w-full py-4 hover:bg-blue-500 focus:outline-none">
            Find Sri Lankan Food made by {name}
          </button>
        </Link>
      </div>
    </div>
  )
}
export default SingleRestaurant
