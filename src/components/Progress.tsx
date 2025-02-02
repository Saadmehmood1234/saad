"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export function ProgressDemo() {
  const [progressValues, setProgressValues] = React.useState({
    javascript: 10,
    tailwind: 20,
    HTML: 15,
    CSS: 30,
    typescript: 25,
    react: 10,
    nextjs: 35,
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        javascript: 80,
        tailwind: 70,
        HTML: 85,
        CSS: 80,
        typescript: 75,
        react: 90,
        nextjs: 95,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML", value: progressValues.HTML },
    { name: "CSS", value: progressValues.CSS },
    { name: "JavaScript", value: progressValues.javascript },
    { name: "TypeScript", value: progressValues.typescript },
    { name: "React", value: progressValues.react },
    { name: "Next.js", value: progressValues.nextjs },
    { name: "Tailwind", value: progressValues.tailwind },
  ];

  return (
    <div className="w-full p-4 gap-4 flex flex-col">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
          className="flex flex-col bg-white/25 p-3 cursor-pointer rounded-lg justify-center"
        >
          <p className="text-white text-md font-semibold">{skill.name}</p>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${skill.value}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Progress value={skill.value} className="w-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
