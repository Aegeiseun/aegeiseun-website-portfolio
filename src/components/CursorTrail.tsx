"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 7;
const EASE = 0.35;

export default function CursorTrail() {
  const reticleRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    document.body.classList.add("custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: mouse.x,
      y: mouse.y,
    }));
    let hovering = false;
    let pressed = false;
    let visible = true;

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleOver = (e: MouseEvent) => {
      hovering = !!(e.target as HTMLElement).closest(
        "a, button, [role='button']"
      );
    };
    const handleDown = () => {
      pressed = true;
    };
    const handleUp = () => {
      pressed = false;
    };
    const handleLeave = () => {
      visible = false;
    };
    const handleEnter = () => {
      visible = true;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mousedown", handleDown, { passive: true });
    window.addEventListener("mouseup", handleUp, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    let rafId: number;
    const tick = () => {
      const scale = (hovering ? 1.5 : 1) * (pressed ? 0.85 : 1);
      const opacity = visible ? 1 : 0;
      if (reticleRef.current) {
        reticleRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        reticleRef.current.style.opacity = String(opacity);
        reticleRef.current.classList.toggle("cursor-hover", hovering);
      }

      let prev = mouse;
      positions.forEach((pos, i) => {
        pos.x += (prev.x - pos.x) * EASE;
        pos.y += (prev.y - pos.y) * EASE;
        const dot = dotsRef.current[i];
        if (dot) {
          const dotScale = 1 - i / TRAIL_LENGTH;
          dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
          dot.style.opacity = String(visible ? dotScale * 0.6 : 0);
        }
        prev = pos;
      });

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
          className={`cursor-dot ${i % 2 === 0 ? "cursor-dot-cyan" : "cursor-dot-magenta"}`}
        />
      ))}
      <div ref={reticleRef} className="cursor-reticle">
        <span className="cursor-corner cursor-corner-tl" />
        <span className="cursor-corner cursor-corner-tr" />
        <span className="cursor-corner cursor-corner-bl" />
        <span className="cursor-corner cursor-corner-br" />
        <span className="cursor-dot-center" />
      </div>
    </div>
  );
}
