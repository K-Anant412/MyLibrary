import { useState } from 'react'
import { House, BookSearch, BookHeart, Heart, LogOut } from 'lucide-react'
// import './images/background1.jpg'
import backgroundImage from './images/background2.PNG'
import './App.css'

function App() {
  return (
    <>
    {/* main page */}
      <section className='w-screen h-screen flex justify-center items-center  bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='w-[800px] h-[500px] border-2 border-amber-100 rounded-3xl bg-linear-to-t from-sky-500 to-indigo-500'>
          
        </div>  
      </section>
    </>
  )
}

export default App
