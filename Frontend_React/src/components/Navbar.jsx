import React from 'react'
import { BiSolidLeaf } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'


const Navbar = () => {
  return (
    <>
      <nav className='w-60 h-full flex flex-col bg-[#0D530E] shrink-0'>

            <div className='w-full h-[30%] flex flex-col pt-6 gap-1.5'>
                <h1 className='text-4xl font-bold w-full text-center text-white hover:underline'>InkWell</h1>
                <h3 className='text-2xl font-semibold w-full text-white h-full text-center'>Start reading.</h3>
            </div>

            <div className='w-full h-[60%]'>
                <ul className='list-none w-full h-full flex flex-col items-center gap-2'>

                    <NavLink to="/" className={linkStyles}>
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
                    </NavLink>

                </ul>
            </div>

            <div className='w-full h-[10%] flex justify-center'>
                <button className='w-[70%] h-12 border-white border rounded-2xl text-3xl font-extrabold flex items-center justify-center text-white relative -top-5'>
                    Log Out
                </button>
            </div>

        </nav>
    </>
  )
}

export default Navbar