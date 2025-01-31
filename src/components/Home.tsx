"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tab from "./Tab";
import Image from "next/image";
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
const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="flex flex-col justify-center items-center w-full mt-12 max-w-4xl 
      h-auto max-sm:h-auto bg-white/15 backdrop-blur-lg rounded-2xl border border-white/20 
      shadow-xl p-8"
    >
      <div className="w-full h-[70%] max-sm:h-[80%] flex flex-col justify-center items-center">
        <div className="sm:hidden flex justify-center items-center rounded-full w-40 h-40 bg-white/15 backdrop-blur-lg border-white/20 shadow-lg">
          <div className="relative w-32 h-32 bg-white rounded-full overflow-hidden">
            <Image
              src="/saad.jpg"
              alt="Saad Mehmood's Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex text-white flex-col text-center p-4 gap-y-2">
          <h2 className="text-3xl max-sm:text-2xl">Hi There...</h2>
          <h1 className="text-4xl max-sm:text-3xl font-bold">
            My Name Is Saad Mehmood
          </h1>
          <h2 className="text-3xl max-sm:text-xl">
            {" "}
            I am a
            <Typewriter
              words={[
                " Full Stack Developer",
                " React Enthusiast",
                " Next.js Lover",
              ]}
              loop={false}
              cursorStyle="|"
              cursor
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </h2>
        </div>
        <div className="flex justify-center items-center my-4 ">
          <button className="w-32 border-white/20 shadow-lg bg-gradient-to-t from-gray-500 to-blue-600 rounded-md h-10 text-xl font-bold text-white  hover:bg-blue-600 transition">
            Hire Me
          </button>
        </div>
      </div>
      <p className="text-white text-2xl sm:mb-2">Follow Me</p>
      <Tab />
    
    </motion.div>
  );
};

export default Home;
