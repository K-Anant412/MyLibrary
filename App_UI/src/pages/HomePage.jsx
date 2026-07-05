import React from 'react'
import SearchBar from '../utils/SearchBar'
import { IoArrowUpCircleOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <>
        <section className='w-full h-full p-10 overflow-y-auto bg-olive-200 '>
            {/* <SearchBar /> */}
          <div id='header' className='relative w-full h-80 border-2 flex flex-col justify-start'>
            <h1 className='text-7xl font-semibold'>Happy reading</h1>
            <h1 className='text-7xl font-semibold'>User,</h1>

            <p className='w-[50%] font-sans relative top-5 left-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptates quas ab obcaecati at labore nihil, architecto modi? Ipsum, fuga pariatur. Rerum, qui. Eum praesentium quo delectus voluptates vitae eaque.
            </p>

            <button className='w-42 pb-1 h-10 border border-gray-800 flex items-center justify-center rounded-3xl bg-gray-700 text-olive-100 absolute bottom-4 left-4 text-xl font-sans font-semibold gap-1'>
              Start reading
              <IoArrowUpCircleOutline size={25} className='relative top-1 rotate-45' />
            </button>
          </div>

        </section>
    </>
  )
}

export default HomePage