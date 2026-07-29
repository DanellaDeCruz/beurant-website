"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INTERVAL_MS = 5000;

export default function HeroBackground({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Vignette + edge fades so the photo dissolves into the page
          background instead of ending in a hard rectangle. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_center,transparent_35%,var(--background)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      {/* Legibility scrim: the headline/copy sit in the left column, so
          veil that side toward the page background specifically rather
          than relying on the edge fades alone (which leave the center —
          where the text is — untouched). */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent sm:via-background/40" />
    </div>
  );
}
