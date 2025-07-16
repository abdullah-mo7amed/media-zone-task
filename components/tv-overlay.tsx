"use client";

import { motion, AnimatePresence } from "framer-motion";
import type React from "react";

interface TvOverlayProps {
  onAnimationComplete: () => void;
  isInitialMount: boolean;
}

export function TvOverlay({
  onAnimationComplete,
  isInitialMount,
}: TvOverlayProps) {
  const tvOverlayVariants = {
    visible: { scale: 1 },
    hiddenAndScaled: { scale: 3 },
  };

  return (
    <motion.div
      key="tv-overlay"
      className="fixed inset-0 w-screen h-screen bg-[url('/pngg.webp')] bg-no-repeat bg-cover bg-center z-50 bg-transparent"
      variants={tvOverlayVariants}
      initial={isInitialMount ? "visible" : "hiddenAndScaled"}
      animate="visible"
      exit="hiddenAndScaled"
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
    />
  );
}
