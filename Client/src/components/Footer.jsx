import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              A passionate Full Stack Web Developer building modern and responsive web applications with React, Tailwind
              CSS, and JavaScript.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 p-2 rounded-full hover:text-blue-600 transition-colors text-gray-900 dark:text-white"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 p-2 rounded-full hover:text-blue-600 transition-colors text-gray-900 dark:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 p-2 rounded-full hover:text-blue-600 transition-colors text-gray-900 dark:text-white"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:john@example.com"
              className="bg-white dark:bg-gray-900 p-2 rounded-full hover:text-blue-600 transition-colors text-gray-900 dark:text-white"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Vivek Sharma. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
