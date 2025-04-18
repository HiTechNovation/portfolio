"use client"

import { useState, useEffect, useRef } from "react"

function Projects() {
  const [filter, setFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB featuring user authentication, product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user roles, and project organization features.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with a modern design and smooth animations.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "RESTful API Service",
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
      title: "Real-time Chat Application",
      description: "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-gray-800">
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
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "frontend"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "backend"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setFilter("backend")}
            >
              Backend
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "fullstack"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setFilter("fullstack")}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full flex flex-col ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
          >
            View All Projects
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
        </div>
      </div>
    </section>
  )
}

export default Projects
