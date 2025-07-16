"use client";

import { CaseStudySlider } from "@/components/case-study-slider";
import type React from "react";

interface CaseStudy {
  src: string;
  alt: string;
  title: string;
}

interface SectionFiveProps {
  caseStudies: CaseStudy[];
}

export function SectionFive({ caseStudies }: SectionFiveProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-10">
      <h2 className="font-vibur text-white text-6xl sm:text-7xl md:text-8xl lg:text-[68px] leading-none font-semibold text-center mb-8">
        CaseStudies
      </h2>
      <CaseStudySlider caseStudies={caseStudies} />
    </div>
  );
}
