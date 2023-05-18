import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'

export default function CommentBox({ id }) {
  const { auth } = useAuth()
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const comment = {}

    try {
      const response = await axios.patch(
        `http://localhost:4000/api/feedback/${id}`,
        { comment: { text: text }, userId: auth.user }
      )
      setText('')

      // const accessToken = response?.data?.accessToken
      // const role = response?.data?.role
      // console.log(role)
      // setAuth({ user, pwd, role, accessToken })
      // setUser('')
      // setPwd('')
      // navigate('/admin')
    } catch (err) {
      console.log(err.response.message)
    }
  }

  return (
    <div class="flex mx-auto items-center justify-center shadow-lg mb-4 w-full">
      <form
        class="w-full  bg-white rounded-lg px-4 pt-2"
        onSubmit={handleSubmit}
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <Avatar
            alt="User"
            src="https://res.cloudinary.com/dtktpemb7/image/upload/v1683432593/cld-sample.jpg"
          />
          <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
            HI! {auth?.user}, What do you think about this place?
          </h2>
          <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Give your Feedback"
              onChange={(e) => setText(e.target.value)}
              value={text}
              required
            ></textarea>
          </div>
          <div class="w-full md:w-full flex items-start md:w-full px-3">
            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              {/* <svg
                fill="none"
                class="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
              {/* <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p> */}
            </div>
            <div class="-mr-1">
              <input
                type="submit"
                class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Add feedback"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
