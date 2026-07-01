import React from 'react'
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form' 
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

import { FaRegUserCircle } from 'react-icons/fa'
import { SiMaildotru } from "react-icons/si";
import { GiBookmark } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { SiApacheairflow } from "react-icons/si";

const LoginCard = () => {

    const cardRef = useRef(false)

    const [isLogin, setIsLogin] = useState(false)

    useGSAP(()=>{
      
    }, [isLogin])
  
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async(data) => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5001/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                user_name: data.user_name,
                account_password: data.password
              }
            ),
          }
        );
  
        const resData = await response.json();
  
        if( response.ok ) {
          alert("user login successfull")
          const token = resData.token;
          localStorage.setItem("authToken", token)

        }else{
          console.log("Something wrong", resData);
        }
        console.log(resData);
  
      } catch ( error ) {
        alert(error)
      }
    }


  return (
    <>
      <div className='w-[48%] h-[85%] absolute right-0 bg-white/30 backdrop-blur-md border border-white/20 rounded-tl-2xl rounded-bl-2xl p-8 shadow-lg flex items-center justify-center overflow-hidden'>
          
          <div className='pt-3 w-[55%] h-[85%] border-2 rounded-3xl flex flex-col items-center justify-center border-none shadow-inner shadow-[#5a5959de] bg-[#f9e3c4] relative overflow-hidden'>
            
            <div className='absolute w-2 h-225 bg-[#9c2754ee] right-4 z-0'></div>
            <div className='absolute w-6 h-225 bg-[#9c2754] right-8 z-1 rotate-90 top-7'></div>

            <div className='w-full h-20  flex items-center justify-center relative -top-22 z-20'>

              <GiBookmark size={50} className='relative top-2 right-1' />

              <h1 className='text-4xl font-bold'>
                InkWell
                <p className='text-[16px] font-medium font-sans'>Read as you want</p>
              </h1>

            </div>
             
             <form 
              onSubmit={handleSubmit(onSubmit)}
              className='w-full h-fit p-1 flex flex-col items-center justify-center gap-4 relative -top-15 z-20' 
             >

              <div className='w-full flex items-center justify-center'>

                <span className='absolute left-13'>
                  < FaRegUserCircle size={30} className='text-[#656363]' />
                </span>

                <input 
                  placeholder='Username' 
                  {...register("user_name")} 
                  className='placeholder:text-[#656363] font-sans px-12 w-[80%] h-12 border rounded-2xl text-2xl font-medium rounded-bl-3xl z-20 rounded-tl-3xl text-[#656363] border-[#6b3449d2]'  
                />

              </div>

              <div className='w-full flex items-center justify-center'>

              <span className='absolute left-13'>
                < SiMaildotru size={30} className='text-[#656363]' />
              </span>

              <input 
                placeholder='Password'
                {...register("password")} 
                className='placeholder:text-[#656363] font-sans px-12 w-[80%] h-12 border rounded-2xl text-2xl font-medium rounded-bl-3xl rounded-tl-3xl text-[#656363] border-[#6b3449d2]'    
                />
              
              </div>

              <button
                className='w-[70%] h-12 border rounded-4xl text-2xl font-bold font-sans bg-[#9c2754ee] transition duration-300 text-white hover:-translate-y-0.5 bg-[#9c2754fe] cursor-pointer '
              >
                Log In
              </button>
              
              <span className='flex gap-1 font-sans'>
                don't have account?  
                <a href="#" onClick={()=>setIsLogin(!isLogin)} className='text-blue-400 cursor-pointer transition duration-300 hover:text-blue-500'>
                  create here
                </a>
              </span>
              
            </form>

            <div className='w-full h-10 py-2.5 flex items-center justify-center font-semibold font-sans absolute bottom-30 gap-1'>
              <span>
                <BsThreeDots size={25} />
              </span>
              OR
              <span>
                <BsThreeDots size={25} />
              </span>
            </div>

            <div className='w-full h-35 absolute bottom-7 px-11 flex items-center justify-center gap-6'>
                <a href="#">
                    <AiFillInstagram size={35} className='text-[#656363] cursor-pointer w-10 h-10 border p-1 rounded-[50%] shadow-black inset-1 transition-all duration-200 hover:rounded-xl' />
                </a> 

                <a href="#">
                    <RiWhatsappFill size={35} className='text-[#656363] cursor-pointer w-10 h-10 border p-1 rounded-[50%] shadow-black inset-1 transition-all duration-200 hover:rounded-xl' />
                </a>

                <a href="#">
                    <BsGoogle size={35} className='text-[#656363] cursor-pointer w-10 h-10 border p-1 rounded-[50%] shadow-black inset-1 transition-all duration-200 hover:rounded-xl' />
                </a>
            </div>
          </div>
        </div>

        {/* <div className='w-[50%] h-[50%] flex flex-col items-center justify-center text-white'>
          <h1 
            className='w-full h-40 flex items-center text-[100px] font-bold relative left-10 top-12 text-shadow-lg text-white transition-all duration-75 hover:text-transparent [-webkit-text-stroke:2px_white]'
          >Read.</h1>
          <h1 
            className='w-full h-40 flex items-center text-[100px] font-bold relative left-10 text-white transition-all duration-75 hover:text-transparent [-webkit-text-stroke:2px_white]'
          >Dream.</h1>
          <h1 
            className='w-full h-40 flex items-center text-[100px] font-bold relative left-10 -top-12 text-white transition-all duration-75 hover:text-transparent [-webkit-text-stroke:2px_white]'
          >Repeat.</h1>     
        </div> */}
    </>
  )
}

export default LoginCard