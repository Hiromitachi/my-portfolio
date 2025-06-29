import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Database, Globe, Smartphone, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Java", "C", "JavaScript", "HTML", "CSS"],
      color: "bg-blue-500"
    },
    {
      title: "Front-End",
      icon: <Globe className="w-8 h-8" />,
      skills: ["ReactJS", "Tailwind CSS", "jQuery", "Bootstrap", "Responsive Design"],
      color: "bg-green-500"
    },
    {
      title: "Back-End",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Express.js"],
      color: "bg-purple-500"
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8" />,
      skills: ["MongoDB"],
      color: "bg-orange-500"
    },
    {
      title: "Design Tools",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "Canva", "Adobe Suite", "Microsoft Designer"],
      color: "bg-pink-500"
    },
    {
      title: "Other",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["UI/UX Design Principles", "Web Application Development"],
      color: "bg-indigo-500"
    }
  ]

  const softSkills = [
    "Creative Problem Solving",
    "Team Collaboration", 
    "Content Writing",
    "Graphic Design",
    "Time Management"
  ]

  const certifications = [
    "Java Programming Course - Programiz",
    "Participation - Nirman 2.0 Hackathon, Silicon University",
    "Participation - Smart India Hackathon (SIH)"
  ]

  const workshops = [
    "Google DevFest Workshop - Global GDG event",
    "Namura Foundation Workshop - Innovation & emerging technologies",
    "Active Member - Google Developers Group (GDG)"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-dark mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-dark mb-4">{category.title}</h4>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-dark mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Soft Skills
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {softSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Certifications & Workshops */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white mr-3">
                <Users className="w-5 h-5" />
              </div>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workshops & Memberships */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white mr-3">
                <Users className="w-5 h-5" />
              </div>
              Workshops & Memberships
            </h3>
            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{workshop}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills