"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type React from "react";

interface SectionOneProps {
  scrollToNextSection: () => void;
}

export function SectionOne({ scrollToNextSection }: SectionOneProps) {
  return (
    <div className="max-w-4xl w-full min-h-screen flex flex-col items-center justify-center relative mx-auto px-5">
      <Image
        src="/logo.webp"
        alt="logo"
        width={231}
        height={152}
        className="w-auto h-auto max-w-[231px]"
      />
      <div className="text-start w-full">
        <h2 className="font-jersey text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-[normal]">
          {"we make it simple, but.."}
        </h2>
        <h2 className="font-jersey text-[#FFD933] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-[normal]">
          {"SIGNIFICANT"}
        </h2>
      </div>
      <Button
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-4xl sm:text-5xl lg:text-6xl z-40 font-vina font-medium hover:no-underline cursor-pointer"
        variant={"link"}
        onClick={scrollToNextSection}
      >
        Scroll
      </Button>
    </div>
  );
}
