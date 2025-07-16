"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface SectionTwoProps {
  currentSectionIndex: number;
}

export function SectionTwo({ currentSectionIndex }: SectionTwoProps) {
  return (
    <div className="px-5 pt-20 min-h-screen flex flex-col lg:gap-0 gap-20 w-full h-full items-stretch lg:justify-between lg:px-20 lg:pt-32">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, x: -100 }}
          animate={
            currentSectionIndex === 1
              ? { opacity: 1, x: 0, y: 0 }
              : currentSectionIndex === 2
              ? { opacity: 1, x: 0, y: 50 }
              : { opacity: 0, x: -100, y: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white font-grotesk leading-[1] mb-4 sm:mb-8">
            You bring the vision, we bring
            <br /> it to life with clarity, care,
            <br /> and creativity
          </h3>
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-white font-grotesk font-bold leading-[1] mb-4 sm:mb-8">
            Who Are
            <br /> We&nbsp;<span className="text-red-600">?</span>
          </h4>
          <p className="text-sm sm:text-base font-grotesk text-[#F4F4F4B2]">
            We’re MediaZone a full-service marketing agency built to move brands
            forward. From bold ideas to effective execution, we help you grow,
            connect, and stand out where it matters most.
          </p>
        </motion.div>
        <motion.div
          className="col-span-1 mt-8 lg:mt-0 flex"
          initial={{ opacity: 0, x: 200 }}
          animate={
            currentSectionIndex === 1
              ? { opacity: 1, x: 0, y: 0 }
              : currentSectionIndex === 2
              ? { opacity: 1, x: 0, y: 50 }
              : { opacity: 0, x: 200, y: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[43px] text-[#FFD933] font-semibold font-grotesk leading-[1]">
              Guiding your idea every step starting with the spark and ending at
              launch.
            </h3>
            <p className="mt-4 text-xs font-medium font-inter text-[#F4F4F4B2]">
              Your 360° partner in marketing here for every idea, every step,
              every win.
            </p>
          </div>
          <Image
            src="/image-32.webp"
            alt="dog"
            width={213}
            height={301}
            className="block lg:hidden mx-auto"
          />
        </motion.div>
      </div>
      <div className="flex flex-col relative z-[1]">
        <div className="grid grid-cols-3 gap-4 lg:translate-y-[-269px] -translate-y-10 z-[1]">
          <motion.div
            className="col-span-1 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={
              currentSectionIndex === 1
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: -50 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-[#DF2C11] hover:bg-[#DF2C11] cursor-pointer lg:px-6 px-2 lg:py-1 p-0.5 sm:px-9 sm:py-2 rounded-3xl rotate-[25deg] lg:translate-y-0 -translate-y-8 lg:translate-x-0 -translate-x-8">
              <span className="text-white text-sm sm:text-2xl font-normal font-impact">
                Who are we
              </span>
            </button>
          </motion.div>
          <motion.div
            className="col-span-1 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={
              currentSectionIndex === 1
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: -50 }
            }
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="bg-[#FFD311] hover:bg-[#FFD311] cursor-pointer lg::px-4 px-2 lg:py-1 p-0.5 rounded-4xl lg:translate-y-0 -translate-y-6">
              <span className="text-[#206BFF] text-base sm:text-3xl lg:text-4xl font-normal font-jersey">
                Our Projects
              </span>
            </button>
          </motion.div>
          <div className="col-span-1 text-center relative z-[1]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                currentSectionIndex === 1
                  ? { opacity: 1, x: 0 }
                  : { opacity: 1, x: 100 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute z-[-1] left-1/2 -translate-x-1/2 sm:-top-16 md:-top-24 lg:-top-32"
            >
              <Image
                src="/image-32.webp"
                alt="dog"
                width={213}
                height={301}
                className="lg:block hidden mx-auto"
              />
            </motion.div>
            <motion.button
              className="bg-[#15865B] hover:bg-[#15865B] cursor-pointer lg:p-3 p-1.5 rounded-4xl z-10 sm:translate-y-10 sm:-translate-x-10 lg:translate-y-20 -translate-y-4 translate-x-8 lg:-translate-x-20 rotate-[10deg]"
              initial={{ opacity: 0, y: -50 }}
              animate={
                currentSectionIndex === 1
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: -50 }
              }
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span className="text-[#FFD933] text-sm sm:text-base lg:text-3xl font-normal font-irish">
                Our Team
              </span>
            </motion.button>
          </div>
        </div>
        <h1
          className="text-white font-vina text-8xl lg:text-[310.35px] absolute bottom-0 z-[-1] left-1/2 -translate-x-1/2 w-full text-center leading-[1] hover:text-[#206BFF] transition duration-[900ms] ease-in-out cursor-pointer"
          style={{ letterSpacing: "6.8px" }}
        >
          <Link href="#">ABOUT US</Link>
        </h1>
        <motion.button
          className="bg-[#0358FF] hover:bg-[#0358FF] cursor-pointer px-2 py-0.5 sm:px-6 sm:py-3 rounded-4xl absolute lg:bottom-0 left-20 sm:bottom-10 -bottom-6 lg:left-1/3 -translate-x-0 z-[-1]"
          initial={{ opacity: 0, y: -50 }}
          animate={
            currentSectionIndex === 1
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: -50 }
          }
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-white text-sm sm:text-3xl lg:text-4xl font-normal font-jaro">
            Services
          </span>
        </motion.button>
      </div>
    </div>
  );
}
