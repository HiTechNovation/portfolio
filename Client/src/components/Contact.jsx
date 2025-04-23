import { useState } from "react"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { motion } from "framer-motion"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <MdEmail className="w-10 h-10 text-blue-600" />,
      title: "Email",
      content: "Viveksharma.code@gmail.com",
      link: "mailto:viveksharma.code@gmail.com",
    },
    {
      icon: <MdPhone className="w-10 h-10 text-blue-600" />,
      title: "Phone",
      content: "+91 8006869258",
      link: "tel:+918006869258",
    },
    {
      icon: <MdLocationOn className="w-10 h-10 text-blue-600" />,
      title: "Location",
      content: "UP, India",
      link: "https://maps.google.com/?q=UP+India",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                    <FaFacebookF className="w-5 h-5 text-gray-900 dark:text-white" />
                  </a>
                  <a href="#" className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                    <FaTwitter className="w-5 h-5 text-gray-900 dark:text-white" />
                  </a>
                  <a href="#" className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                    <FaLinkedinIn className="w-5 h-5 text-gray-900 dark:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-medium text-gray-900 dark:text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-900 dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-900 dark:text-white">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-900 dark:text-white">Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex gap-2"
            >
              Send Message <FiSend className="w-4 h-4 mt-1.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
