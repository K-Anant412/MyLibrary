import React from 'react'

const SearchBar = () => {
  return (
    <>
        <section className='w-[80%] h-20 flex items-center p-1.5 border-[#b02f61ee] absolute right-auto rounded-4xl shadow-lg'> 
            <input type="text" placeholder='Search books..' className='w-[90%] h-[80%] border ml-1 pl-2 rounded-3xl text-[20px] font-sans placeholder:text-2xl font-sans bg-amber-50'  />
            <button type="submit" className='h-[60%] w-25 border rounded-[10px] text-2xl font-sans font-semibold flex items-center justify-center relative left-2.5 bg-blue-300 transition-all duration-150 hover:bg-blue-400'>search</button>
        </section>
    </>
  )
}

export default SearchBar