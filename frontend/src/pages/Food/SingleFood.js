import React from 'react'
import Loading from '../../components/Food/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'http://localhost:4000/api/food/'
const resUrl = 'http://localhost:4000/api/restaurants?food='

const SingleFood = () => {
  // const { setSearchTerm } = useGlobalContext()
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [food, setFood] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getFood() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data.food)
        // const data = response
        if (data.food) {
          const {
            name: name,
            sinhala_name: sinhala_name,
            description: description,
            image: image,
            ingrediants: ingrediants,
            method: method,
          } = data.food

          const newFood = {
            name,
            sinhala_name,
            description,
            image,
            ingrediants,
            method,
          }
          setFood(newFood)
        } else {
          setFood(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getFood()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!food) {
    return <h2 className="section-title">No food item to display</h2>
  }
  const { name, sinhala_name, description, image, ingrediants, method } = food

  const inputProps = {
    min: 1,
    max: 5,
  }

  return (
    <div>
      <div class="md:flex items-center justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <img
            class="mt-[30px] w-full h-full block mx-auto"
            alt={name}
            src={image}
          />
          <div class="border-b border-gray-200 pb-6 mt-[50px]">
            <h1 class="mt-[30px] lg:text-3xl text-3xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {name} ({sinhala_name})
            </h1>
            <div class="mt-[20px] text-gray-500 dark:text-white">
              <p>{description}</p>
            </div>
          </div>
          <div class="py-4 border-b border-gray-200 flex items-center justify-between">
            <b class=" text-base leading-4 text-gray-800 dark:text-gray-300">
              <u class="ml-[75px]">Ingredients</u>
            </b>
            <b class=" text-base leading-4 text-gray-800 dark:text-gray-300">
              <u class="mr-[130px]">Method</u>
            </b>
          </div>
          <div class="py-4 border-b border-gray-200 flex justify-between">
            <div class="w-1/2 mr-[10px]">
              <ul style={{ textAlign: 'left', listStyleType: 'disc' }}>
                {ingrediants.map((ingrediant, index) => (
                  <li key={index}>{ingrediant}</li>
                ))}
              </ul>
            </div>
            <div class="w-1/2 ml-[10px]">
              <ul style={{ textAlign: 'left', listStyleType: 'disc' }}>
                {method.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link to={`/restaurants/by-food/${name}`} state={{ food }}>
            <button class="dark:bg-white dark:text-gray-900 dark:hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-[#0092FB] w-full py-4 hover:bg-blue-500 focus:outline-none">
              Find Restaurants to taste {name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SingleFood
