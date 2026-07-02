import React from 'react'
import { GiBookmark } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { AiFillProduct } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
        <nav className='h-full w-60 border border-amber-50 border-l-0 rounded-tr-3xl rounded-br-3xl shadow-black shadow-lg flex items-center flex-col  gap-2 backdrop-blur-md bg-linear-to-t  from-[#9c2754ee] via-[#831f44] to-[#5c112e]'>
            
            <div className='text-amber-50 flex w-full h-fit p-2.5 justify-center items-center mt-8'>
            
                <GiBookmark size={50} className='relative top-2 right-1' />
            
                <h1 className='text-4xl font-bold'>
                    InkWell
                    <p className='text-[16px] font-medium font-sans'>Read as you want</p>
                </h1>
            
            </div>

            <div className='w-[80%] h-fit mt-3 flex flex-col items-center justify-center relative top-20 -right-7'>
                <ul className=' text-amber-50 gap-1.5 flex flex-col w-full items-center h-fit text-[28px] font-sans font-semibold cursor-pointer'>
                    <li className='border bg-[#831f44] border-r-[#831f44] w-full h-15 flex items-center gap-1'>
                        <GoHomeFill size={30} />
                        Home
                    </li>
                    <li className=' w-full h-15 flex items-center gap-1'>
                        <AiFillProduct size={30} />
                        Library
                    </li>
                    <li className=' w-full h-15 flex items-center gap-1'>
                        <MdExplore size={30} />
                        Explore
                    </li>
                    <li className=' w-full h-15 flex items-center gap-1.5'>
                        <FaUserCircle size={26} />
                        Profile
                    </li>
                    <li className=' w-full h-15 flex items-center gap-1'>
                        <HiCurrencyDollar size={30} />
                        Member
                    </li>
                </ul>


            </div>

            <div className='w-[70%] h-fit flex items-center justify-center p-2 border relative top-30'>

            </div>

        </nav>
    </>
  )
}

export default HomePage