import { useState } from 'react'
// import { } from 'lucide-react'
import backgroundImage from './images/background3.jpg'
import Login from './components/Login'
import Registration from './components/Registration'
import './App.css'

import { BiSolidLeaf } from "react-icons/bi"
import { createBrowserRouter, RouterProvider, Link, NavLink } from 'react-router-dom'

function App() {

  // const [isLogin, setIsLogin] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  // if(isAuthenticated) {
  //   return(
  //   <>
  //     <h1 className='w-full h-11 flex justify-center items-center text-center text-3xl font-extrabold bg-amber-600'>Welcome to InkWell</h1>
  //   </>
  // ) 
  // }


  return (
    <>
    <section className='w-screen h-screen flex justify-center items-center relative'style={{background:"radial-gradient(ellipse at top right, #306D29, #E7E1B1, #FBF5DD)",}}>
      {/* <div className='w-[70%] h-[80%] bg-[#E7E1B1] absolute right-28 bg-cover bg-center rounded-3xl shadow-green shadow-xl/50' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    
      {isLogin ? (
        <Login 
          howRegister={() => setIsLogin(false)} 
          onSuccess={() => setIsAuthenticated(true)}
          />
        ) : (
          <Registration 
          showLogin={() => setIsLogin(true)} 
          onSuccess={() => setIsAuthenticated(true)}
        /> 
      )} */}

        <div className='w-full h-screen flex justify-start overflow-hidden'>
          <nav className='w-75 h-full bg-[#0d530ec6] flex flex-col items-center'>
              
              <div className='w-full flex flex-col justify-center items-center border'>
                 <BiSolidLeaf 
                 size={70} 
                 className=''
                 />
                  <h1 className='text-5xl font-bold font-[DM_Serif_Text]'>
                    Ink-Well
                  </h1>
              </div>

              <div className='w-full h-100 border-2 flex items-center justify-center'>
                <ul className='h-full w-full flex flex-col items-center'>
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/"><li>Explore</li></Link>
                  <Link to="/"><li>My Library</li></Link>
                  <Link to="/"><li>Membership</li></Link>
                </ul>
              </div>

              <div className='6'>

              </div>
          </nav>

          <div>
            
          </div>

        </div>
    </section>
    </>
  )
}

export default App