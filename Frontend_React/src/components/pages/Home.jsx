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
      <section className='w-full h-full bg-green-200 flex items-center justify-center flex-col overflow-y-scroll scrollbar-none'>
          
          <div className='w-[97%] h-15 relative -top-85'>
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
          
      </section>
    </>
  )
}

export default Home 