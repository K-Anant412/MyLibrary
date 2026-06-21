import React from 'react'
import { BiSolidLeaf } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import { LuLibrary } from 'react-icons/lu'
import { MdOutlineExplore, MdOutlinePaid } from 'react-icons/md'
import { IoSettingsOutline } from "react-icons/io5"

const Navbar = () => {

    const isActiveLink = ({ isActive })=>
                            ` h-20 w-20 flex items-center justify-center border border-[#D4C37C] cursor-pointer gap-1 text-[#D4C37C] transition duration-400 
                            ${
                                isActive
                                     ? "bg-[#76714acd] scale-105 rounded-2xl"
                                     : "border-[#19701bf5] hover:bg-[#76714acd] rounded-[50%]"
                                }`

    return (
        <>
            <nav className='
                w-30 h-screen
                flex flex-col
                items-center
                bg-linear-to-br
                from-[#41a646]
                via-[#4db452e2]
                to-[#4a604a]
                shadow-2xl
                z-50 p-0
                '
            >
                <h1 className='
                   text-[20px]
                   font-bold
                   relative 
                   w-full
                   h-30
                   border
                   bg-amber-100
                   flex-1
                   
                '>
                HelloWorld</h1>

                <div className='w-full flex-6 flex flex-col items-center justify-center gap-7'>

                    <NavLink to="/"
                    className={isActiveLink}
                    >
                        <IoHome size={45}  />
                    </NavLink>

                    <NavLink to="/explore"
                    className={isActiveLink}
                    >
                        <MdOutlineExplore size={45} />
                    </NavLink>

                    <NavLink to="/mylibrary"
                    className={isActiveLink}
                    >
                        <LuLibrary size={45} />
                    </NavLink>

                    <NavLink to="/membership"
                    className={isActiveLink}
                    >
                        <MdOutlinePaid size={45} />
                    </NavLink>

                </div>
                <div  className='w-full flex-1 flex items-center justify-center relative bottom-2'>
                    <button className='w-20 h-20 flex items-center justify-center rounded-2xl border text-[#D4C37C]'>
                        <IoSettingsOutline size={45}/>
                    </button>
                </div>

            </nav>
        </>
    )
    }

    export default Navbar