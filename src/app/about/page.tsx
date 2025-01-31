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
const About = () => {
  return (
    // <div className="w-full gap-x-4 max-sm:flex-col min-h-screen flex justify-center items-center bg-gradient-to-t from-blue-400 to-purple-600 p-6">
    <motion.div
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
        About Me
      </motion.h1>
      <div className="w-full flex-col gap-4 flex p-4">
        <h2 className="text-2xl text-white max-sm:text-xl text-center">
          My Name Is Saad Mehmood
        </h2>
        <p className="text-white text-md text-justify max-md:text-sm">
          I'm Saad Mehmood, a passionate Full Stack Developer and a BCA student
          at Don Bosco Institute of Technology (2022-2025). I specialize in
          building scalable and user-friendly web applications using
          technologies like React.js, Next.js, Node.js, and MongoDB. Open to
          opportunities in software development, collaborations, and learning
          from peers. Let’s connect and create something amazing!
        </p>
      </div>
      <ProgressDemo />
    </motion.div>

    // </div>
  );
};

export default About;
