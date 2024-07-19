"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowWIcon from './../assets/icons/arrow-w.svg';
import CursorImage from './../assets/images/cursor.svg';
import MessageImage from './../assets/images/message.svg';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className='relative overflow-clip bg-black py-[72px] sm:py-24 text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)]  '>
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[760px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 bg-black border border-[#b48cde] bg-[radial-gradient(closest-side,#000_97%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] " />
        <div className="container relative">
            <div className="flex items-center justify-center">
                <Link href={"/"} className="inline-flex text-sm items-center group gap-x-1 border py-1 px-3 rounded-full border-white/30 ">
                    <span className='bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99)] from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]  '>Version 2.0 is here</span>
                    <span>Read More</span>
                    <Image src={ArrowWIcon} alt='arrow-icon' className='h-4 w-4 object-contain group-hover:translate-x-1 duration-300' />
                </Link>
            </div>
            <div className="flex justify-center mt-8">
                <div className="inline-flex relative">
                    <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex'>One Task <br/> at a Time</h1>
                    <motion.div 
                    drag
                    dragSnapToOrigin
                    className="absolute right-[476px] top-[108px] hidden sm:inline">
                        <Image src={CursorImage} alt='cursor-image' draggable={false} height="200" width="200" className='max-w-none' />
                    </motion.div>
                    <motion.div 
                    drag
                    dragSnapToOrigin
                    className="absolute left-[498px] top-[56px] hidden sm:inline">
                        <Image src={MessageImage} alt='message-image' draggable={false} height="200" width="200" className='max-w-none' />
                    </motion.div>
                </div>
            </div>
            <p className='text-center text-xl mt-8 max-w-md mx-auto'>
                Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts and celebrate your success.
            </p>
            <div className="flex justify-center mt-8">
                <button className='bg-white text-black font-medium py-3 px-5 rounded-lg'>Get for free</button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero