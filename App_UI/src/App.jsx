import { useState } from 'react'
import background_image_one from './images/background_image_one.jpg'
import { Routes, Route} from 'react-router-dom'

import LoginCard from './pages/LoginCard'
import Registration from './pages/Registration'
import HomePage from './pages/HomePage'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Member from './pages/Member'
import Collection from './pages/Collection'
import Navbar from './utils/Navbar'

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

        <Navbar />

        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/explore' element={ <Explore />} />
          <Route path='/collection' element={ <Collection />} />
          <Route path='/profile' element={ <Profile />} />
          <Route path='/member' element={ <Member />} />
        </Routes>

      </section>
    </>
  )
}

export default App
