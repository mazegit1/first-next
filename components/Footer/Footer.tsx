import React from 'react'
import { FaGithub, FaLinkedin, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className="footer border-t-2 border-t-black flex items-center justify-between px-20 py-6">
      <div className="footer-title ">
       <Link href="/" className='text-5xl font-bold'>Next | Mazegit</Link>
      </div>
      <div className="footer-links flex items-center gap-12">
      <Link  href="https://github.com/mazegit1"><FaGithub  className='hover:scale-125 transition-all ease-out duration-300 hover:rotate-[360deg] hover:text-gray-600 text-4xl'/></Link>
      <Link  href="https://www.linkedin.com/in/huseyn-xalil-7022262bb/"><FaLinkedin  className='hover:scale-125 transition-all ease-out duration-300 hover:rotate-[360deg] hover:text-blue-500 text-4xl'/></Link>
      <Link  href="https://t.me/mazegit"><FaTelegramPlane  className='hover:scale-125 transition-all ease-out duration-300 hover:rotate-[360deg] hover:text-blue-700 text-4xl'/></Link>
      <Link  href="https://www.instagram.com/xelil_ovw/"><FaInstagram className='hover:scale-125 transition-all ease-out duration-300 hover:rotate-[360deg] hover:text-purple-500 text-4xl' /></Link>
      </div>
    </div>
    </>
  )
}

export default Footer;
