import React from 'react'
import { useGlobalContext } from '../../pages/Food/context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchFood = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section class="flex justify-center items-center">
      <form class="w-[500px]" onSubmit={handleSubmit}>
        <div class="flex">
          <label
            for="name"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Food
          </label>
          <div class="relative w-full">
            <input
              type="search"
              id="name"
              ref={searchValue}
              //   onChange={searchFood}
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-[#0092FB] focus:border-[#0092FB] dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#0092FB]"
              placeholder="Search Sri Lankan Food..."
              required
            ></input>
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#0092FB] rounded-r-lg border border-[#0092FB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-[#0092FB] dark:hover:bg-green-700 dark:focus:ring-[#0092FB]"
              onClick={searchFood}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
