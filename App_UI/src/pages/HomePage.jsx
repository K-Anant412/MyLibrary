import React from 'react'
import { GiBookmark } from "react-icons/gi";

const HomePage = () => {
  return (
    <>
        <nav className='h-full w-60 border border-[#9c2754ee] flex items-center flex-col gap-2 backdrop-blur-md bg-linear-to-t  from-[#9c2754ee] via-[#831f44] to-[#5c112e]'>
            
            <div className='text-amber-50 flex w-full h-fit p-2.5 justify-center items-center mt-2'>
            
                <GiBookmark size={50} className='relative top-2 right-1' />
            
                <h1 className='text-4xl font-bold'>
                    InkWell
                    <p className='text-[16px] font-medium font-sans'>Read as you want</p>
                </h1>
            
            </div>

            <div className='w-full h-fit mt-3 flex flex-col items-center justify-center relative top-10'>
                <ul className='text-amber-50 flex flex-col w-full items-center h-fit gap-12 text-2xl font-sans font-semibold cursor-pointer'>
                    <li>Home</li>
                    <li>Library</li>
                    <li>Explore</li>
                    <li>Member</li>
                </ul>
            </div>

        </nav>
    </>
  )
}

export default HomePage