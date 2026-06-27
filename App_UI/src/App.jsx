import { useState } from 'react'
import background_image_one from './images/background_image_one.jpg'
import { useForm } from 'react-hook-form' 

import './App.css'

function App() {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <section 
        className='w-screen h-screen flex items-center bg-cover bg-center' 
        style={{
          backgroundImage: `url(${background_image_one})`
        }}
        >
        
        {/* <div className='w-[45%] h-70 relative left-15 overflow-hidden'>
          <h1 className='w-full h-full flex items-center justify-center text-6xl text-shadow-white font-bold text-shadow-2xs'>Start Your New Journey</h1>
        </div> */}
        <div className='w-[48%] h-[85%] border-2 absolute right-0 rounded-bl-3xl rounded-tl-3xl border-[#d9c5a6e4] shadow-2xl bg-[#fbead2e2] flex items-center justify-center'>
          
          <div className='w-[55%] h-[85%] border-2 rounded-3xl flex flex-col items-center justify-center border-none shadow-inner shadow-[#1c1c1cea] bg-[#f9e3c4]'>
            <h1 className='w-full h-20 text-4xl font-bold flex items-center justify-center relative -top-30'>InkWell</h1>
             
             <form 
              onSubmit={handleSubmit(onSubmit)}
              className='w-full h-fit p-1 flex flex-col items-center justify-center gap-4 relative -top-15' 
             >

              <input 
                value={user} 
                {...register("username")} 
                className='w-[80%] h-12 border rounded-2xl text-2xl font-bold'  
              />
              <input 
                value={email} 
                {...register("email")} 
                className='w-[80%] h-12 border rounded-2xl text-2xl font-bold'    
              />

              <button
                className='w-[80%] h-12 border rounded-2xl text-2xl font-bold'
              >
                Log In
              </button>
              
              <span className='flex gap-1'>
                don't have account?  
                <a href="#">
                  create here
                </a>
              </span>
            </form>

            <div>
              or
            </div>


          </div>
        </div>

      </section>
    </>
  )
}

export default App
