"use client";
import React from "react";

import { ProgressDemo } from "@/components/Progress";
const About = () => {
  return (
    // <div className="w-full gap-x-4 max-sm:flex-col min-h-screen flex justify-center items-center bg-gradient-to-t from-blue-400 to-purple-600 p-6">
    <div
      className="flex flex-col justify-evenly items-center w-full mt-12 max-w-4xl h-[80vh] max-sm:h-[85vh] 
      bg-white/15 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg"
    >
      <div className="w-full  flex flex-col items-center">
        <h1 className="text-white text-3xl font-bold  text-justify mt-6">
          About Me
        </h1>
        <div className="w-full flex-col gap-4 flex p-4">
          <h2 className="text-2xl text-white max-sm:text-xl text-center">
            My Name Is Saad Mehmood
          </h2>
          <p className="text-white text-md text-justify max-md:text-sm">
            I'm Saad Mehmood, a passionate Full Stack Developer and a BCA
            student at Don Bosco Institute of Technology (2022-2025). I
            specialize in building scalable and user-friendly web applications
            using technologies like React.js, Next.js, Node.js, and MongoDB.
            Open to opportunities in software development, collaborations, and
            learning from peers. Let’s connect and create something amazing!
          </p>
        </div>
        <ProgressDemo />
      </div>
    </div>
    // </div>
  );
};

export default About;
