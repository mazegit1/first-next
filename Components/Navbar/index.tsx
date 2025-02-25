import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <div className="header bg-black flex items-center justify-between py-6 px-20">
        <div className="header-left  text-white">
          <Link href="/" className=" text-white">First | Next</Link>
        </div>
        <div className="header-right flex items-center gap-8 text-xl">
          <Link href="/" className=" text-white">Home</Link>
          <Link href="/about" className=" text-white">About</Link>
          <Link href="/contact" className=" text-white">Contact</Link>
          <Link href="/testimonials" className=" text-white">Testimonials</Link>
        </div>
      </div>
    </>
  )
}

export default index;
