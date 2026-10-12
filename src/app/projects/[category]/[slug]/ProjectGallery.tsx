"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

type GalleryImage = { full: string; thumb: string; width: number; height: number };

// A flick counts even when short; a slow drag must travel this far.
const SWIPE_DISTANCE = 80;
const SWIPE_VELOCITY = 0.11; // px per ms

export default function ProjectGallery({
  images,
  alt,
}: {
  images: GalleryImage[];
  alt: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; t: number; dx: number } | null>(null);

  const count = images.length;
  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i === null ? null : (i + delta + count) % count)),
    [count]
  );

  function open(i: number) {
    setIndex(i);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  // Warm the neighbours so stepping through feels instant.
  useEffect(() => {
    if (index === null) return;
    for (const d of [-1, 1]) {
      const img = new window.Image();
      img.src = images[(index + d + count) % count].full;
    }
  }, [index, images, count]);

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.button !== 0 || drag.current) return; // ignore extra fingers
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, t: performance.now(), dx: 0 };
    if (slideRef.current) slideRef.current.style.transition = "none";
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current || !slideRef.current) return;
    drag.current.dx = e.clientX - drag.current.x;
    slideRef.current.style.transform = `translateX(${drag.current.dx}px)`;
  }

  function onPointerUp() {
    const d = drag.current;
    drag.current = null;
    const slide = slideRef.current;
    if (!d || !slide) return;
    const velocity = Math.abs(d.dx) / (performance.now() - d.t);
    slide.style.transition = "transform 300ms var(--ease-out)";
    slide.style.transform = "translateX(0)";
    if (Math.abs(d.dx) >= SWIPE_DISTANCE || (Math.abs(d.dx) > 10 && velocity > SWIPE_VELOCITY)) {
      slide.style.transition = "none";
      step(d.dx < 0 ? 1 : -1);
    }
  }

  const [lead, ...rest] = images;

  return (
    <>
      {lead && (
        <GalleryButton
          image={lead}
          src={lead.full}
          label={`Open photo 1 of ${count}`}
          alt={`${alt} — photo 1`}
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          onClick={() => open(0)}
        />
      )}

      {rest.length > 0 && (
        <div className="mt-4 columns-1 gap-4 sm:columns-2">
          {rest.map((img, i) => (
            <div key={img.thumb} className="mb-4 break-inside-avoid">
              <GalleryButton
                image={img}
                src={img.thumb}
                label={`Open photo ${i + 2} of ${count}`}
                alt={`${alt} — photo ${i + 2}`}
                sizes="(min-width: 640px) 50vw, 100vw"
                onClick={() => open(i + 1)}
              />
            </div>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${alt} — photos`}
        onClose={() => setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
      >
        {index !== null && (
          <div className="flex h-full flex-col">
            <div className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-6">
              <p aria-live="polite" className="text-sm tabular-nums text-muted">
                {index + 1} / {count}
              </p>
              <IconButton label="Close" onClick={close}>
                <path d="M6 6l12 12M18 6L6 18" />
              </IconButton>
            </div>

            <div
              className="relative min-h-0 flex-1 touch-pan-y select-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div ref={slideRef} className="pointer-events-none absolute inset-0 mx-4 sm:mx-20">
                <Image
                  key={index}
                  src={images[index].full}
                  alt={`${alt} — photo ${index + 1}`}
                  fill
                  sizes="100vw"
                  draggable={false}
                  className="lightbox-image object-contain"
                />
              </div>
            </div>

            <div className="flex h-20 shrink-0 items-center justify-center gap-4">
              <IconButton label="Previous photo" onClick={() => step(-1)}>
                <path d="M15 5l-7 7 7 7" />
              </IconButton>
              <IconButton label="Next photo" onClick={() => step(1)}>
                <path d="M9 5l7 7-7 7" />
              </IconButton>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

function GalleryButton({
  image,
  src,
  label,
  alt,
  sizes,
  priority,
  onClick,
}: {
  image: GalleryImage;
  src: string;
  label: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="group block w-full cursor-zoom-in overflow-hidden rounded-lg bg-surface"
    >
      <Image
        src={src}
        alt={alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]"
      />
    </button>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-foreground/80 transition-[color,border-color,transform] duration-200 hover:border-white/40 hover:text-foreground active:scale-95"
    >
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </button>
  );
}
