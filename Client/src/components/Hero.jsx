import { useEffect, useState } from "react"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600">Vivek Sharma</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I build exceptional and accessible digital experiences for the web. Specialized in developing modern, full-stack applications using the MERN stack — MongoDB, Express.js, React, and Node.js — along with responsive design powered by Tailwind CSS and JavaScript.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/HiTechNovation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors"
            >
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vivek-sharma-b1309825b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="https://wa.me/918006869258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              <FaWhatsapp />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Hero
