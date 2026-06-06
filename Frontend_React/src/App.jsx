import { useState } from 'react'
import { } from 'lucide-react'
import backgroundImage from './images/background3.jpg'
import Login from './components/Login'
import Registration from './components/Registration'
import './App.css'

function App() {



  return (
    <>
    <section className='w-screen h-screen flex justify-center items-center relative'style={{background:"radial-gradient(ellipse at top right, #306D29, #E7E1B1, #FBF5DD)",}}>
      <div className='w-[70%] h-[80%] bg-[#E7E1B1] absolute right-28 bg-cover bg-center rounded-3xl shadow-green shadow-xl/50' style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* <Login /> */}
      
          <Registration />
    </section>
    </>
  )
}

export default App