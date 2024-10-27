"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const posts = [
  {
    title: "Career Growth in Web Design",
    description: "Want to explore the future of web design with animations and effects ",
    link: "/blog/career-growth=",
  },
  {
    title: "Effective Landing Pages",
    description: "Learn how to create landing pages that convert.",
    link: "/blog/landing-pages",
  },
  {
    title: "The Future of Design",
    description: "Insights into upcoming trends in the design industry.",
    link: "/blog/future-design",
  },
  {
    title: "Building Navigation Components",
    description: "Best practices for creating intuitive navigation.",
    link: "/blog/navigation",
  },
  {
    title: "Backend Development",
    description: "Understanding the basics of backend development.",
    link: "/blog/navigation",
  },
  {
    title: "Api Development",
    description: "Exploring the world of API development.",
    link: "/blog/navigation",
  },
];

const slideInFromBottom = (delay: number): { hidden: { opacity: number; y: number }; visible: { opacity: number; y: number; transition: { type: string; stiffness: number; delay: number } } } => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, delay },
  },
});

const ThoughtsPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight">
          <span className="text-white">MY</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">THOUGHTS</span>
        </h1>
      </motion.div>

      <motion.div
        ref={ref} // Attach the reference for the in-view observer
        initial="hidden"
        animate={controls} // Trigger animation based on scroll into view
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {posts.map((post, index) => (
          <motion.div
            key={index}
            variants={slideInFromBottom(index * 0.2)}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300"
          >
            <a href={post.link}>
              <h2 className="text-xl font-semibold text-white">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.description}</p>
              <span className="text-blue-300 mt-4 block">Read More</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ThoughtsPage;
