import React from 'react'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Sumaiya Kalim</h3>
            <p className="text-gray-300 mb-4">
              Computer Science Student & Full-Stack Developer passionate about creating 
              innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Hiromitachi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-lg hover:bg-primary transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sumaiya-kalim-7ab784268/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sumaiyakalim18@gmail.com"
                className="p-2 bg-gray-700 rounded-lg hover:bg-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 sumaiyakalim18@gmail.com</p>
              <p>📱 +91 7461094546</p>
              <p>📍 Bhubaneswar, Odisha, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} Sumaiya Kalim. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-primary mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer