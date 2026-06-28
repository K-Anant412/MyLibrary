import React from 'react'



const LoginCard = () => {


  return (
    <>
      <div className='w-[48%] h-[85%] absolute right-0 bg-white/30 backdrop-blur-md border border-white/20 rounded-tl-2xl rounded-bl-2xl p-8 shadow-lg flex items-center justify-center overflow-hidden'>
          
          <div className='pt-3 w-[55%] h-[85%] border-2 rounded-3xl flex flex-col items-center justify-center border-none shadow-inner shadow-[#5a5959de] bg-[#f9e3c4] relative overflow-hidden'>
            
            <div className='absolute w-2 h-225 bg-[#9c2754ee] right-4 z-0'></div>
            <div className='absolute w-6 h-225 bg-[#9c2754] right-8 z-1 rotate-90 top-10'></div>

            <div className='w-full h-20  flex items-center justify-center relative -top-22 z-20'>

              <GiBookmark size={50} className='relative top-2 right-1' />

              <h1 className='text-4xl font-bold'>
                InkWell
                <p className='text-[16px] font-medium font-sans'>Read as you want</p>
              </h1>

            </div>
             
             <form 
              className='w-full h-fit p-1 flex flex-col items-center justify-center gap-4 relative -top-15 z-20' 
             >

              <div className='w-full flex items-center justify-center'>

                <span className='absolute left-13'>
                  < FaRegUserCircle size={30} className='text-[#656363]' />
                </span>

                <input 
                  placeholder='Username' 
                  {...register("username")} 
                  className='placeholder:text-[#656363] px-12 w-[80%] h-12 border rounded-2xl text-2xl font-bold rounded-bl-3xl z-20 rounded-tl-3xl border-[#6b3449d2]'  
                />

              </div>

              <div className='w-full flex items-center justify-center'>

              <span className='absolute left-13'>
                < SiMaildotru size={30} className='text-[#656363]' />
              </span>

              <input 
                placeholder='Email'
                {...register("email")} 
                className='placeholder:text-[#656363] px-12 w-[80%] h-12 border rounded-2xl text-2xl font-bold rounded-bl-3xl rounded-tl-3xl text-[#656363] border-[#6b3449d2]'    
                />
              
              </div>

              <button
                className='w-[70%] h-12 border rounded-4xl text-2xl font-bold font-sans bg-[#9c2754ee] transition duration-300 text-white hover:-translate-y-0.5 bg-[#9c2754fe] cursor-pointer '
                onClick={handleSubmit(onSubmit)}
              >
                Log In
              </button>
              
              <span className='flex gap-1 font-sans'>
                don't have account?  
                <a href="#" className='text-blue-400 cursor-pointer transition duration-300 hover:text-blue-500'>
                  create here
                </a>
              </span>
              
            </form>

            <div className='w-full h-10 py-2.5 flex items-center justify-center font-semibold font-sans absolute bottom-36 gap-1'>
              <span>
                <BsThreeDots size={25} />
              </span>
              OR
              <span>
                <BsThreeDots size={25} />
              </span>
            </div>

            <div className='w-full h-35 absolute bottom-12 px-11 flex items-center justify-center gap-6'>
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
    </>
  )
}

export default LoginCard