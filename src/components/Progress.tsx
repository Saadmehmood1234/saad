"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progressValues, setProgressValues] = React.useState({
    javascript: 20,
    typescript: 40,
    react: 60,
    nextjs: 80,
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        javascript: 80,
        typescript: 75,
        react: 90,
        nextjs: 95,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full p-4 gap-4 flex flex-col">
      <div className="flex flex-col bg-white/25 cursor-pointer p-3 max-xl:hidden rounded-lg justify-center">
        <p className="text-white text-md font-semibold">JavaScript</p>
        <Progress value={progressValues.javascript} className="w-full" />
      </div>
      <div className="flex flex-col bg-white/25 p-3 cursor-pointer rounded-lg justify-center">
        <p className="text-white text-md font-semibold">TypeScript</p>
        <Progress value={progressValues.typescript} className="w-full" />
      </div>
      <div className="flex flex-col bg-white/25 p-3 cursor-pointer rounded-lg justify-center">
        <p className="text-white text-md font-semibold">React</p>
        <Progress value={progressValues.react} className="w-full" />
      </div>
      <div className="flex flex-col bg-white/25 p-3 cursor-pointer rounded-lg justify-center">
        <p className="text-white text-md font-semibold">Next.js</p>
        <Progress value={progressValues.nextjs} className="w-full" />
      </div>
      <div className="flex flex-col bg-white/25 p-3 cursor-pointer rounded-lg max-lg:hidden justify-center">
        <p className="text-white text-md font-semibold">Tailwind</p>
        <Progress value={progressValues.nextjs} className="w-full" />
      </div>
    </div>
  );
}
