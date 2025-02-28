import React, { useState } from "react";
import { motion } from "framer-motion";
import BlackHoleBackground from "./BlackHoleBackground";
import CustomCursor from "./CustomCursor";
import ContactForm from "./ContactForm";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = [
    "JavaScript", "React", "Node.js", "Redux",
    "HTML/CSS", "SQL", "Express.js", "Tailwind CSS"
  ];

  const projects = [
    {
      name: "Keeper",
      description: "A note-taking app inspired by Google Keep",
      link: "https://pranayanand2001.github.io/Keeper/"
    },
    {
      name: "ToDoList",
      description: "Task management application",
      link: "https://pranayanand2001.github.io/ToDoList/"
    },
    {
      name: "Simon Game",
      description: "Interactive memory game",
      link: "https://pranayanand2001.github.io/Simon_Game/"
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <CustomCursor />
      <BlackHoleBackground />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 p-6 flex justify-center space-x-8">
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-lg capitalize ${
                  activeSection === section 
                    ? 'text-white border-b-2' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            {/* About Section */}
            {activeSection === 'about' && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-center"
              >
                <h1 className="text-6xl font-bold mb-4">Pranay Anand</h1>
                <h2 className="text-2xl text-gray-300 mb-8">Software Developer</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                  I'm passionate about creating beautiful websites and building web applications 
                  that enhance user experience. Currently seeking new opportunities to contribute 
                  my skills and grow as a developer.
                </p>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/pranayanand2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-gray-300 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pranayanand2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-gray-300 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:pranayanand2001@gmail.com"
                    className="text-3xl hover:text-gray-300 transition-colors"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </motion.div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </a>
                ))}
              </motion.div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white bg-opacity-10 p-4 rounded-lg text-center hover:bg-opacity-20 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
                <p className="text-gray-300 text-center mb-8">
                  Have a question or want to work together? Feel free to reach out!
                </p>
                <ContactForm />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
