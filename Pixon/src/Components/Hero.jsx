import React from 'react'
import { Play } from 'lucide-react';
import hero from '../assets/hero-img.png'
const Hero = () => {
    return (
        <div className='text-white'>
            <h3 className='text-xl'>Your Vision, My Design Expertise</h3>
            <h1 className='text-5xl'><h2>I'm james,</h2> product design based in USA</h1>
            <p>Hi, I’m James, a passionate Product Designer based in the USA. I specialize in crafting intuitive, user-centered designs that merge functionality with aesthetics, With a focus on creating seamless digital experiences.</p>
            <div>
                <button>Get Started</button>
                <div>
                    <Play />
                    Watch Intro
                </div>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>



        </div>
    )
}

export default Hero