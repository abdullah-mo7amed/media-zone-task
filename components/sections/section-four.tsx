"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type React from "react";

interface SectionFourProps {
  currentSectionIndex: number;
}

export function SectionFour({ currentSectionIndex }: SectionFourProps) {
  return (
    <div className="px-5 py-20 min-h-screen grid grid-cols-1 lg:grid-cols-2 relative items-center lg:px-20 lg:py-32">
      <motion.div
        className="col-span-1"
        initial={{ opacity: 0, x: -100 }}
        animate={
          currentSectionIndex === 3
            ? { opacity: 1, x: 0, y: 0 }
            : currentSectionIndex === 4
            ? { opacity: 1, x: 0, y: 50 }
            : { opacity: 0, x: -100, y: 0 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-[#F23619B5] p-5 lg:min-h-[35vh] min-h-[20vh] flex flex-col justify-center gap-2 w-full">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-[1] font-bold font-grotesk text-white">
            Our results say it all
          </h3>
          <p className="text-sm sm:text-base text-white font-inter">
            every case study is a story of strategy, impact, and success.
          </p>
        </div>
      </motion.div>
      <div className="col-span-1 text-center mt-8 lg:mt-0">
        <motion.div
          initial={{ rotate: 0 }}
          animate={
            currentSectionIndex === 3 ? { rotate: 1.5 } : { rotate: -1.5 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/dog-2.webp"
            alt="dog"
            width={431}
            height={451}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
