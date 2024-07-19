"use client";
import Image from 'next/image'
import React from 'react'
import AcmeLogo from './../assets/images/acme.svg';
import QuantumLogo from './../assets/images/quantum.svg';
import EchoLogo from './../assets/images/echo.svg';
import CelestialLogo from './../assets/images/celestia.svg';
import PulseLogo from './../assets/images/pulse.svg';
import ApexLogo from './../assets/images/apex.svg';
import { motion } from "framer-motion";


const companyLogos = [
    {src: AcmeLogo, alt: "Acme Logo"},
    {src: QuantumLogo, alt: "Quantum Logo"},
    {src: EchoLogo, alt: "Echo Logo"},
    {src: CelestialLogo, alt: "Celestial Logo"},
    {src: PulseLogo, alt: "Pulse Logo"},
    {src: ApexLogo, alt: "Apex Logo"},
];

const LogoTicker = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
        <div className="container mx-auto">
            <h2 className="text-center text-xl text-white/70 ">Trusted by the world{"'"}s most innovative teams</h2>
            <div className="flex overflow-hidden mt-9 before:z-10 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-8 after:w-8 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
                <motion.div 
                initial={{ translateX: 0 }}
                animate={{ translateX: "-50%" }}
                transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity
                }}
                className="flex gap-16 flex-none pr-16">
                    {
                        companyLogos.map((imageSrc, index) => {
                            return <Image key={index} src={imageSrc.src} alt={imageSrc.alt} className='flex-none h-8 w-auto pointer-events-none' />
                        })
                    }
                    {
                        companyLogos.map((imageSrc, index) => {
                            return <Image key={index} src={imageSrc.src} alt={imageSrc.alt} className='flex-none h-8 w-auto pointer-events-none' />
                        })
                    }                    
                                     
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker