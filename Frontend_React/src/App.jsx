import { useState } from 'react'
import { } from 'lucide-react'
import backgroundImage from './images/background3.jpg'
// import { FcGoogle  } from 'react-icons/fc'
import { FaWhatsapp } from 'react-icons/fa'
import { GiMonsteraLeaf } from "react-icons/gi"
import { FaInstagram } from 'react-icons/fa'
import { BiSolidLeaf } from "react-icons/bi"
import './App.css'

function App() {
  return (
    <>
    {/* -------------------Main WebPage------------------- */}
    <section className='w-screen h-screen flex justify-center items-center relative'
      style={{
          background:
            "radial-gradient(ellipse at top right, #306D29, #E7E1B1, #FBF5DD)",
        }}>

      <div className='w-[70%] h-[80%] bg-[#E7E1B1] absolute right-28 bg-cover bg-center rounded-3xl' style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>

      {/* login // Registration section */}
      <div className='w-[35%] h-[84%] border-5 rounded-4xl border-[#E7E1B1] z-50 relative left-[-350px] bg-[#FBF5DD] flex flex-col items-center justify-center gap-2.5 shadow-2xl shadow-black/50'>
        
        {/* Header box_____________________________________________________________________________________________________________________________________ */}
        <div className='w-full h-[70px] flex flex-col items-center justify-center relative top-[-20px]'>

          <h1 className='text-[38px] font-bold font-[DM_Serif_Text] flex items-center justify-center'>
            Welcome Back
            < BiSolidLeaf size={40} />
            .
          </h1>
          <h3 className='text-[16px] relative -left-1.5'>Log-in to continue your journey.</h3>

        </div>
        
        {/* Input box_____________________________________________________________________________________________________________________________________ */}
        <div className='w-full h-fit gap-2.5 flex items-center justify-center flex-col'>

          <span className='w-[72%]'>
          <p className='text-[16px] font-medium px-2 text-[#636363]'>Username</p>
            <input type="text" name='username' className='w-full h-12.5 border-2 border-[#E7E1B1] flex justify-center px-2.5 text-[20px] rounded-2xl' placeholder='Your username'/>
          </span>

          <span className='w-[72%]'>
          <p className='text-[16px] font-medium px-2 text-[#636363]'>Password</p>
            <input type="password" name="password" className='w-full h-12.5 border-2 border-[#E7E1B1] flex justify-center px-2.5 text-[20px] rounded-2xl' placeholder=' Your password'/>
          </span>

        </div>

        {/* Input footer box_____________________________________________________________________________________________________________________________________ */}
        <div className='h-10 w-[70%] flex items-center justify-between'>

          <span className='flex items-center gap-1'>
            <input type="checkbox" name="rembere me" />
            <label htmlFor="rembere me" >Remember me</label>
          </span>

          <h2 className='text-center'>Forgot Password?</h2>

        </div>

        {/* Submit button_____________________________________________________________________________________________________________________________________ */}
        <button className='w-[70%] h-12.5 border-[1.5px] border-[#0D530E] rounded-2xl flex justify-center items-center text-[30px] font-bold text-[#E7E1B1] bg-[#0D530E]'>Log in</button>
      
        {/* _____________________________________________________________________________________________________________________________________ */}
        <div className="flex items-center my-4 w-[70%] h-fit">

          <div className="grow border-t border-gray-400"></div>
          <span className="mx-4 text-gray-500 text-sm font-medium"> Or login with</span>
          <div className="grow border-t border-gray-400"></div>

        </div>

        {/* Other Options_____________________________________________________________________________________________________________________________________ */}
        <div className='w-[70%] h-11.25 flex items-center justify-around relative -top-2.5'>

          <button className='w-[40%] h-10 border border-[#E7E1B1] rounded-2xl text-[22px] font-medium bg-[#E7E1B1] text-[#0D530E] flex items-center justify-center'> 
            <FaWhatsapp size={30} className='relative -left-0.5' />
            Whatsapp 
          </button>
          <button className='w-[40%] h-10 border border-[#E7E1B1] rounded-2xl text-[22px] font-medium bg-[#E7E1B1] text-[#0D530E] flex items-center justify-center'>
            <FaInstagram size={30} className='relative -left-0.5' />
            Instagram
          </button>
        
        </div>

        {/* Footer box_____________________________________________________________________________________________________________________________________ */}
        <p className='h-7.5 w-[70%] text-center text-[18px] mt-3 relative -top-4'>
          Don't have account?
          <a href="#" className='ml-1 text-[19px] font-bold'>Register</a>
        </p>
      </div>

    </section>
    </>
  )
}

export default App
