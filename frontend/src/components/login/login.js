import React from 'react'
import bgImg from '../../Assets/loginImg.jpg'
import altbgImg from '../../Assets/bgImg.jpg'

export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={bgImg} alt="" />
      </div>

      <div
        className="bg-orange-300 flex flex-col justify-center"
        style={{ backgroundImage: `url(${altbgImg})` }}
      >
        <form
          className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
          //   onSubmit={handleSubmit}
        >
          {/* <p
            className={
              errMsg
                ? 'bg-pink-700 text-red-100 font-bold p-0.5 mb-2 text-2xl'
                : 'absolute -left-full'
            }
          >
            {/* {errMsg} */}
          {/* </p>  */}
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <h3 className="text-2xl dark:text-white font-bold text-center">
            Welcome To Cultural Stay
          </h3>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              id="username"
              autoComplete="off"
              //   onChange={(e) => setUser(e.target.value)}
              //   value={user}
              required
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              id="password"
              //   onChange={(e) => setPwd(e.target.value)}
              //   value={pwd}
              required
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="w-full my-5 py-2 bg-green-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  )
}
