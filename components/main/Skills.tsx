

"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variants
const slideInFromBottom = (delay: number) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, delay },
  },
});

const SkillsSection = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "php",
    "Laravel",
    "Framer Motion",
    "MySQL",
    "MongoDB",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}


      className="flex flex-col items-center justify-center mt-20 py-10"

      >
      <motion.h2
        variants={slideInFromBottom(0.2)}
        className="text-4xl font-bold text-white mb-10"
      >
        PREMIUM
        Skills
      </motion.h2>

      <motion.div
        variants={slideInFromBottom(0.4)}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={slideInFromBottom(0.3 + index * 0.1)}
            className="skill-card bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-purple-500 hover:scale-105 transition duration-300 ease-in-out"
          >
            <p className="text-white text-lg font-semibold text-center">
              {skill}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
  

export default SkillsSection;

  
