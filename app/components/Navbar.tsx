
import React from 'react'
import logoImage from "./../assets/images/logo-saas.svg";
import MenuIcon from "./../assets/icons/menu.svg";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-black sticky z-10 top-0 left-0">
      <div className='px-4'>
        <div className="py-4 px-2 flex items-center justify-between">
          <Link href={"/"} className="relative h-12 w-12">
            {/* <div className="absolute  w-full top-1/2 -translate-y-1/2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md " /> */}
            <Image src={logoImage} alt='Saas logo' className='relative h-full w-full object-contain pointer-events-none' />
          </Link>
          <button type='button' className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <Image src={MenuIcon} alt='Menu Icon' className='cursor-pointer text-white' />
          </button>
          <nav className='sm:flex gap-6 items-center hidden'>
            <Link href={"/"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</Link>
            <Link href={"/"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</Link>
            <Link href={"/"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</Link>
            <Link href={"/"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</Link>
            <Link href={"/"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</Link>
            <button type='button' className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
          </nav>

        </div>
      </div>
    </div>
  )
}

export default Navbar