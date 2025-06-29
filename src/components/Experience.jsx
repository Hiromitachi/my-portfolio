import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Graphic Designer Intern",
      company: "Namastey Yatri (Startup Tourist Company)",
      period: "Jan 2024 - Nov 2024",
      location: "Remote",
      achievements: [
        "Designed marketing content: posts, banners, promotional designs",
        "Collaborated with the marketing team for visual strategy",
        "Result: Increased brand visibility by 15%"
      ],
      color: "bg-primary"
    },
    {
      title: "Graphic Designer",
      company: "SOA Photography GD Club, ITER",
      period: "June 2024 - Present",
      location: "ITER, Bhubaneswar",
      achievements: [
        "Designed digital artworks, posters, banners for events",
        "Result: Enhanced participation and social media engagement by 25%"
      ],
      color: "bg-secondary"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey in design and development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-300 hidden md:block"></div>
              )}
              
              <div className="card p-8 ml-0 md:ml-16 relative">
                {/* Timeline dot */}
                <div className={`absolute -left-4 top-8 w-8 h-8 ${exp.color} rounded-full hidden md:flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <TrendingUp className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience