import React from 'react'

const  Home= () => {
  return (
    <>
    <nav className='w-[250px] h-screen bg-amber-100 flex flex-col p-3'>
        
        <div className='w-full p-1.5 h-[30%] border'>  
          <h1 className='text-[35px] font-extrabold'>InkWell</h1>
          <p>Never run out of pages</p>
        </div>

        <div className='h-[55%] border flex items-center justify-center'>
            <ul className='h-[80%] w-[80%] flex flex-col justify-around items-center'>

              <li className=' w-full flex'>
                <House />
                Home
              </li>

              <li className=' w-full flex'>
                <BookSearch />
                Explore
              </li>

              <li className=' w-full flex'>
                <BookHeart />
                My Library
              </li>

              <li className=' w-full flex'>
                <Heart />
                Favorite
              </li>

            </ul>
        </div>
      
      <div className='h-[15%] border'>
        <button>
          <LogOut />
          Log Out
        </button>
      </div>

      </nav>
    </>
  )
}

export default Home 