"use client"

import { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
        <a
  href="/"
  className="relative group text-2xl font-bold text-gray-900 dark:text-white"
>
  Portfolio
  <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 mt-1 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:scale-105 active:scale-95  dark:hover:text-white border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
            <a
             target="_blank"
              href="https://drive.google.com/file/d/1O7Gr5kwpJEqpn-jUkfJqJHWFNs0Bl22U/view?usp=sharing "
              className="px-4 py-2 mt-0  bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors active:scale-90 hidden md:flex"
            >
              Resume
            </a>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <HiMenu className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
              href="https://drive.google.com/file/d/1O7Gr5kwpJEqpn-jUkfJqJHWFNs0Bl22U/view?usp=sharing"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
