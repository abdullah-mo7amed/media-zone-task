"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type React from "react";

interface SectionThreeProps {
  currentSectionIndex: number;
}

export function SectionThree({ currentSectionIndex }: SectionThreeProps) {
  return (
    <div className="px-5 py-20 min-h-screen grid grid-cols-1 lg:grid-cols-2 relative lg:px-20 lg:py-32">
      <div className="col-span-1 flex flex-col w-full gap-4 justify-center items-center h-full">
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-9 w-full justify-center items-end lg:-rotate-[20deg] lg:-translate-y-[40px]"
          initial={{ opacity: 0, x: -100 }}
          animate={
            currentSectionIndex === 2
              ? { opacity: 1, x: 0, y: 0 }
              : currentSectionIndex === 3
              ? { opacity: 1, x: 0, y: 50 }
              : { opacity: 0, x: -100, y: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <button className="bg-[#BBE9FF] hover:bg-[#BBE9FF] cursor-pointer p-3 sm:p-5 rounded-[65px] w-full max-w-[212px]">
            <span className="text-[#1C1B21] text-lg sm:text-xl lg:text-[27.23px] font-grotesk font-bold">
              CaseStudies
            </span>
          </button>
          <h3 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[115.49px] font-bold font-grotesk leading-[1]">
            Our
          </h3>
        </motion.div>
        <motion.div
          className="flex mt-4 sm:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={
            currentSectionIndex === 2
              ? { opacity: 1, y: 0 }
              : currentSectionIndex === 3
              ? { opacity: 1, y: 50 }
              : { opacity: 0, x: -100, y: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <button className="bg-[#FFD933E8] hover:bg-[#FFD933E8] h-full cursor-pointer p-3 sm:p-5 rounded-[100px] w-auto lg:-rotate-[20deg]">
            <span className="text-[#1C1B21] text-5xl sm:text-6xl md:text-7xl lg:text-[171.27px] font-vibur font-bold leading-[1]">
              Projects
            </span>
          </button>
        </motion.div>
      </div>
      <motion.div
        className="col-span-1 flex flex-col w-full gap-4 sm:gap-10 justify-center mt-8 lg:mt-4 h-full lg:translate-x-5"
        initial={{ opacity: 0, x: 200 }}
        animate={
          currentSectionIndex === 2
            ? { opacity: 1, x: 0, y: 0 }
            : currentSectionIndex === 3
            ? { opacity: 1, x: 0, y: 50 }
            : { opacity: 0, x: 200, y: 0 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <button className="bg-[#0056FFED] hover:bg-[#0056FFED] cursor-pointer p-3 sm:p-5 rounded-[100px] w-auto lg:rotate-[10deg]">
          <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[201.55px] font-vibur font-bold leading-[1]">
            Clients
          </span>
        </button>
      </motion.div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-20 lg:bottom-[50px] w-full">
        <Image
          src="/unnamed-file.webp"
          alt="image"
          width={124}
          height={134}
          className="mx-auto w-auto h-auto max-w-[100px] sm:max-w-[124px]"
        />
      </div>
    </div>
  );
}
