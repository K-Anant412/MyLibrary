import React from 'react'
import { useState } from 'react';
import { FaWhatsapp, FaUserCircle } from 'react-icons/fa'
import { MdKey } from "react-icons/md";
import { GiMonsteraLeaf } from "react-icons/gi"
import { FaInstagram } from 'react-icons/fa'
import { BiSolidLeaf } from "react-icons/bi"

const Login = ({showRegister, onSuccess}) => {

  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: userName,
          account_password: userPassword,
        }),
      });

      const data = await response.json();

      if(response.ok){
        onSuccess()
      }

      console.log(data);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
        <div className='w-[35%] h-[84%] border-5 rounded-4xl border-[#E7E1B1] z-50 relative left-[-350px] bg-[#FBF5DD] flex flex-col items-center justify-center gap-2.5 shadow-2xl shadow-black/50'>
        
        {/* Header box_____________________________________________________________________________________________________________________________________ */}
        <div className='w-full h-17.5 flex flex-col items-center justify-center relative top-[-20px]'>

          <h1 className='text-[38px] font-bold font-[DM_Serif_Text] flex items-center justify-center'>
            Welcome Back
            < BiSolidLeaf size={40} />
            .
          </h1>
          <h3 className='text-[16px] relative -left-1.5'>Log in to continue your journey.</h3>

        </div>
        
        {/* Input box_____________________________________________________________________________________________________________________________________ */}
        <div className='w-full h-fit gap-2.5 flex items-center justify-center flex-col'>

          <span className='w-[72%] relative'>
          
          <p className='text-[16px] font-medium px-2 text-[#0D530E] relative left-4 top-0.4'>Username</p>

            <FaUserCircle size={14} className='absolute text-[#0D530E] top-1.5 left-1' />
            
            <input 
            type="text" 
            name='username' 
            value={userName}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Your username'
            className='
            w-full 
            h-12 
            border-2 
            flex 
            justify-center 
            px-2.5 
            text-[18px] 
            rounded-2xl 
            border-[#E7E1B1] 
            focus:outline-none
            focus: border-[#0d530E]
            focus: ring-2
            focus: ring-[#0D530E]/20
            '/>

          </span>

          <span className='w-[72%] relative'>
          
          <p className='text-[16px] font-medium px-2 text-[#0D530E] relative left-4 top-0.4'>Password</p>
            <MdKey size={14} className='absolute text-[#0D530E] top-1.5 left-1' />
            <input 
            type="password" 
            name="password" 
            value={userPassword}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder=' Your password'
            className='
            w-full 
            h-12 
            border-2 
            flex 
            justify-center 
            px-2.5 
            text-[18px] 
            rounded-2xl
            border-[#E7E1B1] 
            focus:outline-none
            focus: border-[#0d530E]
            focus: ring-2
            focus: ring-[#0D530E]/20
            '/>

          </span>

        </div>

        {/* Input footer box_____________________________________________________________________________________________________________________________________ */}
        <div className='h-10 w-[70%] flex items-center justify-between'>

          <span className='flex items-center gap-1'>
            <input type="checkbox" name="rembere me" className='accent-green-600 w-4 h-4'/>
            <label htmlFor="rembere me" >Remember me</label>
          </span>

          <h2 className='text-center text-[#0D530E] font-medium'>Forgot Password?</h2>

        </div>

        {/* Submit button_____________________________________________________________________________________________________________________________________ */}
        <button 
        onClick={handleLogin}
        className='
        w-[70%] 
        h-12.5 
        border-[1.5px] 
        border-[#0D530E] 
        rounded-2xl 
        flex 
        justify-center 
        items-center 
        text-[30px] 
        font-bold 
        text-[#FBF5DD]
        bg-[#0D530E]
        shadow-lg shadow-[#0D530E]/30
        cursor-pointer 
        transition-all 
        duration-300 
        hover:-translate-y-1 
        hover:shadow-xl 
        active:translate-y-0'>
        Log in
        </button>
      
        {/* _____________________________________________________________________________________________________________________________________ */}
        <div className="flex items-center my-4 w-[70%] h-fit">

          <div className="grow border-t border-[#E7E1B1]"></div>
          <span className="mx-4 text-[#0D530E] text-sm font-medium"> Or login with</span>
          <div className="grow border-t border-[#E7E1B1]"></div>

        </div>

        {/* Other Options_____________________________________________________________________________________________________________________________________ */}
        <div className='w-[70%] h-11.25 flex items-center justify-around relative -top-2.5'>

          <button className='w-[40%] h-11 border border-[#E7E1B1] rounded-2xl text-[22px] font-medium bg-[#E7E1B1] text-[#0D530E] flex items-center justify-center shadow-black inset-shadow-sm shadow-xl/15 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0'> 
            <FaWhatsapp size={30} className='relative -left-0.5' />
            Whatsapp 
          </button>
          <button className='w-[40%] h-11 border border-[#E7E1B1] rounded-2xl text-[22px] font-medium bg-[#E7E1B1] text-[#0D530E] flex items-center justify-center shadow-black inset-shadow-sm shadow-xl/15 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0'>
            <FaInstagram size={30} className='relative -left-0.5' />
            Instagram
          </button>
        
        </div>

        {/* Footer box_____________________________________________________________________________________________________________________________________ */}
        <p className='h-7.5 w-[70%] text-center text-[18px] mt-3 relative -top-4'>
          Don't have account?
          <button
            onClick={showRegister}
            className='ml-1 text-[19px] font-bold cursor-pointer text-[#0D530E] hover:underline'
          >
            Register
          </button>
        </p>
      </div>
    </>
  )
}

export default Login