import React from 'react'

const SearchBar = () => {
  return (
    <>
        <section className='w-[80%] h-20 flex items-center p-1.5 border-2 bg-amber-50 absolute right-auto rounded-3xl border-amber-50 shadow-lg'> 
            <input type="text" placeholder='Search books..' className='w-[80%] h-[80%] border ml-1 pl-2 rounded-3xl'  />
        </section>
    </>
  )
}

export default SearchBar