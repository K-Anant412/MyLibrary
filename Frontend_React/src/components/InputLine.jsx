import React from 'react'

const InputLine = (
    {
        lable,
        icon: Icon,
        type = "text",
        name,
        value,
        onChange,
        placeholder
    }
    ) => {
  return (
    <>
        <span className='w-[72%] relative'>
                  
            <p className='text-[16px] font-medium px-2 text-[#0D530E] relative left-4 top-0.4'>{lable}</p>
        
                {Icon &&
                    <Icon 
                        size={14} 
                        className='absolute text-[#0D530E] top-1.5 left-1' 
                        />
                }
                    
                <input 
                    type={type} 
                    name={name} 
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
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
    </>
  )
}

export default InputLine