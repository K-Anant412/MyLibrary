import React from 'react'
import { useForm } from 'react-hook-form' 
import LoginCard from './LoginCard';

import { FaPencil } from "react-icons/fa6";

const Registration = () => {

    const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()

    const onSubmit = async(data) => {

      try {
        const response = await fetch(
          "http://127.0.0.1:5001/api/v1/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                user_name: data.user_name,
                user_email: data.email,
                user_password: data.password
              }
            ),
          }
        );

        const resData = await response.json()

        if( response.ok ) {
          alert("Registration success")
          console.log(resData)
        }else{
          alert("something is wrong")
        }

      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
        <div className='w-[48%] h-[85%] absolute left-0 bg-white/30 backdrop-blur-md border border-white/20 rounded-tr-2xl rounded-br-2xl p-8 shadow-lg flex items-center justify-center overflow-hidden'>
                  
            <div className='pt-3 w-[65%] h-[85%] border-2 rounded-3xl flex flex-col items-center justify-center border-none shadow-inner shadow-[#5a5959de] bg-[#f9e3c4] relative overflow-hidden'>
                    
                    <div className='w-full h-fit flex items-center justify-center gap-1 absolute top-7 right-0 p-3'>
                        <h1 className='text-3xl font-semibold' >Create Account</h1>
                        <FaPencil size={26} className='relative' />
                    </div>
                    
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className='w-full h-fit p-1 flex flex-col items-center justify-center gap-4 relative top-12 z-20' 
                    >
                    
                                  <div className='w-full flex items-center justify-center'>  
                                    <input 
                                        placeholder='Username' 
                                        {...register("user_name")} 
                                        className='placeholder:text-[#656363] font-sans px-6 w-[80%] h-12 border rounded-3xl text-2xl font-medium text-[#656363] border-[#6b3449d2]'  
                                        />
                                  </div>

                                  <div className='w-full flex items-center justify-center'>  
                                    <input 
                                        placeholder='Email' 
                                        {...register("email")} 
                                        className='placeholder:text-[#656363] font-sans px-6 w-[80%] h-12 border rounded-3xl text-2xl font-medium  text-[#656363] border-[#6b3449d2]'  
                                        />
                                  </div>
                    
                                  <div className='w-full flex items-center justify-center'>
                                    <input 
                                        placeholder='Password'
                                        {...register("password")} 
                                        className='placeholder:text-[#656363] font-sans px-6 w-[80%] h-12 border rounded-3xl text-2xl font-medium text-[#656363] border-[#6b3449d2]'    
                                        />
                                  </div>
                    
                                  <button
                                  type='submit'
                                    className='w-[70%] h-12 border rounded-4xl text-2xl font-bold font-sans bg-[#9c2754ee] transition duration-300 text-white hover:-translate-y-0.5 bg-[#9c2754fe] cursor-pointer '
                                  >
                                    create
                                  </button>
                                  
                                  <span className='flex gap-1 font-sans'>
                                    already have account?  
                                    <Link to={<LoginCard />} onClick={()=>setIsLogin(!isLogin)} className='text-blue-400 cursor-pointer transition duration-300 hover:text-blue-500'>
                                      login
                                    </Link>
                                  </span>
                                  
                    </form>

            </div>

        </div>
    </>
  )
}

export default Registration