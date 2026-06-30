import { useState } from 'react'
import background_image_one from './images/background_image_one.jpg'

import LoginCard from './pages/LoginCard'

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
      
        <LoginCard />

      </section>
    </>
  )
}

export default App
