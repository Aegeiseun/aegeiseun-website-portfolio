"use client";

import { useEffect, useRef } from "react";

export default function BootScreen() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      el.style.display = "none";
      return;
    }

    const fadeTimer = setTimeout(() => {
      el.style.opacity = "0";
    }, 700);
    const hideTimer = setTimeout(() => {
      el.style.display = "none";
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-4 bg-void opacity-100 transition-opacity duration-300"
    >
      <span className="font-display text-2xl text-cyan text-glow-cyan">JP</span>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-panel">
        <div className="boot-bar h-full w-full origin-left rounded-full bg-gradient-to-r from-cyan via-cyan to-magenta" />
      </div>
      <span className="font-hud text-[10px] uppercase tracking-[0.3em] text-text-mid">
        Loading System&hellip;
      </span>
    </div>
  );
}
