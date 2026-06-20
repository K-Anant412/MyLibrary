import { useState } from 'react'
import backgroundImage from './images/background3.jpg'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import './App.css'


import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Explore from './components/pages/Explore'
import Membership from './components/pages/Membership'
import MyLibrary from './components/pages/MyLibrary'

function App() {

  // const [isLogin, setIsLogin] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  // if(!isAuthenticated) {
  //   return(
  //   <section className='w-screen h-screen flex justify-center items-center relative'style={{background:"radial-gradient(ellipse at top right, #306D29, #E7E1B1, #FBF5DD)",}}>
  //     <div className='w-[70%] h-[80%] bg-[#E7E1B1] absolute right-28 bg-cover bg-center rounded-3xl shadow-green shadow-xl/50' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    
  //     {isLogin ? (
  //       <Login 
  //         howRegister={() => setIsLogin(false)} 
  //         onSuccess={() => setIsAuthenticated(true)}
  //         />
  //       ) : (
  //         <Registration 
  //         showLogin={() => setIsLogin(true)} 
  //         onSuccess={() => setIsAuthenticated(true)}
  //       /> 
  //     )}
  //   </section>
  // ) 
  // }


  return (
    <>
      <section className='w-screen h-screen overflow-hidden flex bg-green-200'>

      <Navbar />

      <div className='flex-1 h-full'>
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/mylibrary' element={<MyLibrary />} />
            <Route path='/membership' element={<Membership />} />
        </Routes>
      </div>
      
      </section>
      
    </>
  )
}

export default App