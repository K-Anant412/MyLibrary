import React from 'react'
import { NavLink } from 'react-router-dom';

import { GiBookmark } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { AiFillProduct } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const isActiveLink = ({ isActive }) => `w-full h-15 flex items-center gap-1 transition-all duration-150 
         ${
            isActive 
            ? "border rounded-[12px] scale-105 px-3 bg-linear-to-l  from-[#831f44] to-[#5c112e] border-[#b02f61ee] inset-1 shadow-2xl"
            : "border-0 rounded-[12px]"
         }
        `

  return (
    <>
        <nav className='h-full w-60 border shrink-0 border-[#b02f61ee] border-l-0 rounded-tr-3xl rounded-br-3xl shadow-black  shadow-lg flex items-center flex-col  gap-2 backdrop-blur-md bg-linear-to-t  from-[#b02f61ee] via-[#831f44] to-[#5c112e]'>
            
            <div className='text-amber-50 flex w-full h-fit p-2.5 justify-center items-center mt-8'>
            
                <GiBookmark size={50} className='relative top-2 right-1' />
            
                <h1 className='text-4xl font-bold'>
                    InkWell
                    <p className='text-[16px] font-medium font-sans'>Read as you want</p>
                </h1>
            
            </div>

            <div className='w-[80%] h-fit mt-3 flex flex-col items-center justify-center relative top-20'>
                <div className=' text-amber-50 gap-1.5 flex flex-col w-full items-center h-fit text-[28px] font-sans font-semibold cursor-pointer'>
                    <NavLink to="/" className={isActiveLink}>
                        <GoHomeFill size={30} className='shrink-0' />
                        Home
                    </NavLink>

                    <NavLink to="/collection" className={isActiveLink}>
                        <AiFillProduct size={30} />
                        Library
                    </NavLink>

                    <NavLink to="/explore" className={isActiveLink}>
                        <MdExplore size={30} />
                        Explore
                    </NavLink>

                    <NavLink to="/profile" className={isActiveLink}>
                        <FaUserCircle size={26} />
                        Profile
                    </NavLink>

                    <NavLink to="/member" className={isActiveLink}>
                        <HiCurrencyDollar size={30} />
                        Member
                    </NavLink>
                </div>


            </div>

            <div className='w-[70%] h-fit flex items-center justify-center p-2 border relative top-30'>

            </div>

        </nav>
    </>
  )
}

export default Navbar
