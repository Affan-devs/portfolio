'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Instagram,  } from "lucide-react"
import Image from 'next/image'

export default function Component() {
  return (
    <section className="min-h-screen flex items-end justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 max-w-xl"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Crafting Digital Experiences with Passion and Precision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white mb-8"
          >
            Welcome to Affan digital playground. I&apos;m a passionate, a web developer dedicated to turning ideas into elegant, functional realities.


          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}

          >
            <Link
              href="/thoughts" passHref
              className="text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-pink-500 hover:to-orange-500 text-lg font-semibold px-6 py-3 rounded-lg shadow-lg"
            >
              Read My Thoughts
            </Link>
         

          </motion.div>
        </motion.div>

        {/* Right side profile card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full max-w-md bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          style={{
            background: `
              linear-gradient(45deg, #f0f8ff 25%, #f8ffff 25%, #f8ffff 50%, #f0f8ff 50%, #f0f8ff 75%, #f8ffff 75%, #f8ffff 100%),
            `,
            backgroundSize: '40px 40px'
          }}
        >
          <div className="flex flex-col items-center p-12">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-48 h-48 rounded-sm overflow-hidden mb-8"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/64860632?v=4"
                alt="Profile picture"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
           
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-semibold text-white mb-6"
            >
          Affan Zubair
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-white text-lg max-w-md mb-10"
            >
              Passionate web developer with a keen eye for design and a love for creating seamless user experiences. Specializing in modern frontend technologies and responsive design.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-6"
            >
              <a href="https://github.com/Affan-devs" className="text-white hover:text-gray-800 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/webdevaffan/" className="text-white hover:text-gray-800 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:text-gray-800 transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}