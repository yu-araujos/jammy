"use client";

import { motion } from "motion/react";

const BAR_COUNT = 100;

// deterministic pseudo-random number from a seed, so bars get varied but
// stable heights/timings instead of everything moving in lockstep (and
// without using Math.random, which would mismatch between server and client)
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 1000;
  return x - Math.floor(x);
}

export function LoadingWave() {
  return (
    <div className="flex h-16 w-full items-center gap-1">
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <motion.span
          key={i}
          className="h-full flex-1 rounded-full bg-primary"
          animate={{
            scaleY: [
              0.15 + seededRandom(i) * 0.2,
              0.5 + seededRandom(i + 100) * 0.5,
              0.15 + seededRandom(i) * 0.2,
            ],
          }}
          transition={{
            duration: 0.6 + seededRandom(i + 200) * 0.6,
            delay: seededRandom(i + 300) * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
