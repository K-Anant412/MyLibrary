import { useState } from 'react'
import background_image_one from './images/background_image_one.jpg'

import './App.css'

function App() {

  return (
    <>
      <section 
        className='w-screen h-screen flex items-center bg-cover bg-center' 
        style={{
          backgroundImage: `url(${background_image_one})`
        }}
        >
        
        <div className='w-[45%] h-70 relative left-15 overflow-hidden'>
          <h1 className='w-full h-full flex items-center justify-center text-6xl text-shadow-white font-bold text-shadow-2xs'>Start Your New Journey</h1>
        </div>
        <div className='w-[48%] h-[85%] border-2 absolute right-0 rounded-bl-3xl rounded-tl-3xl border-[#d9c5a6e4] shadow-2xl bg-[#fbead2e2]'>

        </div>

      </section>
    </>
  )
}

export default App
