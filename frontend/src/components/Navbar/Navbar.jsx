import React from 'react'

const Navbar = () => {
  return (
  <div>
    <div class="bg-white">
        <nav class="flex justify-between items-center w-[92%]  mx-auto" >
            <div>
                {/* <img class="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." /> */}
                <h1 className='w-auto py-4 font-bold  cursor-pointer font-sigmar text-3xl'>Cultural Stay</h1>
            </div>
            <div
                class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-20 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-lg font-poppins">
                    <li>
                        <a class="text-gray-500 hover:text-black" href="#">Hosts</a>
                    </li>
                    <li>
                        <a class="text-gray-500 hover:text-black" href="#">Restaurants</a>
                    </li>
                    <li>
                        <a class="text-gray-500 hover:text-black" href="#">Food</a>
                    </li>
                    <li>
                        <a class="text-gray-500 hover:text-black" href="#">Attractions</a>
                    </li>
                    <li>
                        <a class="text-gray-500 hover:text-black" href="#">Search</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <button class="bg-[#5e92ec] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
            </div>
            </nav>
    </div>
</div>
    )
}

export default Navbar
