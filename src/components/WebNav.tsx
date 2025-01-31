"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WebNav = ({ setActiveComponent }: { setActiveComponent: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full flex h-[80vh] justify-center mt-12 border bg-white/15 backdrop-blur-lg items-center flex-col max-sm:hidden max-w-sm rounded-xl p-6 border-white/20 shadow-lg text-white"
    >
      {/* Floating Profile Image Animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="flex justify-center bg-white/15 border-white/20 shadow-lg rounded-full items-center w-56 h-56"
      >
        <div className="relative w-48 h-48 bg-white rounded-full overflow-hidden">
          <Image
            src="/saad.jpg"
            alt="Saad Mehmood's Profile Picture"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col items-center mt-4"
      >
        <h1 className="text-3xl max-lg:text-2xl font-bold">Saad Mehmood</h1>
        <p className="text-2xl max-lg:text-xl text-gray-300">Full Stack Developer</p>
      </motion.div>

      {/* Animated Navigation Buttons */}
      <div className="flex flex-col bg-transparent w-full px-4 gap-y-4 mt-6">
        {["home", "education", "projects", "contact", "about"].map((section, index) => (
          <motion.div
            key={section}
            onClick={() => setActiveComponent(section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl cursor-pointer w-full p-3 bg-white/20 border border-white/20 shadow-lg text-center text-lg font-semibold capitalize"
          >
            {section}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WebNav;
