import React from 'react'

const Explore = () => {
  return (
    <>
      <section className='w-full h-full p-10 overflow-y-auto bg-[#FFF2DB] scrollbar-none flex flex-col justify-center'>
        {/* book card */}
        <div className='w-105 h-140 p-5 overflow-hidden border rounded-2xl shadow-2xl border-[#cac8c5] flex flex-col items-center justify-center relative'>
          <div className='w-[90%] h-[93%] border rounded-2xl absolute bg-red-300'>

          </div>

          <div className='w-full h-[50%] border z-10 relative flex flex-col items-center justify-center -bottom-40'>
            
            <div className='w-full h-fit relative flex  items-center justify-around'>
              <h1 className='text-2xl font-semibold'>Book Title</h1>
              <h2 className='font-sans underline cursor-pointer'>By; Author</h2>
            </div>

            <div className='w-full h-[50%] border'>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Explore