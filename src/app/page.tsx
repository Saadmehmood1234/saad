"use client"
import React, { useState } from "react";
import Home from "@/components/Home";
import Nav from "@/components/Nav";
import WebNav from "@/components/WebNav";
import About from "./about/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

const Main = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <div className="w-full gap-x-4 max-sm:flex-col min-h-screen flex justify-center items-center bg-gradient-to-t from-red-600 to-gray-800 p-6">
      <Nav setActiveComponent={setActiveComponent} />
      <WebNav setActiveComponent={setActiveComponent} />

      {activeComponent === "home" && <Home />}
      {activeComponent === "about" && <About />}
      {activeComponent === "educatioon" && <Education />}
      {activeComponent === "projects" && <Projects />}
      {activeComponent === "contact" && <Contact />}
    </div>
  );
};

export default Main;
