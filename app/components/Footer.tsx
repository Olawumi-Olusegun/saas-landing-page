import React from 'react'
import XIcon from './../assets/icons/x-icon.svg';
import InstagramIcon from './../assets/icons/instagram-icon.svg';
import TikTokIcon from './../assets/icons/tiktok-icon.svg';
import YoutubeIcon from './../assets/icons/youtube-icon.svg';
import LinkdlinIcon from './../assets/icons/linkdlin-icon.svg';
import PinterestIcon from './../assets/icons/pinterest-icon.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-5 border-t border-t-white/10'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center sm:flex-row justify-between gap-5 px-4">
                <div className="text-white/30 text-sm">&copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved</div>
                <div className="">
                    <ul className='flex items-center gap-2'>
                        <li> <Image src={XIcon} alt='x-icon' className='h-6 w-6 cursor-pointer' /> </li>
                        <li> <Image src={InstagramIcon} alt='x-icon' className='h-6 w-6 cursor-pointer' /> </li>
                        <li> <Image src={TikTokIcon} alt='x-icon' className='h-6 w-6 cursor-pointer' /> </li>
                        <li> <Image src={PinterestIcon} alt='x-icon' className='h-6 w-6 cursor-pointer' /> </li>
                        <li> <Image src={LinkdlinIcon} alt='x-icon' className='h-6 w-6 cursor-pointer' /> </li>
                        <li> <Image src={YoutubeIcon} alt='x-icon' className='h-6 w-6 cursor-pointer' /> </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer