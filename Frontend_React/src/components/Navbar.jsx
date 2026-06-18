import React from 'react'
import { BiSolidLeaf } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import { AiFillProduct } from 'react-icons/ai'


const Navbar = () => {

    const isActiveLink = ({ isActive })=>
                                ` w-[70%] flex items-center justify-center border border-[#E7E1B1] rounded-2xl px-4 py-2 cursor-pointer gap-1 
                                ${
                                    isActive
                                        ? "bg-[#E7E1B1] scale-105"
                                        : "border-[#19701bf5] hover:bg-[#19701bf5]"
                                }`

    return (
        <>
        <nav
            className="
                w-72 h-[95%]
                flex flex-col
                bg-[#bbf7d0]  {/* Assuming this is matching your exact green background */}
                shrink-0 z-50
                relative top-4 left-5
                border
                border-[#a2d1b3]
                rounded-[20px]
                shadow-[13px_14px_30px_rgba(8,85,9,0.2),-12px_-12px_40px_rgba(2,122,27,0.3)]
                transition-all duration-300
            "
            >

                <div className=' w-full h-[30%] flex flex-col pt-6 gap-1.5 items-center relative top-6.5'>
                    <h1 className='flex items-center gap-1.5 text-4xl font-bold w-full text-[#76714a] hover:underline font-[DM_Serif_Text] relative left-12'>
                        < BiSolidLeaf size={40} />
                        InkWell
                    </h1>
                    <h3 className='text-2xl font-semibold w-full text-[#706d50] h-full text-center relative -left-0.5'>Start reading.</h3>
                </div>

                <div className='w-full h-[60%]'>
                    <ul className='list-none w-full h-full flex flex-col items-center gap-4'>

                        <NavLink 
                            to="/" 
                            className={isActiveLink}>
                            <span className='text-[24px] font-bold relative -top-0.5'>Home</span>
                        </NavLink>

                        <NavLink 
                            to="/explore" 
                            className={isActiveLink}>
                            <span className='text-[24px]  font-bold relative -top-0.5'>Browse Books</span>
                        </NavLink>

                        <NavLink 
                            to="/mylibrary" 
                            className={isActiveLink}>
                            <span className='text-[24px]  font-bold relative -top-0.5'>My Library</span>
                        </NavLink>

                        <NavLink 
                            to="/membership" 
                            className={isActiveLink}>
                            <span className='text-[24px]  font-bold relative -top-0.5'>Memberships</span>
                        </NavLink>

                    </ul>
                </div>

                <div className='w-full h-[10%] flex justify-center'>
                    <button className='w-[70%] h-12 border-[#E7E1B1] border rounded-2xl text-[26px] text-[#ccc592] font-extrabold flex items-center justify-center  relative -top-5'>
                        Log Out
                    </button>
                </div>

            </nav>
        </>
    )
    }

    export default Navbar