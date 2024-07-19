"use client";
import React, { useEffect, useRef } from 'react'
import AppScreenShot from "./../assets/images/appscreenshot.svg";
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";


const ProductShowCase = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end end']
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  // useEffect(() => {
  //   scrollYProgress.on("change", (latestValue) => console.log(`latestValue`, latestValue))
  // }, [])

  return (
    <div className='bg-black text-white py-[72px] bg-gradient-to-b from-black to-[#5d2cab] '>
        <div className="container mx-auto p-3 overflow-clip">
            <div className="w-full">
                <h2 className='text-center font-bold text-5xl sm:text-6xl '>Intuitive interface</h2>
            </div>
            <motion.div 
            style={{
              opacity,
              rotateX: rotateX,
              transformPerspective: "800px"
            }}
            className="rounded-md mt-20">
               <Image ref={imageRef} src={AppScreenShot} alt='application-screen-shot' className='pointer-events-none w-full h-full object-contain' />
            </motion.div>
        </div>
    </div>
  )
}

export default ProductShowCase