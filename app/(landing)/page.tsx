"use client";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms";

const LandingPage: NextPage = (): ReactElement => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
      variants={container}
      className="w-full h-full hidden md:flex flex-col gap-y-6 justify-start items-start px-4 py-6"
    >
      <motion.div
        variants={item}
        className="flex flex-col gap-y-4 items-center justify-center p-6 w-full h-full min-h-[300px]"
      >
        <h1 className="text-7xl text-rose-love font-bold">
          need a fine coffee?
        </h1>
        <p className="text-2xl text-rose-iris">
          indulge in the ultimate coffee experience with coffee haven.
        </p>
        <div className="flex items-center gap-x-4">
          <Button size="lg">Try Now!</Button>
          <span className="text-rose-text font-semibold text-lg">or</span>
          <Button size="lg">Manage</Button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LandingPage;
