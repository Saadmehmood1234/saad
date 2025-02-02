"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Home from "@/components/Home";
import Nav from "@/components/Nav";
import WebNav from "@/components/WebNav";
import About from "./about/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
const sectionVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const Main: React.FC = () => {
  const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    education: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };
  const scrollToSection = (section: string) => {
    const target = sectionRefs[section]?.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex-col min-h-screen flex justify-center items-center bg-gradient-to-t from-red-600 to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        className="w-full flex justify-center items-center"
      >
        <WebNav scrollToSection={scrollToSection} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } }}
        className="w-full flex justify-center items-center"
      >
        <Nav scrollToSection={scrollToSection} />
      </motion.div>
      {([
        { Component: Home, key: "home" },
        { Component: Education, key: "education" },
        { Component: Projects, key: "projects" },
        { Component: About, key: "about" },
        { Component: Contact, key: "contact" },
      ] as const).map(({ Component, key }) => (
        <motion.div
          key={key}
          ref={sectionRefs[key]}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full flex justify-center items-center"
        >
          <Component />
        </motion.div>
      ))}
    </div>
  );
};

export default Main;
