import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Dashed border elements */}
        <div className="absolute top-32 left-32 w-24 h-24 border-2 border-dashed border-primary/30 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-dashed border-secondary/30 rounded-lg -rotate-12"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20">
          {/* Left side - Text content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Purple bordered greeting */}
            <motion.div 
              className="inline-block border-4 border-purple-500 bg-white p-6 rounded-lg mb-6 transform -rotate-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2">
                Hi I'm<br />Sumaiya!
              </h1>
            </motion.div>

            <motion.p 
              className="text-2xl md:text-3xl text-primary font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Welcome to my portfolio!
            </motion.p>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-primary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              LET'S EXPLORE !
            </motion.h2>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="https://github.com/Hiromitachi" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/sumaiya-kalim-7ab784268/" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a href="mailto:sumaiyakalim18@gmail.com"
                 className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6 text-primary" />
              </a>
            </motion.div>

            {/* Scroll down indicator */}
            <motion.div 
              className="flex flex-col items-center lg:items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-primary font-semibold mb-2">SCROLL DOWN</p>
              <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Profile image */}
              <div className="w-80 h-96 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl mx-auto relative overflow-hidden shadow-2xl">
                <img 
                  src="/image.png" 
                  alt="Sumaiya Kalim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
