"use client"

import { useEffect, useState, useRef } from "react"

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
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead developer for multiple web applications using React and Node.js. Implemented CI/CD pipelines, mentored junior developers, and optimized application performance.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2019 - 2021",
      description:
        "Developed and maintained web applications for clients across various industries. Collaborated with design and product teams to deliver high-quality solutions.",
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studios",
      period: "2017 - 2019",
      description:
        "Created responsive user interfaces using React.js. Worked closely with backend developers to integrate APIs and ensure seamless user experiences.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2015 - 2017",
      description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2011 - 2015",
      description:
        "Focused on programming fundamentals, data structures, and algorithms. Participated in multiple hackathons and coding competitions.",
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600 mr-3 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600 mr-3 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
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
