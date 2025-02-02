"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProgressDemo } from "@/components/Progress";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const Education = () => {
  return (
    <motion.section
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    className="flex flex-col justify-center items-center w-full mt-12 max-w-4xl 
    h-auto max-sm:h-auto bg-white/15 backdrop-blur-lg rounded-2xl border border-white/20 
    shadow-xl p-8"
  >
    <motion.h1
      variants={fadeInUp}
      className="text-white text-4xl font-extrabold text-center mt-4 mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
    >
        My Education
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 text-white w-full"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-2 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-semibold text-blue-400">2022 - 2025</h2>
          <h3 className="text-2xl font-bold">
            Bachelor of Computer Application
          </h3>
          <p className="text-gray-300">
            Currently pursuing BCA from Guru Gobind Singh Indraprastha
            University. I am in my final year.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-2 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-semibold text-green-400">2022 - 2023</h2>
          <h3 className="text-2xl font-bold">Programming Languages</h3>
          <p className="text-gray-300">
            Learned multiple programming languages: C, C++, Python, JavaScript,
            TypeScript, PHP, and Java.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-2 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-semibold text-yellow-400">2023 - 2024</h2>
          <h3 className="text-2xl font-bold">Frontend Development</h3>
          <p className="text-gray-300">
            Started web development, mastering HTML, CSS, Bootstrap, Tailwind,
            and React.js. Built multiple projects.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-2 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-semibold text-red-400">2024 - 2025</h2>
          <h3 className="text-2xl font-bold">Backend Development</h3>
          <p className="text-gray-300">
            Started learning backend technologies: Node.js, Express.js, MySQL,
            MongoDB, and Next.js for full-stack development.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
