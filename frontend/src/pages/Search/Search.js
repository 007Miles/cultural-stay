import React, { Fragment, useState } from 'react'
import Video from '../../Assets/v1.mp4'
import AccommodationHome from '../Accommodation/AccommodationHome'
import PlacesList from '../../components/Attractions/attractions'
import { FaArrowRight } from 'react-icons/fa'
import Rating from '@mui/material/Rating'

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Best Rating', href: '#', current: false, value: 'bestRating' },
  {
    name: 'Price: Low to High',
    href: '#',
    current: false,
    value: 'priceLowToHigh',
  },
  {
    name: 'Price: High to Low',
    href: '#',
    current: false,
    value: 'priceHighToLow',
  },
]
const subCategories = [
  { name: 'Accomadations', href: '#' },
  { name: 'Restuarants', href: '#' },
  { name: 'Tourist Sites', href: '#' },
]
const filters = [
  {
    id: 'Rating',
    name: 'Rating',
    options: [
      { value: 5, label: '5 star', checked: false },
      { value: 4, label: '4 star', checked: false },
      { value: 3, label: '3 star', checked: false },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Search() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [searchType, setSearchType] = useState([])
  const [sortOption, setSortOption] = useState('bestRating')
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([])

  const culturalStayHotels = [
    {
      name: 'Punchi Doowa',
      location: 'Kamburugamuwa, Southern Province',
      host: 'Kasun',
      dates: 'April 5-10',
      rating: 4.3,
      price: 'Rs.2500.00/night',
      type: 'Accomadations',
      image:
        'https://res.cloudinary.com/itp03/image/upload/v1683406148/afAccommodation/uwleeyo8tbaaohb0r6x9.jpg',
    },
    {
      name: 'Full house - Kabalana Ahangama',
      location: 'Ahangama, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      rating: 4.5,
      price: 'Rs.2500.00/night',
      type: 'Accomadations',
      image:
        'https://res.cloudinary.com/itp03/image/upload/v1683444012/afAccommodation/aq5uexkouddy6sfbklxm.jpg',
    },
    {
      name: 'Sigiriya Rock Fortress',
      location: 'Sigiriya, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      rating: 4.8,
      price: 'Rs.2500.00/night',
      type: 'Tourist Sites',
      image:
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    },
    {
      name: 'Milky Way',
      location: 'Negombo, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      rating: 3.6,
      price: 'Rs.2500.00/night',
      type: 'Restuarants',
      image:
        'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683387266/afRestaurant/pcgwmxri1lm0fvjesiv5.jpg',
    },
    {
      name: 'Green Restaurant',
      location: 'Colombo 03, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      rating: 4.7,
      price: 'Rs.2500.00/night',
      type: 'Restuarants',
      image:
        'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683383718/afRestaurant/ucvfk6bmokrmg4lbr9uf.jpg',
    },
    {
      name: 'Bastille Restaurant',
      location: 'Bastille Restaurant, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      rating: 4.5,
      price: 'Rs.2500.00/night',
      type: 'Restuarants',
      image:
        'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683457661/afRestaurant/csj4iakfiwvll5rdfnl4.jpg',
    },

    // Add more hotel objects here
  ]

  //search bar
  const [searchTerm, setSearchTerm] = useState('')

  // Create a function to handle the search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  // Function to handle dropdown option change
  const handleSortOptionChange = (selectedOption) => {
    setSortOption(selectedOption)
  }

  const handleCategoryClick = (categoryName) => {
    if (searchType.includes(categoryName)) {
      // Category already exists in the array, so remove it
      setSearchType(searchType.filter((category) => category !== categoryName))
    } else {
      // Category doesn't exist in the array, so add it
      setSearchType([...searchType, categoryName])
    }
  }

  const handleCheckboxChange = (checkboxValue) => {
    alert(checkboxValue)
    if (selectedCheckboxes.includes(checkboxValue)) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((value) => value !== checkboxValue)
      )
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue])
    }
  }

  return (
    <>
      <div className="">
        <div className="relative inset-0 overflow-hidden w-screen">
          <video
            className="w-screen object-cover"
            style={{ height: '150px' }}
            autoPlay
            muted
            loop
            src={Video}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white">Explore Sri Lanka</h1>
            <p className="text-lg font-medium text-white mt-2">
              Discover amazing places to visit and create unforgettable memories
            </p>
          </div>
        </div>

        <div class="box pt-6 ml-20 items-center justify-center">
          <div class="box-wrapper items-center justify-center">
            <div class=" bg-white rounded flex items-center justify-center w-11/12 p-3 shadow-sm border border-gray-200">
              <svg
                class=" w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                name=""
                placeholder="search for places"
                x-model="q"
                class="w-11/12 pl-4 text-sm  focus:outline-none bg-transparent ml-4"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        {/* <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a question"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div> */}
      </div>
      <div>
        <div className="bg-white">
          <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 lg:hidden"
                onClose={setMobileFiltersOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                      <div className="flex items-center justify-between px-4">
                        <h2 className="text-lg font-medium text-gray-900">
                          Filters
                        </h2>
                        <button
                          type="button"
                          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Filters */}
                      <form className="mt-4 border-t border-gray-200">
                        <h3 className="sr-only">Categories</h3>
                        <ul
                          role="list"
                          className="px-2 py-3 font-medium text-gray-900"
                        >
                          {subCategories.map((category) => (
                            <li key={category.name}>
                              <a
                                href={category.href}
                                className="block px-2 py-3"
                              >
                                {category.name}
                              </a>
                            </li>
                          ))}
                        </ul>

                        {filters.map((section) => (
                          <Disclosure
                            as="div"
                            key={section.id}
                            className="border-t border-gray-200 px-4 py-6"
                          >
                            {({ open }) => (
                              <>
                                <h3 className="-mx-2 -my-3 flow-root">
                                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">
                                      {section.name}
                                    </span>
                                    <span className="ml-6 flex items-center">
                                      {open ? (
                                        <MinusIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <PlusIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                  <div className="space-y-6">
                                    {section.options.map(
                                      (option, optionIdx) => (
                                        <div
                                          key={option.value}
                                          className="flex items-center"
                                          onClick={() =>
                                            handleCheckboxChange(option.value)
                                          }
                                        >
                                          <input
                                            // id={`filter-mobile-${section.id}-${optionIdx}`}
                                            // name={`${section.id}[]`}
                                            // defaultValue={option.value}
                                            type="checkbox"
                                            // defaultChecked={option.checked}
                                            checked={selectedCheckboxes.includes(
                                              option.value
                                            )}
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                          <label
                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                          >
                                            {option.label}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  Results
                </h1>

                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-lg font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                              {({ active }) => (
                                <span
                                  onClick={() =>
                                    handleSortOptionChange(option.value)
                                  }
                                  className={classNames(
                                    option.current
                                      ? 'font-medium text-gray-900'
                                      : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  {option.name}
                                </span>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="button"
                    className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                  >
                    <span className="sr-only">View grid</span>
                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <form className="hidden lg:block">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="space-y-4 border-b border-gray-200 pb-6 text-lg font-medium text-gray-900 "
                    >
                      {subCategories.map((category) => (
                        <li
                          key={category.name}
                          className="shadow-md p-4 cursor-pointer "
                          style={
                            searchType.includes(category.name)
                              ? {
                                  border: '2px solid green',
                                  boxShadow: '0 0 5px green',
                                }
                              : {}
                          }
                          onClick={() => handleCategoryClick(category.name)}
                        >
                          {category.name}
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-lg text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-lg text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>

                  {/* Product grid */}
                  <div className="lg:col-span-3 ">
                    {/* Your content */}
                    {/* <AccommodationHome /> */}
                    {/* <PlacesList /> */}
                    <div className="flex flex-wrap justify-center">
                      {culturalStayHotels
                        .filter((hotel) => {
                          const isMatchingType =
                            searchType.length === 0 ||
                            searchType.includes(hotel.type)
                          const isMatchingTerm =
                            searchTerm === '' ||
                            hotel.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          const isMatchingRating =
                            selectedCheckboxes.length === 0 ||
                            selectedCheckboxes.includes(
                              Math.floor(hotel.rating)
                            )
                          return (
                            isMatchingType && isMatchingTerm && isMatchingRating
                          )
                        })
                        .sort((a, b) => {
                          if (sortOption === 'bestRating') {
                            return b.rating - a.rating // Sort by best rating
                          }
                          return 0 // Default case
                        })
                        .map((hotel, index) => (
                          <div
                            key={index}
                            className="max-w-sm md:max-w-sm rounded-xl overflow-visible shadow-lg bg-white h-[350px] w-[350px] mx-2 my-2 md:w-1/4 "
                          >
                            <img
                              className="w-full h-32 md:h-48 object-cover"
                              src={hotel.image}
                              alt="Hotel"
                            />
                            <div className="px-6 py-1">
                              <div className="font-bold text-md text-left">
                                {hotel.name}
                              </div>
                              <div className="text-sm text-left">
                                {hotel.location}
                              </div>
                              <p className="text-gray-700 text-sm text-left mt-1">
                                <span className="inline-block flex">
                                  <Rating defaultValue={1} max={1} />
                                  <span className="ml-2 flex-auto font-semibold">
                                    {hotel.rating}
                                  </span>
                                </span>
                              </p>
                            </div>
                            <div className="px-6 pb-2 ">
                              <span className="inline-block flex justify-end ">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded-full mb-1">
                                  <FaArrowRight />
                                </button>
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
