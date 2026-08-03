"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INTERVAL_MS = 4000;

const SLIDES = [
  { src: "/brand/founder-portrait.webp", alt: "Founder of Beurant", position: "center 15%" },
  { src: "/brand/client-award.webp", alt: "Youth Top 40 award, 5th New Generation Asia Awards 2024", position: "center" },
  { src: "/brand/client-cw-mackie-handover.webp", alt: "Brand identity handover at C.W. Mackie PLC", position: "center" },
  { src: "/brand/client-tata-flagship-team.webp", alt: "With the team at TATA Motors' flagship showroom", position: "center" },
];

export default function ClientAwardsSlideshow() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(i: number) {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
  }

  const active = SLIDES[index];

  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl shadow-black/30">
      <AnimatePresence initial={false}>
        <motion.div
          key={active.src}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: active.position }}
            priority={active.src === SLIDES[0].src}
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-1.5 w-6 overflow-hidden rounded-full bg-white/25"
          >
            <span
              className="block h-full rounded-full bg-white transition-all duration-300"
              style={{ width: i === index ? "100%" : "0%" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
