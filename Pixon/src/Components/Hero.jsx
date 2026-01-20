import React from 'react'
import { Play } from 'lucide-react';
import hero from '../assets/hero-img.png'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        < >
            <div className='text-white md:flex md:justify-center'>
                <div className='md:w-[70%] w-[90%] md:m-30 m-8 flex flex-col gap-2 md:gap-6 md:flex md:flex-col'>

                    <h3 className='text-xl md:text-3xl font-semibold '>Your Vision, My Design Expertise</h3>
                    <h1 className='text-4xl font-semibold md:text-7xl'><h2 className=' text-[#F0FF6C] font-semibold '>
                        <motion.h1
                            initial={{ x: "30%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 3,
                                ease: "easeOut",
                            }}
                            className="text-white text-5xl font-bold">
                            I'm James
                        </motion.h1>
                    </h2> product design based in USA</h1>
                    <p className='text-xl'>Hi, I’m James, a passionate Product Designer based in the USA. I specialize in crafting intuitive, user-centered designs that merge functionality with aesthetics, With a focus on creating seamless digital experiences.</p>
                    <div className='flex mt-5 gap-10'>
                        <button className='px-5 py-2 text-[#163031] font-semibold rounded-3xl bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C]'>Get Started</button>
                        <div className='flex gap-3'>
                            <Play className=' ' />
                            Watch Intro
                        </div>
                    </div>
                </div>

                <div>
                    <img className='md:w-200 md:mt-8' src={hero} alt="" />
                </div>


            </div>
            <div className="marquee-container w-full overflow-hidden bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] py-3">
                <div className="marquee-text whitespace-nowrap animate-marquee text-white text-3xl">
                    <h1> PRODUCT DESIGN     | MOBLIE APP DESIGN| DASHBOARD DESIGN | WEBSITE DESIGN |  </h1>
                </div>
            </div>






        </>

    )
}

export default Hero