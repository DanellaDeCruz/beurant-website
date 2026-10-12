"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const INTERVAL_MS = 6000;

type HeroImage = { src: string; mobileBias?: "right" };

export default function HeroBackground({ images }: { images: HeroImage[] }) {
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Keeps cycling while on screen — deliberately no pause on hover. It
  // skips ticks while the hero is scrolled away or the tab is hidden, so it
  // never advances unseen. Reduced motion shows the first image only.
  useEffect(() => {
    if (reduceMotion || images.length < 2) return;
    const root = rootRef.current;
    let onScreen = true;
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    if (root) observer.observe(root);
    const timer = setInterval(() => {
      if (!onScreen || document.hidden) return;
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [images.length, reduceMotion]);

  const active = images[reduceMotion ? 0 : index];

  return (
    <div ref={rootRef} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={active.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.45, 0, 0.55, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={active.src}
            alt=""
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="100vw"
            className={`object-cover ${
              active.mobileBias === "right"
                ? "object-[68%_center] sm:object-center"
                : "object-center"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Vignette + edge fades so the photo dissolves into the page
          background instead of ending in a hard rectangle. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_center,transparent_35%,var(--background)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      {/* Legibility scrim: the headline/copy sit in the left column, so
          veil that side toward the page background specifically rather
          than relying on the edge fades alone (which leave the center —
          where the text is — untouched). */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-transparent sm:via-background/30" />
    </div>
  );
}
