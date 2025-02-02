"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
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
const Contact = () => {
  return (
    <motion.section
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
        Contact Me
      </motion.h1>

      <div className="w-full flex flex-col lg:flex-row gap-8 mt-2">
        {/* Form Section */}
        <div className="bg-white/20 shadow-lg shadow-gray-900/20 w-full rounded-md p-6">
          <form className="flex flex-col gap-4 ">
            <Input
              type="text"
              placeholder="First Name"
              className="border-none bg-white/30  focus:outline-none placeholder-gray-200"
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="border-none bg-white/30  focus:outline-none placeholder-gray-200"
            />
            <Input
              type="email"
              placeholder="Email"
              className="border-none bg-white/30  focus:outline-none placeholder-white"
            />
            <Input
              type="phone"
              placeholder="Phone Number"
              className="border-none bg-white/30  focus:outline-none placeholder-gray-200"
            />
            <Textarea
              placeholder="Type your message here..."  
              className="border-none bg-white/30  focus:outline-none placeholder-gray-200"
            />
          </form>
        </div>

     
        <div className="w-full text-white flex flex-col justify-center gap-6">
          <div className="flex  flex-col gap-1 max-sm:gap-0">
            <div className="flex text-xl max-lg:text-lg items-center gap-2">
              <MapPin />
              <h1 className="">Address</h1>
            </div>
            <p className="max-lg:text-sm">
              Shaheen Bagh, Okhla, New Delhi 110025
            </p>
          </div>
          <div className="flex flex-col  gap-1 max-sm:gap-0">
            <div className="flex text-xl max-lg:text-lg items-center gap-2">
              <Mail size={22} />
              <h1 className="">Email</h1>
            </div>
            <p className="max-lg:text-sm">mehmoodsaad347@gmail.com</p>
          </div>
          <div className="flex flex-col  gap-1 max-sm:gap-0">
            <div className="flex text-xl max-lg:text-lg items-center gap-2">
              <Phone size={22} />
              <h1 className="">Phone</h1>
            </div>

            <p className="max-lg:text-sm">9773834796</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
