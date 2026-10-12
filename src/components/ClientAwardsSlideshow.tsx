"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const INTERVAL_MS = 5000;

const SLIDES = [
  { src: "/brand/founder-portrait.webp", alt: "Bevan David, founder of Beurant", position: "center 15%" },
  { src: "/brand/client-award.webp", alt: "Youth Top 40 award, 5th New Generation Asia Awards 2024", position: "center" },
  { src: "/brand/client-cw-mackie-handover.webp", alt: "Brand identity handover at C.W. Mackie PLC", position: "center" },
  { src: "/brand/client-tata-flagship-team.webp", alt: "With the team at TATA Motors' flagship showroom", position: "center" },
];

/**
 * The active indicator's fill animation is the timer: when it finishes, the
 * next slide shows. Pausing is pure CSS (animation-play-state) — while
 * offscreen, or while a keyboard user is focused on the controls. Reduced
 * motion turns autoplay off; the indicators still work as buttons.
 */
export default function ClientAwardsSlideshow() {
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      root.dataset.paused = entry.isIntersecting ? "false" : "true";
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const active = SLIDES[index];

  return (
    <div
      ref={rootRef}
      className="group/slides relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={active.src}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: active.position }}
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="absolute inset-x-0 bottom-2 flex justify-center">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show photo ${i + 1} of ${SLIDES.length}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => setIndex(i)}
            className="flex h-8 w-9 items-center justify-center rounded-sm"
          >
            <span className="block h-0.5 w-6 overflow-hidden rounded-full bg-white/30">
              <span
                className="block h-full origin-left rounded-full bg-white group-has-[:focus-visible]/slides:[animation-play-state:paused] group-data-[paused=true]/slides:[animation-play-state:paused]"
                style={indicatorStyle(i === index, Boolean(reduceMotion))}
                onAnimationEnd={() =>
                  setIndex((current) => (current + 1) % SLIDES.length)
                }
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function indicatorStyle(isActive: boolean, reduceMotion: boolean): CSSProperties {
  if (!isActive) return { transform: "scaleX(0)" };
  if (reduceMotion) return { transform: "scaleX(1)" };
  return { animation: `progress-fill ${INTERVAL_MS}ms linear forwards` };
}
