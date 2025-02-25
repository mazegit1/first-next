import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="header bg-black flex items-center justify-between py-6 px-20">
        <div className="header-left text-white">
          <Link href="/" className="text-white text-5xl font-bold hover:text-gray-300 transition-colors">First | Next</Link>
        </div>
        <div className="header-right flex text-3xl items-center gap-8  text-white">
          <Link href="/" className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all ease-out duration-200">Home</Link>
          <Link href="/about" className="hover:text-purple-500 hover:border-b hover:border-b-purple-500 transition-all ease-out duration-200">About</Link>
          <Link href="/contact" className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all ease-out duration-200">Contact</Link>
          <Link href="/testimonials" className="hover:text-purple-500 hover:border-b hover:border-b-purple-500 transition-all ease-out duration-200">Testimonials</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
