"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  categoryColors,
  fullCoverImage,
  getCategory,
  type Project,
} from "@/data/projects";

const INTERVAL_MS = 4500;

// Fades the photo out toward its edges so it dissolves into the page
// background instead of sitting inside a hard-edged card.
const EDGE_FADE_MASK =
  "radial-gradient(ellipse 75% 75% at center, black 55%, transparent 100%)";

export default function HeroSlideshow({ slides }: { slides: Project[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  function goTo(i: number) {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
  }

  const active = slides[index];
  const activeCategory = getCategory(active.category);
  const activeColor = categoryColors[active.category];

  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage: EDGE_FADE_MASK,
          maskImage: EDGE_FADE_MASK,
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={active.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={fullCoverImage(active)}
              alt={active.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/10 to-transparent" />
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: activeColor?.solid }}
          />
          <span className="text-xs uppercase tracking-wide text-white/80">
            {activeCategory?.title}
          </span>
        </div>
        <div className="mt-1 font-display text-xl text-white">
          {active.title}
        </div>

        <div className="mt-4 flex gap-2">
          {slides.map((s, i) => {
            const c = categoryColors[s.category];
            return (
              <button
                key={s.slug}
                type="button"
                aria-label={`Show ${s.title}`}
                onClick={() => goTo(i)}
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/25"
              >
                <span
                  className="block h-full rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "100%" : "0%",
                    backgroundColor: c?.solid,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
