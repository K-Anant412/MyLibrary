import React from 'react'
import Navbar from '../Navbar'
import { useForm } from 'react-hook-form'
import { TbSearch } from 'react-icons/tb'


const  Home= () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <section className='w-full h-full flex items-center justify-center flex-col overflow-y-scroll scrollbar-none'>
          
          <div className='w-[87%] h-15 absolute top-10 left-43'>
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className='w-full h-full items-center flex gap-1.5'
              >
                
                <input 
                  placeholder='search book' 
                  {...register("search", {required:true})} 
                  className='w-[94%] h-full px-5 border border-[#D4C37C] bg-amber-50 rounded-3xl text-[26px] font-semibold
                   shadow-[10px_10px_20px_rgba(0,0,0,0.3)]'
                />

                <button className='w-15 h-15 flex border-[#D4C37C] items-center justify-center border rounded-[50%] relative shadow-[10px_10px_20px_rgba(0,0,0,0.3)] bg-amber-50'>
                  <TbSearch size={40} className='text-[#D4C37C]' />
                </button>

              </form>
          </div>

          <div className='w-full h-full'>
            <div className='relative top-30 flex gap-2 flex-col justify-center p-3.5 w-full h-95'>
              
              <h1 className='border border-[#D4C37C] w-60 h-12 rounded-2xl items-center text-[24px] bg-amber-50 font-semibold flex justify-center shadow-2xl' >New Arrivals</h1>
              
              <div className='w-full h-70 border-2 border-[#D4C37C] rounded-2xl bg-amber-100 shadow-2xl'>

              </div>
            </div>
          </div>  
          
      </section>
    </>
  )
}

export default Home 