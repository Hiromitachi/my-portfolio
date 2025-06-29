import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Technology",
      institution: "ITER, Siksha 'O' Anusandhan",
      location: "Bhubaneswar, Odisha",
      period: "2022 - 2026",
      cgpa: "8.56",
      status: "Current",
      color: "bg-primary"
    },
    {
      degree: "Senior Secondary Education (XII), CBSE (PCM)",
      institution: "DAV Public School",
      location: "Bhubaneswar",
      period: "2020 - 2022",
      percentage: "85.5%",
      status: "Completed",
      color: "bg-secondary"
    },
    {
      degree: "Secondary Education (X), CBSE",
      institution: "Kerala English Medium School",
      location: "Kerala",
      period: "2009 - 2020",
      percentage: "81%",
      status: "Completed",
      color: "bg-accent"
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-300 hidden md:block"></div>
              )}
              
              <div className="card p-8 ml-0 md:ml-16 relative">
                {/* Timeline dot */}
                <div className={`absolute -left-4 top-8 w-8 h-8 ${edu.color} rounded-full hidden md:flex items-center justify-center`}>
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-2">{edu.degree}</h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">{edu.institution}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education