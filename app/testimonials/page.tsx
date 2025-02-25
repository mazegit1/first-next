"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'  // Import Image from Next.js
import johndoe from '@/images/johndoe.jpg'  // Ensure the path is correct

const testimonials = [
  {
    name: "John Does",
    role: "Software Engineer",
    image: johndoe,
    message: "This is the best platform I have ever used! Highly recommend it to everyone."
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    image: johndoe,
    message: "Amazing service, smooth user experience, and really easy to integrate. Loved it!"
  },
  {
    name: "Michael Johnson",
    role: "Web Developer",
    image: johndoe,
    message: "A truly remarkable product! It has boosted my productivity. Worth every penny!"
  },
  {
    name: "Sara Williams",
    role: "UI/UX Designer",
    image: johndoe,
    message: "The best user interface I've worked with. Simple, clean, and highly effective."
  }
]

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center text-black px-6 py-16">
      {/* Header Section */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r h-20 from-purple-600 to-blue-800">What Our Clients Say</h1>
        <p className="text-lg mt-6 text-gray-500 max-w-xl mx-auto">We are committed to providing the best service to our clients. Here's what they have to say:</p>
      </motion.div>

      {/* Testimonials Section */}
      <div className="w-full max-w-3xl bg-purple-50 p-10 rounded-xl shadow-2xl relative">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-xl text-center">
          <motion.div
  className="mx-auto w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-105"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <Image
    src={testimonials[currentIndex].image}
    alt={testimonials[currentIndex].name}
    layout="intrinsic"
    width={660}  // Çəkilin enini müəyyən et
    height={660} // Çəkilin hündürlüyünü müəyyən et
  />
</motion.div>

            <h3 className="text-3xl font-semibold mt-6 text-purple-800">{testimonials[currentIndex].name}</h3>
            <p className="text-lg text-lightblue-600">{testimonials[currentIndex].role}</p>
            <p className="mt-6 text-lg text-gray-700 italic">{`"${testimonials[currentIndex].message}"`}</p>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-purple-700 cursor-pointer hover:text-lightblue-500 transition duration-300"
          onClick={prevTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoIosArrowBack />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-purple-700 cursor-pointer hover:text-lightblue-500 transition duration-300"
          onClick={nextTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoIosArrowForward />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-500">Join our community and see how we can help you grow your business.</p>
        <motion.button
          className="mt-8 py-3 px-10 bg-gradient-to-r  from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-600 text-white rounded-full text-xl transition-all duration-300 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>
      </motion.div>
    </div>
  )
}

export default TestimonialsPage
