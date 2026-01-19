import React from 'react'
import logo from '../assets/logo.svg'
const Navbar = () => {
    return (
        <div className='w-full h-24  flex justify-evenly items-center '>
            {/* logo */}
            <div className='text-center'>
                <img className='text-center p-5' src={logo} alt="" />
            </div>
            {/* Navbar */}
            <div className='flex text-xl font-bold gap-10 list-none text-white px-12  py-5 rounded-4xl bg-[#FFFFFF0F]'>
                <li className='decoration-0'>Home</li>
                <li>About Us</li>
                <li>Servics</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact </li>

            </div>
            {/* Menu */}
            <div>
                <button className=' bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-4xl font-semibold px-5 py-4'>DOWNLOAD CV</button>
            </div>
        </div>
    )
}

export default Navbar