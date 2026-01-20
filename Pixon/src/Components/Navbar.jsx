import React from 'react'
import logo from '../assets/logo.svg'
import { SquareMenu } from 'lucide-react';
const Navbar = () => {
    return (
        <>
              <div className='w-full h-28  flex justify-between p-3 md:justify-evenly items-center '>
            {/* logo */}
            <div className=''>
                <img className=' p-5' src={logo} alt="" />
            </div>
            {/* Navbar */}
            <div className=' hidden md:flex md:text-xl md:font-bold md:gap-10 list-none text-white md:px-12  md:py-5 md:rounded-4xl md:bg-[#FFFFFF0F]'>
                <li className='hover:text-[#6BFDD9]'>Home</li>
                <li className='hover:text-[#6BFDD9]'>About Us</li>
                <li className='hover:text-[#6BFDD9]'>Servics</li>
                <li className='hover:text-[#6BFDD9]'>Blog</li>
                <li className='hover:text-[#6BFDD9]'>Pages</li>
                <li className='hover:text-[#6BFDD9]'>Contact </li>

            </div>
            {/* Menu */}
            <div>
                <button className="hidden md:block bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-4xl font-semibold px-5 py-4">
                    DOWNLOAD CV
                </button>

                <div>
                    <button className="md:hidden bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] p-1">
                        <SquareMenu />
                    </button>
                </div>
            </div>
          

        </div>
        <hr className='text-amber-100 h-1 ' /></>
  
          
    )
}

export default Navbar