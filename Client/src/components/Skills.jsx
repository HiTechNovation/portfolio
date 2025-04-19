import { useRef } from "react"
import {
  Code2,
  Server,
  Database,
  Settings,
  PencilRuler,
} from "lucide-react"
import { motion } from "framer-motion"

function Skills() {
  const sectionRef = useRef(null)

  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      technologies: ["Node.js", "Express.js", "REST API", "Authentication", "Authorization"],
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      technologies: ["MongoDB", "Mongoose"],
    },
    {
      category: "DevOps",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      technologies: ["Git", "GitHub", "AWS", "Vercel", "Netlify", "Render"],
    },
    {
      category: "UI/UX",
      icon: <PencilRuler className="w-8 h-8 text-blue-600" />,
      technologies: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world, from frontend to backend and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  md:overflow-x-visible pb-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className=" bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 
                         hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
