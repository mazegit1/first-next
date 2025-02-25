"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRegCheckCircle } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let formErrors = { name: '', email: '', message: '' }

    if (!formData.name) formErrors.name = 'Name is required'
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Valid email is required'
    if (!formData.message) formErrors.message = 'Message is required'

    if (formErrors.name || formErrors.email || formErrors.message) {
      setErrors(formErrors)
    } else {
      setPopupMessage('Form submitted successfully!')
      setShowPopup(true)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="bg-gray-100 text-black min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl border-2 border-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-gray-50 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border-2 border-purple-300"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-gray-50 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border-2 border-purple-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-gray-50 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border-2 border-purple-300"
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 text-white rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRegCheckCircle className="inline-block mr-2" />
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-2xl w-80 text-center border-2 border-purple-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-lg font-semibold text-gray-800"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FaRegCheckCircle className="inline-block text-green-500 mr-2" />
              {popupMessage}
            </motion.p>
            <motion.button
              onClick={handleClosePopup}
              className="mt-4 py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 text-white rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoCloseCircleOutline className="inline-block mr-2" />
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ContactPage
