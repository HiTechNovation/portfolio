import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink, FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"
import portfolioImg from "../assets/portfolio.png"
import hitechnovation from "../assets/HiTechNovation.png"


function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "V_BookStore Application",
      description:
        "v_BookStore is a modern, full-stack web application built using the MERN stack. It offers users a seamless platform to browse, search, and purchase books online. With a clean user interface, secure authentication, and dynamic book management features, v_BookStore delivers a smooth and responsive user experience for both readers and administrators.",
      image:
        "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/HiTechNovation/V_BookStore",
      demo: "https://v-bookstore.netlify.app/",
    },
    {
      id: 2,
      title: "HitechNovation- A digital Marketing Agency",
      description:
        "A sleek, responsive website for a digital marketing agency, highlighting services like SEO, social media, and content marketing. Designed for conversion and brand impact. task management application with real-time updates, user roles, and project organization features.",
      image: hitechnovation,
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/HiTechNovation/HiTechNovation",
      demo: "https://hitechnovation.netlify.app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with a modern design and smooth animations.",
      image: portfolioImg,
      technologies: ["React", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "V_Weather Application",
      description:
        "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      image: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*KYrYFzjUUlKSZlgFDzEEDg.png",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/HiTechNovation/v_weather",
      demo: "https://hitechnovation.github.io/v_weather/",
    },
    {
      id: 5,
      title: "RESTful API Service (Upcoming)",
      description:
        "A comprehensive RESTful API service for a blog platform with authentication, authorization, and CRUD operations.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Real-time Chat Application (Upcoming)",
      description:
        "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in different areas of
            web development.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {["all", "frontend", "backend", "fullstack"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === type
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    <FaGithub className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
          >
            View All Projects
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
