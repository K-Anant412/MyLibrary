import React from 'react'
import { BiSolidLeaf } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import { AiFillProduct } from 'react-icons/ai'


const Navbar = () => {

 

  return (
    <>
      <nav className='w-70 h-full flex flex-col bg-[#0a420b] shrink-0 shadow-black shadow-lg z-50 relative top-2 rounded-tr-3xl'>

            <div className=' w-full h-[30%] flex flex-col pt-6 gap-1.5 items-center relative top-6.5'>
                <h1 className='flex items-center gap-1.5 text-4xl font-bold w-full text-[#ccc592] hover:underline font-[DM_Serif_Text] relative left-12'>
                    < BiSolidLeaf size={40} />
                    InkWell
                </h1>
                <h3 className='text-2xl font-semibold w-full text-[#ccc592] h-full text-center relative -left-0.5'>Start reading.</h3>
            </div>

            <div className='w-full h-[60%]'>
                <ul className='list-none w-full h-full flex flex-col items-center gap-4'>

                    <NavLink 
                        to="/" 
                        className={({ isActive })=>
                            ` w-[70%] flex items-center justify-center border-2 border-[#E7E1B1] rounded-2xl px-4 py-2 cursor-pointer gap-1 rounded-br-[40px] rounded-tr-[40px] 
                            ${
                                isActive
                                    ? "bg-[#E7E1B1] text-[#0D530E] scale-105"
                                    : "border-[#E7E1B1] text-[#0a450b] hover:bg-[#0a450b]"
                            }`
                        }>
                        <span className='text-[24px] text-[#ccc592] font-bold relative -top-0.5'>Home</span>
                    </NavLink>

                    <NavLink to="/explore" className='w-[70%] flex items-center justify-center border-2 border-[#E7E1B1] rounded-2xl px-4 py-2 cursor-pointer gap-1 rounded-br-[40px] rounded-tr-[40px]' >
                        <span className='text-[24px] text-[#ccc592] font-bold relative -top-0.5'>Browse Books</span>
                    </NavLink>

                    <NavLink to="/mylibrary" className='w-[70%] flex items-center justify-center border-2 border-[#E7E1B1] rounded-2xl px-4 py-2 cursor-pointer gap-1 rounded-br-[40px] rounded-tr-[40px]' >
                        <span className='text-[24px] text-[#ccc592] font-bold relative -top-0.5'>My Library</span>
                    </NavLink>

                    <NavLink to="/membership" className='w-[70%] flex items-center justify-center border-2 border-[#E7E1B1] rounded-2xl px-4 py-2 cursor-pointer gap-1 rounded-br-[40px] rounded-tr-[40px]' >
                        <span className='text-[24px] text-[#ccc592] font-bold relative -top-0.5'>Memberships</span>
                    </NavLink>

                    
                    
                    {/* <NavLink to="/" className={linkStyles}>
                        <FiHome size={23} />
                        <span>Home</span>
                    </NavLink>

                    <NavLink to="/search" className={linkStyles}>
                        <AiFillProduct size={23} />
                        <span>Product</span>
                    </NavLink>

                    <NavLink to="/about" className={linkStyles}>
                        <MdAccountCircle size={23} />
                        <span>About</span>
                    </NavLink>

                    <NavLink to="/contact" className={linkStyles}>
                        <MdAddCall size={23} /> 
                        <span>Contact</span>
                    </NavLink> */}

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