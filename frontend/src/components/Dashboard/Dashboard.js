import React from 'react'
import DashboardStatGrid from './DashboardStatGrid'
import altbgImg from '../../Assets/bgImg.jpg'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatGrid />
      <div className="flex flex-row gap-4 w-full">
        <div class="h-screen w-full bg-gray-50 flex items-center ">
          <section
            class="bg-cover bg-center py-32 w-full"
            style={{ backgroundImage: `url(${altbgImg})` }}
          >
            <div class="container mx-auto text-left text-white">
              <div class="flex items-center">
                <div class="w-1/2">
                  <h1 class="text-5xl font-medium mb-6">
                    Welcome Back! to the Admin Panel
                  </h1>
                  <p class="text-xl mb-12 backdrop-blur-md text-yellow-100">
                    We're dedicated to showcasing the rich cultural heritage of
                    our local community. Here, you'll find all the tools and
                    resources you need to share and promote the unique customs,
                    traditions, and experiences that make our destination truly
                    special. Let's work together to help visitors discover the
                    authentic essence of our region!
                  </p>
                  <a
                    // href="#"
                    class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
                  >
                    Start here...
                  </a>
                </div>
                <div class="w-1/2 pl-16">
                  <image
                    src="https://source.unsplash.com/random?ux"
                    class="h-64 w-full object-cover rounded-xl"
                    alt="Layout Image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
