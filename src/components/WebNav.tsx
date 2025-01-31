import Image from "next/image";
import React from "react";
import Link from "next/link";
const WebNav = ({ setActiveComponent }: { setActiveComponent: any }) => {
  return (
    <div className="w-full flex h-[80vh] justify-center mt-12 border bg-white/15 backdrop-blur-lg items-center flex-col max-sm:hidden max-w-sm rounded-xl p-6 border-white/20 shadow-lg text-white">
      <div className="flex justify-center bg-white/15 border-white/20 shadow-lg rounded-full items-center w-56 h-56">
        <div className="relative w-48 h-48 bg-white rounded-full overflow-hidden">
          <Image
            src="/saad.jpg"
            alt="Saad Mehmood's Profile Picture"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl max-lg:text-2xl">Saad Mehmood</h1>
        <p className="text-2xl mb-2 max-lg:text-xl">Full Stack Developer</p>
      </div>
      <div className="flex flex-col bg-transparent w-full px-4 gap-y-4">
        <div
          onClick={() => setActiveComponent("home")}
          className="rounded-xl cursor-pointer w-full p-3 bg-white/20 border border-white/20 shadow-lg"
        >
          Home
        </div>
        <div
          onClick={() => setActiveComponent("education")}
          className="rounded-xl cursor-pointer w-full p-3 bg-white/20 border border-white/20 shadow-lg"
        >
          Education
        </div>
        <div
          onClick={() => setActiveComponent("projects")}
          className="rounded-xl w-full cursor-pointer p-3 bg-white/20 border border-white/20 shadow-lg"
        >
          Projects
        </div>
        <div
          onClick={() => setActiveComponent("contact")}
          className="rounded-xl w-full cursor-pointer p-3 bg-white/20 border border-white/20 shadow-lg"
        >
          Contact
        </div>
        <div
          onClick={() => setActiveComponent("about")}
          className="rounded-xl w-full cursor-pointer p-3 bg-white/20 border border-white/20 shadow-lg"
        >
          About
        </div>
      </div>
    </div>
  );
};

export default WebNav;
