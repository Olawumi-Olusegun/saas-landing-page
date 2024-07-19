"use client";
import React, { useRef } from 'react'
import Helix2 from './../assets/images/helix2.svg';
import EmojiStar from './../assets/images/emojistar.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";


const CallToAction = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ['start end', 'end end'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);


  return (
    <div ref={divRef} className='bg-black text-white py-[72px] sm:py-32 text-center overflow-hidden'>
        <div className="container relative max-w-xl mx-auto px-4 ">
          <motion.div style={{ translateY }} className="absolute pointer-events-none hidden sm:block -top-[120px] md:right-[100%] sm:right-[calc(100%+24px)] ">
            <Image src={EmojiStar} alt='emoji-star-image' className='max-w-none' />
          </motion.div>
          <motion.div className="absolute pointer-events-none hidden sm:block top-6 md:left-[100%] sm:left-[calc(100%+36px)] ">
            <Image src={Helix2} alt='helix-image' className='max-w-none' />
          </motion.div>
        <h2 className='text-center font-bold text-4xl sm:text-6xl'>Get Instant access</h2>
        <p className='w-full  text-white/70 max-w-[447px] mx-auto mt-5 '>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <form className='mt-10 flex flex-col sm:max-w-sm sm:flex-row mx-auto  gap-2.5'>
            <input className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1' type="email" name="email" id="email" placeholder='name@email.com' />
            <button type='button' className='bg-white text-black rounded-lg h-12 px-5'>Get access</button>
        </form>
        </div>
    </div>
  )
}

export default CallToAction