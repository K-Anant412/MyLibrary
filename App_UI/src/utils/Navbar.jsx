import React from 'react'
import { NavLink } from 'react-router-dom';

import { GiBookmark } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { AiFillProduct } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {

    const isActiveLink = ({ isActive }) => `w-15 h-15 flex items-center justify-center gap-1 transition-all duration-150 
         ${
            isActive 
            ? "border rounded-[50%] scale-105 px-3 bg-linear-to-l  from-[#831f44] to-[#5c112e] border-amber-50 inset-1 shadow-2xl"
            : "border-0 rounded-[12px]"
         }
        `

  return (
    <>
        <nav className='h-full w-25 border shrink-0 border-[#b02f61ee] border-l-0 shadow-black  shadow-lg flex items-center flex-col  gap-2 backdrop-blur-md bg-linear-to-t  from-[#b02f61ee] via-[#831f44] to-[#5c112e]'>

            <div className='w-[80%] h-fit mt-3 flex flex-col items-center justify-center relative top-40'>
                <div className=' text-amber-50 gap-2.5 flex flex-col w-full items-center h-fit text-[28px] font-sans font-semibold cursor-pointer'>
                    <NavLink to="/" className={isActiveLink}>
                        <GoHomeFill size={40} className='shrink-0' />
                    </NavLink>

                    <NavLink to="/collection" className={isActiveLink}>
                        <AiFillProduct size={40} />
                    </NavLink>

                    <NavLink to="/explore" className={isActiveLink}>
                        <MdExplore size={40} />
                    </NavLink>

                    <NavLink to="/profile" className={isActiveLink}>
                        <FaUserCircle size={36} />
                    </NavLink>

                    <NavLink to="/member" className={isActiveLink}>
                        <HiCurrencyDollar size={40} />
                    </NavLink>
                </div>


            </div>

            <div className='w-20 h-20 flex items-center justify-center p-2 absolute bottom-2.5'>
                <CiMenuKebab size={40} className='text-amber-50' />
            </div>

        </nav>
    </>
  )
}

export default Navbar
