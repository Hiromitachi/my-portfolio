import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Palette, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Campus Connect",
      subtitle: "College Community Platform",
      description: "A comprehensive networking and communication platform for college students and faculty. Features real-time messaging, event management, resource sharing, and community engagement tools built with modern web technologies.",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      features: [
        "Real-time messaging and notifications using Socket.io",
        "Event management system with calendar integration",
        "Resource sharing and collaborative learning features",
        "Result: Enhanced campus connectivity and student engagement"
      ],
      liveLink: "https://campus-connect-phi-six.vercel.app/",
      githubLink: "https://github.com/Hiromitachi/campus-connect",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Snackify",
      subtitle: "Food Ordering & Discovery Platform",
      description: "A modern food ordering and discovery web application with an intuitive interface. Features menu browsing, cart management, and seamless ordering experience with responsive design deployed on GitHub Pages.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Vite", "CSS", "JavaScript"],
      features: [
        "Built with React and Vite for optimal performance",
        "Responsive design with smooth animations and transitions",
        "Interactive menu browsing and cart management",
        "Result: Successfully deployed on GitHub Pages with full functionality"
      ],
      liveLink: "https://snackifyy.netlify.app/",
      githubLink: "https://github.com/Hiromitachi/snackify",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Journal Web App",
      subtitle: "Aesthetic & Responsive Web Application",
      description: "A full-stack therapeutic journaling application built with Express.js, Node.js, and MongoDB. Features intuitive UI with EJS and CSS, secure routing, and full CRUD functionality for managing journal entries.",
      image: "https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "CSS"],
      features: [
        "Built using Express.js, Node.js, and MongoDB",
        "Created intuitive and responsive UI with EJS and CSS",
        "Implemented secure routes and CRUD functionality for journal entries",
        "Result: Improved productivity and usability for personal journaling"
      ],
      liveLink: "#",
      githubLink: "#",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "AlumniConnect",
      subtitle: "Government College Alumni Website - Hackathon Project",
      description: "Developed during Nirman 2.0 Hackathon at Silicon University. A networking platform for alumni with responsive frontend and robust backend infrastructure.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      features: [
        "Developed during Nirman 2.0 Hackathon (Silicon University)",
        "Built a networking platform for alumni",
        "Technologies: Node.js, Express.js, MongoDB, responsive front-end",
        "Result: Successfully deployed and showcased in a live hackathon"
      ],
      liveLink: "https://my-alumni-pratikksahoos-projects.vercel.app/",
      githubLink: "#",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "Hosted on Netlify",
      description: "A responsive portfolio website showcasing my work and skills, built with modern web technologies and deployed on Netlify.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      features: [
        "Designed a responsive site using HTML, CSS, JavaScript, and jQuery",
        "Integrated animations and interactive components",
        "Result: Increased portfolio visibility by 30%"
      ],
      liveLink: "#",
      githubLink: "#",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Quiz Web Application",
      subtitle: "Interactive Learning Platform",
      description: "A timed quiz application with score tracking, featuring interactive UI designed with Figma and Canva for gamified learning experience.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "Canva"],
      features: [
        "Created a timed quiz app with score tracking using HTML, CSS, JavaScript",
        "Designed interactive UI with Figma and Canva",
        "Result: Boosted user engagement with gamified learning"
      ],
      liveLink: "https://hiromitachi.github.io/quiz-app/",
      githubLink: "https://hiromitachi.github.io/quiz-app/",
      color: "from-purple-500 to-pink-600"
    }
  ]

  const getIcon = (tech) => {
    if (tech.includes('Node') || tech.includes('Express') || tech.includes('JavaScript')) {
      return <Code className="w-4 h-4" />
    } else if (tech.includes('MongoDB')) {
      return <Database className="w-4 h-4" />
    } else {
      return <Palette className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my development projects and creative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '9/16' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                <h4 className="text-primary font-semibold mb-3">{project.subtitle}</h4>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {getIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
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

export default Projects
