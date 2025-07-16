"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import { CaseStudyCard } from "@/components/case-study-card";

interface CaseStudy {
  src: string;
  alt: string;
  title: string;
}

interface CaseStudySliderProps {
  caseStudies: CaseStudy[];
}

export function CaseStudySlider({ caseStudies }: CaseStudySliderProps) {
  const PAUSE_DURATION = 1800;
  const GAP_PX = 16;

  const duplicatedCaseStudies = [
    ...caseStudies,
    ...caseStudies,
    ...caseStudies,
  ];

  const topRowStudies = duplicatedCaseStudies;
  const bottomRowStudies = duplicatedCaseStudies.reverse();

  return (
    <div className="relative w-full overflow-hidden py-10 lg:px-0 px-5">
      <div className="flex flex-col gap-4">
        {/* Top Row Swiper */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: PAUSE_DURATION,
            disableOnInteraction: false,
          }}
          spaceBetween={GAP_PX}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }}
          className="w-full"
        >
          {topRowStudies.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex-shrink-0 w-[200px] sm:w-[250px] lg:w-[300px]" // Apply width to SwiperSlide
            >
              <CaseStudyCard src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Row Swiper - moves in the opposite direction */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: PAUSE_DURATION,
            disableOnInteraction: false,
            reverseDirection: true, // Make this row move in the opposite direction
          }}
          spaceBetween={GAP_PX}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }}
          className="w-full mt-4" // Add margin top as in original
        >
          {bottomRowStudies.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex-shrink-0 w-[200px] sm:w-[250px] lg:w-[300px]"
            >
              <CaseStudyCard src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
