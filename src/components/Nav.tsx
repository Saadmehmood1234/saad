import React from "react";
import { Home, GraduationCap, Folder, Mail, Info } from "lucide-react";
const Nav = ({ setActiveComponent }: { setActiveComponent: any }) => {
  return (
    <div className="flex justify-between items-center p-2 w-full max-w-4xl rounded-xl sm:hidden bg-white/15 backdrop-blur-xl h-20">
      <ul className="flex justify-between items-center w-full text-white">
        <li
          onClick={() => setActiveComponent("home")}
          className="rounded-md  p-2 bg-white/10 backdrop-blur-xl cursor-pointer"
        >
          <Home size={24} />
        </li>
        <li
          onClick={() => setActiveComponent("education")}
          className="rounded-md p-2 bg-white/10 backdrop-blur-xl cursor-pointer"
        >
          <GraduationCap size={24} />
        </li>
        <li
          onClick={() => setActiveComponent("projects")}
          className="rounded-md p-2 bg-white/10 backdrop-blur-xl hover:bg-gradient-to-t from-gray-500 to-blue-600 cursor-pointer"
        >
          <Folder size={24} />
        </li>
        <li
          onClick={() => setActiveComponent("contact")}
          className="rounded-md p-2 bg-white/10 backdrop-blur-xl hover:bg-gradient-to-t from-gray-500 to-blue-600 cursor-pointer"
        >
          <Mail size={24} />
        </li>
        <li
          onClick={() => setActiveComponent("about")}
          className="rounded-md p-2 bg-white/10 backdrop-blur-xl hover:bg-gradient-to-t from-gray-500 to-blue-600 cursor-pointer"
        >
          <Info size={24} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
