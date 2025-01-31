"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN e-commerce platform with authentication, cart system, and Stripe payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "https://your-ecommerce-site.com",
    github: "https://github.com/yourgithub/ecommerce",
  },
  {
    title: "Event Management App",
    description:
      "A React Native app to manage college events with admin, faculty, and student roles.",
    techStack: ["React Native", "Firebase", "Expo"],
    link: "https://event-mang-app.vercel.app/",
    github: "https://github.com/Saadmehmood1234/eventMang",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, showcasing my skills, projects, and resume.",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://yourportfolio.com",
    github: "https://github.com/yourgithub/portfolio",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(255, 255, 255, 0.2)" }}
      whileTap={{ scale: 0.97 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl font-bold text-white"
      >
        {project.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-300"
      >
        {project.description}
      </motion.p>
      <div className="flex gap-2 flex-wrap">
        {project.techStack.map((tech: string, idx: number) => (
          <span
            key={idx}
            className="bg-white/20 px-3 py-1 rounded-full text-sm text-white"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-3">
        <motion.a
          href={project.link}
          target="_blank"
          whileHover={{ scale: 1.1, color: "#60A5FA" }}
          transition={{ duration: 0.3 }}
          className="text-blue-400 flex items-center gap-1"
        >
          Live Demo <FaExternalLinkAlt />
        </motion.a>
        <motion.a
          href={project.github}
          target="_blank"
          whileHover={{ scale: 1.1, color: "#9CA3AF" }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 flex items-center gap-1"
        >
          Code <FaGithub />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-5xl mx-auto mt-12 p-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-white text-center mb-8"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
