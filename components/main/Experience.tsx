'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Globe, Layout, Server } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack online shopping platform",
    icon: <Globe className="w-6 h-6" />,
    link: "https://codewithsadee.github.io/footcap/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my work",
    icon: <Layout className="w-6 h-6" />,
    link: "https://github.com/Affan-devs?tab=repositories"
  },
  {
    title: "Resume Builder",
    description: "A web application that helps you build your resume",
    icon: <Server className="w-6 h-6" />,
    link: "https://affan-devs.github.io/the-resume-builder/"
  },
  {
    title: "Service Base Website",
    description: "A website for a service provider",
    icon: <Code className="w-6 h-6" />,
    link: " https://codewithsadee.github.io/desinic"
  }
]

export default function ExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (

    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight">
          <span className="text-white">2 years of</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">experience</span>
        </h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link href={project.link}>

              <div className="bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors duration-300 p-4 rounded-lg">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                
                  {project.icon}
                </div>
                <p className="text-white">{project.description}</p>
              
                <div className="flex items-center mt-4 text-blue-400 group">
                  <span className="text-sm font-semibold">View Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
