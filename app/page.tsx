"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { TvOverlay } from "@/components/tv-overlay";
import { SectionOne } from "@/components/sections/section-one";
import { SectionTwo } from "@/components/sections/section-two";
import { SectionThree } from "@/components/sections/section-three";
import { SectionFour } from "@/components/sections/section-four";
import { SectionFive } from "@/components/sections/section-five";

interface SectionData {
  id: string;
  content: React.ReactNode;
}

export default function HomePage() {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTvOverlay, setShowTvOverlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasTvFadedOutOnce, setHasTvFadedOutOnce] = useState(false);
  const isFirstMount = useRef(true);
  const backgroundYMotionValue = useMotionValue(0);

  const caseStudies = [
    { src: "/slider-1.webp", alt: "Bondok", title: "Bondok" },
    { src: "/slider-2.webp", alt: "The Peak", title: "The Peak" },
    { src: "/slider-5.webp", alt: "Application", title: "ابليكيشن" },
    {
      src: "/slider-3.webp",
      alt: "Elaf Developments",
      title: "ELAF DEVELOPMENTS",
    },
    { src: "/slider-4.webp", alt: "Khoyout", title: "KHOYOUT" },
    {
      src: "/slider-1.webp",
      alt: "Qubitarts",
      title: "Qubitarts Creative Agency",
    },
    {
      src: "/slider-2.webp",
      alt: "Champion Academy",
      title: "CHAMPION ACADEMY",
    },
    { src: "/slider-3.webp", alt: "Saeeda", title: "السعيدة" },
    { src: "/slider-5.webp", alt: "Saeeda", title: "السعيدة" },
    { src: "/slider-4.webp", alt: "Saeeda", title: "السعيدة" },
  ];

  const sections: SectionData[] = [
    {
      id: "section1",
      content: <SectionOne scrollToNextSection={() => scrollToSection(currentSectionIndex + 1)} />,
    },
    {
      id: "section2",
      content: <SectionTwo currentSectionIndex={currentSectionIndex} />,
    },
    {
      id: "section3",
      content: <SectionThree currentSectionIndex={currentSectionIndex} />,
    },
    {
      id: "section4",
      content: <SectionFour currentSectionIndex={currentSectionIndex} />,
    },
    {
      id: "section5",
      content: <SectionFive caseStudies={caseStudies} />,
    },
  ];

  useEffect(() => {
    isFirstMount.current = false;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) setCurrentSectionIndex(index);
          }
        });
      },
      { root: scrollContainerRef.current, threshold: 0.7 }
    );
    sectionRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => {
      sectionRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, [sections.length]);

  const scrollToSection = useCallback(
    (index: number) => {
      const scrollContainer = scrollContainerRef.current;
      const targetSection = sectionRefs.current[index];
      if (
        isScrolling ||
        isTransitioning ||
        !scrollContainer ||
        !targetSection
      ) {
        return;
      }
      setIsScrolling(true);
      const targetScrollTop = targetSection.offsetTop;
      animate(scrollContainer.scrollTop, targetScrollTop, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: latest => {
          scrollContainer.scrollTop = latest;
        },
        onComplete: () => {
          setIsScrolling(false);
        },
      });
    },
    [isScrolling, isTransitioning, sections.length]
  );

  const handleTvOverlayTransition = useCallback(
    (direction: "up" | "down") => {
      if (isTransitioning || isScrolling) return;
      setIsTransitioning(true);
      if (direction === "down") {
        setShowTvOverlay(false);
        setHasTvFadedOutOnce(true);
      } else {
        setShowTvOverlay(true);
      }
    },
    [isTransitioning, isScrolling]
  );

  useEffect(() => {
    const touchStartY = { current: 0 };
    const onWheel = (e: WheelEvent) => {
      if (isScrolling || isTransitioning) {
        e.preventDefault();
        return;
      }
      if (showTvOverlay) {
        if (e.deltaY > 0) {
          e.preventDefault();
          handleTvOverlayTransition("down");
        }
      } else {
        const direction = e.deltaY > 0 ? "down" : "up";
        let nextIndex = currentSectionIndex;
        if (direction === "down" && currentSectionIndex < sections.length - 1) {
          nextIndex = currentSectionIndex + 1;
        } else if (direction === "up" && currentSectionIndex > 0) {
          nextIndex = currentSectionIndex - 1;
        } else if (
          direction === "up" &&
          currentSectionIndex === 0 &&
          hasTvFadedOutOnce
        ) {
          e.preventDefault();
          handleTvOverlayTransition("up");
          return;
        } else {
          return;
        }
        e.preventDefault();
        scrollToSection(nextIndex);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isScrolling || isTransitioning) {
        e.preventDefault();
        return;
      }
      const isDownKey = ["ArrowDown", "PageDown"].includes(e.key);
      const isUpKey = ["ArrowUp", "PageUp"].includes(e.key);
      if (isDownKey && showTvOverlay) {
        e.preventDefault();
        handleTvOverlayTransition("down");
      } else if (isUpKey && currentSectionIndex === 0 && hasTvFadedOutOnce) {
        e.preventDefault();
        handleTvOverlayTransition("up");
      } else if (isDownKey || isUpKey) {
        let nextIndex = currentSectionIndex;
        if (isDownKey && currentSectionIndex < sections.length - 1) {
          nextIndex = currentSectionIndex + 1;
        } else if (isUpKey && currentSectionIndex > 0) {
          nextIndex = currentSectionIndex - 1;
        } else {
          return;
        }
        e.preventDefault();
        scrollToSection(nextIndex);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (isScrolling || isTransitioning) return;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;
      if (deltaY < -50 && showTvOverlay) {
        handleTvOverlayTransition("down");
      } else if (
        deltaY > 50 &&
        currentSectionIndex === 0 &&
        hasTvFadedOutOnce
      ) {
        handleTvOverlayTransition("up");
      } else if (!showTvOverlay) {
        let nextIndex = currentSectionIndex;
        if (deltaY < -50 && currentSectionIndex < sections.length - 1) {
          nextIndex = currentSectionIndex + 1;
        } else if (deltaY > 50 && currentSectionIndex > 0) {
          nextIndex = currentSectionIndex - 1;
        } else {
          return;
        }
        scrollToSection(nextIndex);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [
    handleTvOverlayTransition,
    scrollToSection,
    showTvOverlay,
    currentSectionIndex,
    hasTvFadedOutOnce,
    isScrolling,
    isTransitioning,
    sections.length,
  ]);

  const onTvAnimationComplete = useCallback(() => {
    setIsTransitioning(false);
    if (!showTvOverlay) {
      if (currentSectionIndex === 0 && !isScrolling) {
        scrollToSection(0);
      }
    }
  }, [showTvOverlay, isScrolling, currentSectionIndex, scrollToSection]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const updateBackgroundPosition = () => {
      const scrollTop = scrollContainer.scrollTop;
      const viewportHeight = window.innerHeight;
      let newBackgroundY = 0;

      if (scrollTop < 4 * viewportHeight) {
        newBackgroundY = -scrollTop;
      } else {
        newBackgroundY = -4 * viewportHeight;
      }
      backgroundYMotionValue.set(newBackgroundY);
    };

    scrollContainer.addEventListener("scroll", updateBackgroundPosition);
    updateBackgroundPosition();
    window.addEventListener("resize", updateBackgroundPosition);

    return () => {
      scrollContainer.removeEventListener("scroll", updateBackgroundPosition);
      window.removeEventListener("resize", updateBackgroundPosition);
    };
  }, [backgroundYMotionValue]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600" />
      <motion.div
        className="fixed inset-0 w-full bg-[url('/croped-screen.webp')] bg-no-repeat bg-cover bg-center -z-10"
        style={{
          y: backgroundYMotionValue,
          height: "500vh",
        }}
      />
      <div
        ref={scrollContainerRef}
        className="relative z-0 h-full w-full overflow-y-auto overflow-x-hidden"
      >
        {sections.map((section, i) => (
          <div
            key={section.id}
            ref={el => {
              sectionRefs.current[i] = el;
            }}
            id={section.id}
            className={`w-full min-h-screen bg-transparent ${
              section.id === "section5" ? "bg-[#429EAE]" : ""
            }`}
          >
            {section.content}
          </div>
        ))}
      </div>
      <AnimatePresence>
        {showTvOverlay && (
          <TvOverlay
            onAnimationComplete={onTvAnimationComplete}
            isInitialMount={isFirstMount.current}
          />
        )}
      </AnimatePresence>
    </div>
  );
}