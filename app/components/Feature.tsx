"use client";
import React, { useEffect, useRef } from 'react'
import { FeatureProps } from './Features'
import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";


const Feature = ({feature, imgSrc}: {feature: FeatureProps, imgSrc: string}) => {

    
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const borderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
            if(!borderRef.current) return;
            const borderRect = borderRef.current.getBoundingClientRect();
            offsetX.set(event.x - borderRect.x);
            offsetY.set(event.y - borderRect.y);
        }
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);  
        }
    }, [])
  return (
    <div className="relative w-full max-w-[360px] mx-auto border border-white/30 px-5 py-10 text-center rounded-xl">
        <motion.div ref={borderRef} className="absolute inset-0 border-2 border-purple-400 rounded-xl" 
            style={{ 
            maskImage,
            WebkitMaskImage: maskImage,
            }}>

        </motion.div>
        <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
            <Image src={imgSrc} alt='ecosystem icon' />
        </div>
        <h3 className='mt-6 font-bold'>{feature.title}</h3>
        <p className='mt-2 text-white/70'>{feature.description}</p>
    </div>
  )
}

export default Feature