import { FiDownload } from "react-icons/fi"
import { motion } from "framer-motion"
import IMG from "../assets/IMG.jpg"

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center overflow-x-hidden">
          <motion.div
     initial={{ opacity: 0, x: 20 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 1.5 }}
     viewport={{ once: true, amount: 0.3}}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-blue-600 translate-x-4 translate-y-4 rounded-lg"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <img src={IMG} alt="Vivek Sharma" className="object-cover w-full h-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Full Stack Developer based in India
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a dedicated MERN Stack Developer with a strong grasp of MongoDB, Express.js, React,
              and Node.js. As a fresher, I've worked on several personal and academic projects that
              demonstrate my ability to build full-stack web applications with clean architecture
              and responsive design. I'm enthusiastic about writing efficient code, learning new
              technologies, and contributing to dynamic development teams.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in web development began during my Computer Science studies,
              where I developed a strong foundation in full-stack development using the MERN stack.
              Through personal projects and continuous learning, I've built hands-on experience in
              developing user-friendly and scalable web applications. I'm passionate about staying 
              updated with the latest technologies and best practices to grow as a modern web developer.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-8 ">
              <div>
                <p className="text-gray-900 dark:text-white">
                  <strong>Name:</strong> Vivek Sharma
                </p>
                <p className="text-gray-900 dark:text-white">
                  <strong>Email:</strong> Viveksharma.code@gmail.com
                </p>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white">
                  <strong>Location:</strong> UP, India
                </p>
                <p className="text-gray-900 dark:text-white">
                  <strong>Availability:</strong> Freelance/Full-time
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1O7Gr5kwpJEqpn-jUkfJqJHWFNs0Bl22U"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <FiDownload className="h-5 w-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
