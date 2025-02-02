import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";

const icons = [
  { icon: FaFacebookF, link: "https://facebook.com" },
  { icon: FaXTwitter, link: "https://x.com/SaadMeh97739578" },
  { icon: FaInstagram, link: "https://instagram.com" },
  { icon: FaGithub, link: "https://github.com/Saadmehmood1234" },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/saad-mehmood-4a6036255/",
  },
];

const Tab = () => {
  return (
    <div className="flex justify-between border-white/20 shadow-lg w-full max-w-xl bg-white/10 backdrop-blur-lg p-4 mx-4 rounded-lg">
      {icons.map(({ icon: Icon, link }, index) => (
        <Link
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white cursor-pointer bg-gradient-to-t from-gray-500 to-blue-600 rounded-md text-2xl hover:scale-110 transition-transform"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Tab;
