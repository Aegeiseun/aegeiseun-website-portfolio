"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      if (labelRef.current) {
        labelRef.current.textContent = `${Math.round(progress * 100)}%`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="flex items-center gap-2 border-t border-panel-border bg-void/60 px-5 py-1.5 sm:px-8"
    >
      <span className="font-hud text-[9px] uppercase tracking-widest text-amber">XP</span>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-panel">
        <div
          ref={barRef}
          className="glow-cyan h-full w-full origin-left rounded-full bg-gradient-to-r from-cyan via-cyan to-magenta"
          style={{ transform: "scaleX(0)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, transparent 0, transparent calc(4% - 1px), var(--color-void) calc(4% - 1px), var(--color-void) 4%)",
          }}
        />
      </div>
      <span
        ref={labelRef}
        className="w-8 shrink-0 text-right font-hud text-[9px] text-text-mid"
      >
        0%
      </span>
    </div>
  );
}
