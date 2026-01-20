import React from 'react'
import { Play } from 'lucide-react';
import hero from '../assets/hero-img.png'
const Hero = () => {
    return (
        <div className='text-white md:flex md:justify-center'>
            <div className='md:w-[70%] w-[90%] md:m-30 m-8 flex flex-col gap-2 md:gap-6 md:flex md:flex-col'>

                <h3 className='text-xl md:text-3xl font-semibold '>Your Vision, My Design Expertise</h3>
                <h1 className='text-4xl font-semibold md:text-7xl'><h2 className=' text-[#F0FF6C] font-semibold '>I'm james,</h2> product design based in USA</h1>
                <p className='text-xl'>Hi, I’m James, a passionate Product Designer based in the USA. I specialize in crafting intuitive, user-centered designs that merge functionality with aesthetics, With a focus on creating seamless digital experiences.</p>
                <div className='flex mt-5 gap-10'>
                    <button className='px-5 py-2 text-[#163031] font-semibold rounded-3xl bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C]'>Get Started</button>
                    <div className='flex gap-3'>
                        <Play className=' '/>
                        Watch Intro
                    </div>
                </div>
            </div>

            <div>
                <img className='md:w-150 md:mt-10' src={hero} alt="" />
            </div>
        </div>
    )
}

export default Hero