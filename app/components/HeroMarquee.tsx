"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

type MarqueeImage = {
  src: string;
  alt: string;
};

export function HeroMarquee({
  images,
  heightClass,
  cardWidthClass = "w-[260px] md:w-[320px]",
  gapClass = "gap-6 md:gap-8",
  repeat = 6,
  speedPxPerSecond = 18,
  startDirection = "right",
  bounceScope = "set",
}: {
  images: MarqueeImage[];
  heightClass?: string;
  cardWidthClass?: string;
  gapClass?: string;
  repeat?: number;
  speedPxPerSecond?: number;
  startDirection?: "left" | "right";
  bounceScope?: "set" | "all";
}) {
  const safeImages = images.filter(Boolean);
  if (safeImages.length === 0) return null;

  const repeatedImages = useMemo(() => {
    const n = Math.max(1, repeat);
    return Array.from({ length: n }).flatMap(() => safeImages);
  }, [repeat, safeImages]);

  const tailImages = useMemo(() => {
    // The first set is rendered separately for measurement/bounce. This is the remainder.
    return repeatedImages.slice(safeImages.length);
  }, [repeatedImages, safeImages.length]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const dirRef = useRef(startDirection === "right" ? 1 : -1);
  const xRef = useRef(0);
  const minTranslateRef = useRef(0);
  const initializedRef = useRef(false);

  const measure = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    const setEl = setRef.current;
    if (!container || !track) return;
    const cw = container.clientWidth;
    const tw =
      bounceScope === "set" && setEl ? setEl.scrollWidth : track.scrollWidth;
    const minTranslate = Math.min(0, cw - tw); // negative when content overflows
    minTranslateRef.current = minTranslate;

    // Only initialize once; later measures should not reset direction/position.
    if (!initializedRef.current) {
      initializedRef.current = true;
      if (startDirection === "right") {
        xRef.current = minTranslate;
        dirRef.current = 1;
      } else {
        xRef.current = 0;
        dirRef.current = -1;
      }
    } else {
      // Clamp to new bounds if sizes change.
      if (xRef.current > 0) xRef.current = 0;
      if (xRef.current < minTranslate) xRef.current = minTranslate;
    }

    // Apply immediately so the user sees the correct initial position.
    track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
  };

  useLayoutEffect(() => {
    measure();
  }, [repeatedImages.length, cardWidthClass, gapClass, heightClass]);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ro = new ResizeObserver(() => measure());
    ro.observe(container);
    ro.observe(track);
    return () => ro.disconnect();
  }, [repeatedImages.length]);

  useEffect(() => {
    // Respect reduced motion
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mql?.matches) return;

    const track = trackRef.current;
    if (!track) return;

    const tick = (ts: number) => {
      const last = lastTsRef.current;
      lastTsRef.current = ts;
      const dt = last ? (ts - last) / 1000 : 0;

      const minTranslate = minTranslateRef.current;
      if (minTranslate === 0) {
        rafRef.current = window.requestAnimationFrame(tick);
        return;
      }

      const dx = speedPxPerSecond * dt * dirRef.current;
      let next = xRef.current + dx;
      if (next >= 0) {
        next = 0;
        dirRef.current = -1;
      } else if (next <= minTranslate) {
        next = minTranslate;
        dirRef.current = 1;
      }
      xRef.current = next;
      track.style.transform = `translate3d(${next}px, 0, 0)`;

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [speedPxPerSecond]);

  return (
    <div
      className={[
        "hero-marquee relative w-full overflow-hidden rounded-none bg-transparent",
        heightClass ?? "h-[420px] md:h-[520px]",
      ].join(" ")}
      ref={containerRef}
    >
      <div
        ref={trackRef}
        className={[
          "flex h-full w-max will-change-transform",
          gapClass,
        ].join(" ")}
      >
        <div
          ref={setRef}
          className={["flex h-full", gapClass].join(" ")}
          aria-hidden="true"
        >
          {safeImages.map((img, idx) => (
            <div
              key={`${img.src}-set-${idx}`}
              className={[
                "relative h-full shrink-0 overflow-hidden rounded-[24px] bg-transparent",
                cardWidthClass,
              ].join(" ")}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 320px, 65vw"
                className="object-cover"
                draggable={false}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {tailImages.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className={[
              "relative h-full shrink-0 overflow-hidden rounded-[24px] bg-transparent",
              cardWidthClass,
            ].join(" ")}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 320px, 65vw"
              className="object-cover"
              draggable={false}
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


