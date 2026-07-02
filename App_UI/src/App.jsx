import { useState } from 'react'
import background_image_one from './images/background_image_one.jpg'

import LoginCard from './pages/LoginCard'
import Registration from './pages/Registration'
import HomePage from './pages/HomePage'

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
      
        {/* <LoginCard /> */}
        {/* <Registration /> */}
        <HomePage />

      </section>
    </>
  )
}

export default App
