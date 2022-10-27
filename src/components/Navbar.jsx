import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
 

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:opacity-[0.5] ease-in-out duration-500'>Home</li>
            <li className='p-4 cursor-pointer hover:opacity-[0.5] ease-in-out duration-500'>Company</li>
            <li className='p-4 cursor-pointer hover:opacity-[0.5] ease-in-out duration-500'>Resources</li>
            <li className='p-4 cursor-pointer hover:opacity-[0.5] ease-in-out duration-500'>About</li>
            <li className='p-4 cursor-pointer hover:opacity-[0.5] ease-in-out duration-500'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
     
        </div>
        <div className= {!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-[290ms]' : 'fixed left-[-100%] top-[-100%] w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer '>REACT.</h1>
            
            <ul className='pt-12 uppercase p-4' >
                <li className='p-4 border-b cursor-pointer hover:opacity-[0.65] ease-in-out duration-[100ms] border-gray-600 '>Home</li>
                <li className='p-4 border-b cursor-pointer hover:opacity-[0.65] ease-in-out duration-[100ms] border-gray-600 '>Company</li>
                <li className='p-4 border-b cursor-pointer hover:opacity-[0.65] ease-in-out duration-[100ms] border-gray-600 '>Resources</li>
                <li className='p-4 border-b cursor-pointer hover:opacity-[0.65] ease-in-out duration-[100ms] border-gray-600 '>About</li>
                <li className='p-4 cursor-pointer hover:opacity-[0.65] ease-in-out duration-500 border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar