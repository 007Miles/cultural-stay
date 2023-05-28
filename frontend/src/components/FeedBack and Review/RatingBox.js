import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'

export default function RatingBox({ id }) {
  const [value, setValue] = useState(0)
  const [comments, setComments] = useState([])
  const { auth } = useAuth()
  const [rating, setRating] = useState()
  const [dataFetched, setDataFetched] = useState(false)
  const [errMsg, seterrMsg] = useState('')

  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get(
          `https://fine-teal-ostrich-tam.cyclic.app/api/feedback/${id}`
        )
        console.log(response)
        const ratingsList = response.data.result.ratings_list

        const userRating = ratingsList.find(
          (item) => item.postedBy === auth?.user
        )
        const ratingValue = userRating ? parseFloat(userRating.val) : 0
        setValue(ratingValue)
        // alert(ratingValue)
        // console.log(ratingValue)
        // console.log(value)
        setDataFetched(true)
      } catch (err) {
        alert(err.message)
      }
    }

    getComments()
  }, [id, auth?.user, rating])

  async function handleUpdate() {
    // alert(cid)
    // const comment = {}

    try {
      const response = await axios.patch(
        `https://fine-teal-ostrich-tam.cyclic.app/api/feedback/ratings/${id}`,
        { rating: { val: value, postedBy: auth.user } }
      )

      if (response) {
        // alert('success')
        seterrMsg('Thank You for your feedback...')
      }
      //   setText('')
      //   // const accessToken = response?.data?.accessToken
      //   // const role = response?.data?.role
      //   // console.log(role)
      //   // setAuth({ user, pwd, role, accessToken })
      //   // setUser('')
      //   // setPwd('')
      //   // navigate('/admin')
    } catch (err) {
      // console.log(err.response.message)
      seterrMsg('Error')
    }
  }

  if (!dataFetched) {
    return (
      <div className="max-w-sm md:max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-[250px] w-[350px] mr-0 ml-16 ">
        <div className="px-6 py-2">
          <div className="font-bold text-xl mt-4 mb-5  text-center justify-center">
            Loading..
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {' '}
      <div className="max-w-sm md:max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-[250px] w-[350px] mr-0 ml-16 ">
        <div className="px-6 py-2">
          <div className="font-bold text-xl mt-4 mb-5  text-center">
            {value == 0 ? 'Leave us a Rating..' : 'Your Rating'}
          </div>

          <div className="rounded-lg overflow-hidden  mb-5">
            {/* <Rating
              size="large"
              name="read-only"
              value={value}
              precision={0.1}
              readOnly
            /> */}
            {/* <br></br>
            <Rating
              size="large"
              name="read-only"
              defaultValue={value}
              precision={0.1}
              readOnly
            /> */}
            <Rating
              size="large"
              name="simple-controlled"
              value={value}
              precision={0.1}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
          </div>
        </div>
        <div className="px-6 pt-2 pb-2 text-left">
          <button
            className="w-full p-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700"
            // onClick={() => handleUpdate()}
            onClick={() => handleUpdate()}
          >
            {value != 0 ? 'Change Rating' : 'Rate'}
          </button>
        </div>
        <p className="text-gray-700 text-sm text-center mt-2">
          <span
            className={
              errMsg === 'Error'
                ? 'inline-block bg-red-300 rounded-full px-3 py-1 text-xs font-semibold text-white-700'
                : 'inline-block bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-white-700'
            }
          >
            {errMsg}
          </span>
        </p>
      </div>
    </div>
  )
}
