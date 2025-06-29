import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Users, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Developer",
      description: "Skilled in React, Node.js, Express.js, and MongoDB"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Designer",
      description: "Creating intuitive and visually appealing designs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaborator",
      description: "Experienced in cross-functional team environments"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Creative thinker with hands-on hackathon experience"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark mb-6">
              Motivated Computer Science Student & Developer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a detail-oriented Computer Science undergraduate with a strong foundation in 
              full-stack web development and front-end design. I'm passionate about building 
              responsive and visually appealing applications that solve real-world problems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With experience in modern technologies like React, Node.js, and MongoDB, I enjoy 
              creating digital solutions that make a difference. I'm also skilled in UI/UX design 
              and have hands-on experience from hackathons and collaborative projects.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-medium">
                UI/UX Design
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">
                Problem Solving
              </span>
            </div>
          </motion.div>

          {/* Right side - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-dark mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About