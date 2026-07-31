"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import ScrollProgress from "@/components/ScrollProgress";

export default function Nav() {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-panel-border bg-void/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#hero"
          className="font-display text-sm tracking-wide text-cyan text-glow-cyan sm:text-base"
        >
          JP
        </a>

        <ul className="hidden items-center gap-6 font-hud text-xs uppercase tracking-widest md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative pb-1 transition-colors duration-200 ${
                    isActive ? "text-cyan" : "text-text-mid hover:text-text-hi"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full bg-cyan transition-opacity duration-300 ${
                      isActive ? "opacity-100 glow-cyan" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-text-hi transition-transform duration-200 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-text-hi transition-transform duration-200 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <ScrollProgress />

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-panel-border bg-void px-5 py-4 font-hud text-sm uppercase tracking-widest md:hidden">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 ${isActive ? "text-cyan" : "text-text-mid"}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
