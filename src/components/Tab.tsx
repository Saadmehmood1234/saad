import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

const iconMap: { [key: string]: React.ElementType } = {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
};

const icons = [
  "FaFacebookF",
  "FaXTwitter",
  "FaInstagram",
  "FaGithub",
  "FaLinkedinIn",
];

const Tab = () => {
  return (
    <div className="flex justify-between border-white/20 shadow-lg w-full max-w-xl bg-white/10 backdrop-blur-lg p-4 mx-4 rounded-lg">
      {icons.map((icon, index) => {
        const IconComponent = iconMap[icon]; // Get the actual icon component
        return (
          <div
            key={index}
            className="p-2 text-white cursor-pointer bg-gradient-to-t from-gray-500 to-blue-600 rounded-md text-2xl hover:scale-110 transition-transform"
          >
            <IconComponent />
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
