"use client"

import { useEffect, useState, useRef } from "react"
import { HiBriefcase } from "react-icons/hi"
import { IoSchool } from "react-icons/io5"

function Experience() {
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

  const workExperience = [
    {
      title: "MERN Stack Developer & UI Enthusiast",
      company: "Personal & Open Source Projects",
      period: "Present",
      description:
        "Building full-stack applications using MongoDB, Express.js, React, and Node.js. Focused on clean UI/UX using TailwindCSS and building clones of real-world applications like Flipkart, BookStore, and weather apps.",
    },
    {
      title: "MERN Stack Developer Intern:",
      company: "Skilled-up (NB Plaza, Sector 1, Greater Noida West, UP ).",
      period: "2024 - 2025",
      description:
"      Collaborated with a team to build and deploy responsive, scalable applications."    },
  ]

  const education = [
    {
      degree: "Master in computer applications (MCA)",
      institution: "Dr. A.P.J. Abdul Kalam Technical University Lucknow (UP, India)",
      period: "2022-2024",
      description:
        "Diving deep into Node.js, Express, MongoDB, and React. Learning production standards, optimization, and interview-level knowledge.",
    },
    {
      degree: "O Level",
      institution: "National Institute of Electronics & Information Technology (New Delhi)" ,
      period: "2021-2022",
      description:
        "Learned programming fundamentals, data structures, and participated in competitive programming and software development projects.",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <HiBriefcase className="text-blue-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-blue-600/30 pl-8 ml-3">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={`mb-12 relative transform transition-all duration-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[2.55rem] top-1.5 border-4 border-white dark:border-gray-900"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h4>
                    <div className="flex flex-wrap justify-between mb-2">
                      <p className="text-blue-600 font-medium">{job.company}</p>
                      <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <IoSchool className="text-blue-600 mr-3 h-6 w-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="relative border-l-2 border-blue-600/30 pl-8 ml-3">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`mb-12 relative transform transition-all duration-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[2.55rem] top-1.5 border-4 border-white dark:border-gray-900"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <div className="flex flex-wrap justify-between mb-2">
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
