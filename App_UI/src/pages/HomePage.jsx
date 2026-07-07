import React from 'react'
import SearchBar from '../utils/SearchBar'
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";

const HomePage = () => {
  return (
    <>
        <section className='w-full h-full p-10 overflow-y-auto bg-[#FFF2DB] scrollbar-none '>
            {/* <SearchBar /> */}
          <div id='header' className='relative w-full h-80 flex justify-start'>

            <div className='w-[35%] h-full flex flex-col justify-start relative shrink-0'>
                <h1 className='text-7xl font-semibold'>Find Your</h1>
                <h1 className='text-7xl font-semibold'>Next Book,</h1>

                <p className='w-full font-sans relative top-5 left-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptates quas ab obcaecati at labore nihil, architecto modi? Ipsum, fuga pariatur.
                </p>

                <button className='w-42 pb-1.5 h-10 border border-gray-800 flex items-center justify-center rounded-lg bg-gray-700 text-olive-100 absolute bottom-4 left-1.5 text-xl font-sans font-semibold gap-1'>
                  Explore now
                  <IoArrowUpCircleOutline size={25} className='relative top-1 rotate-90' />
                </button>
            </div>

            <div className='w-full h-full flex items-center justify-evenly'>

                <div className='w-[30%] h-[90%] border border-[#cac8c1e4] rounded-tl-[50%] rounded-tr-[50%] bg-[#F8F5E9] transition-all duration-200 shadow-2xl hover:scale-105'>

                </div>

                <div className='w-[30%] h-[90%] border border-[#cac8c1e4] rounded-bl-[50%] rounded-br-[50%] bg-[#F8F5E9] transition-all duration-200 shadow-2xl hover:scale-105'>

                </div>

                <div className='w-[30%] h-[90%] border border-[#cac8c1e4] rounded-tl-[50%] rounded-tr-[50%] bg-[#F8F5E9] transition-all duration-200 shadow-2xl hover:scale-105'>
                
                </div>

            </div>

          </div>

          <div id='bottom_header' className='w-full h-15 mt-2 flex items-center justify-around'>
            
            <div className="avatar flex items-center gap-1 rounded-2xl hover:bg-amber-50 h-full w-fit">
              <div className="w-12 rounded">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
              </div>
              <h1>New from Batman</h1>
            <RxDividerVertical size={30} />
            </div>


            <div className="avatar flex items-center gap-1 rounded-2xl hover:bg-amber-50 h-full w-fit">
              <div className="w-12 rounded">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
              </div>
              <h1>New from Batman</h1>
            <RxDividerVertical size={30} />
            </div>


            <div className="avatar flex items-center gap-1 rounded-2xl hover:bg-amber-50 h-full w-fit">
              <div className="w-12 rounded">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
              </div>
              <h1>New from Batman</h1>
            <RxDividerVertical size={30} />
            </div>


            <div className="avatar flex items-center gap-1 rounded-2xl hover:bg-amber-50 h-full w-fit">
              <div className="w-12 rounded">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
              </div>
              <h1>New from Batman</h1>
            <RxDividerVertical size={30} />
            </div>

            <div className="avatar flex items-center gap-1 rounded-2xl hover:bg-amber-50 h-full w-fit">
              <div className="w-12 rounded">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
              </div>
              <h1>New from Batman</h1>
            <RxDividerVertical size={30} />
            </div>

            <div className="avatar flex items-center gap-1 rounded-2xl hover:bg-amber-50 h-full w-fit">
              <div className="w-12 rounded">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
              </div>
              <h1>New from Batman</h1>
            <RxDividerVertical size={30} />
            </div>
            
          </div>

          <div className='relative w-full h-70 border-2 mt-2 flex flex-col p-2'>
            <h1 className='text-2xl flex items-center justify-between w-full font-medium px-2'>
              Recommended For You
              <a href="#" className='text-[20px] underline flex w-fit h-fit gap-1 items-center justify-center'>
                see all
                <IoIosArrowForward size={20} className='relative top-0.5 font-bold'/>
              </a>
            </h1>

              
          </div>

          <div className='relative w-full h-70 border-2 mt-2 flex flex-col p-2'>
            <h1 className='text-2xl flex items-center justify-between w-full font-medium font-sans bg-amber-50 px-2'>
              Recommended For You
              <a href="#" className='text-[20px] underline flex w-fit h-fit gap-1 items-center justify-center'>
                see all
                <IoIosArrowForward size={20} className='relative top-0.5 font-bold'/>
              </a>
            </h1>
          </div>


        </section>
    </>
  )
}

export default HomePage