"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Timetable Management System",
    description:
      "A full stack project using nextjs, mongodb,typescript.Efficiently manage and create timetable.",
    techStack: [
      "Nextjs",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "NextAuth",
      "Typescript",
    ],
    link: "https://time-table-management-jet.vercel.app/",
    github: "https://github.com/Saadmehmood1234/TimeTableManagement",
  },
  {
    title: "Event Management App",
    description:
      "A full stack project using nextjs, mongodb,typescript.Efficiently manage and create timetable.",
    techStack: [
      "Nextjs",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "NextAuth",
      "Typescript",
    ],
    link: "https://event-mang-app.vercel.app/",
    github: "https://github.com/Saadmehmood1234/EventMangApp",
  },
  {
    title: "Chat Application",
    description:"A chat application using reactjs,javascript.socket.io, mongodb, tailwind ",
    techStack: ["reactjs","javascript","socketio","tailwind","mongodb"],
    link: "https://chatapp-mqcy.onrender.com/",
    github: "https://github.com/Saadmehmood1234/chatApp",
  },
  // {
  //   title: "Chat Application",
  //   description:"A chat application using reactjs,javascript. socket.io mongodb tailwind ",
  //   techStack: ["Next.js", "Tailwind", "Framer Motion"],
  //   link: "https://chatapp-mqcy.onrender.com/",
  //   github: "https://github.com/Saadmehmood1234/chatApp",
  // },
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
    <motion.section
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 24px rgba(255, 255, 255, 0.2)",
      }}
      whileTap={{ scale: 0.97 }}
      className="bg-white/10 backdrop-blur-lg border max-w-4xl border-white/20 rounded-xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-300"
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
        className="text-gray-300 text-wrap"
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
    </motion.section>
  );
};

const Projects = () => {
  return (
    <motion.section
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
    </motion.section>
  );
};

export default Projects;
