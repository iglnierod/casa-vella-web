"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const SECTIONS = [
  { key: "Nav.about", href: "#about" },
  { key: "Nav.rules", href: "#rules" },
  { key: "Nav.gallery", href: "#gallery" },
  { key: "Nav.reviews", href: "#reviews" },
  { key: "Nav.location", href: "#location" },
  { key: "Nav.contact", href: "#contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("");
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
    }
    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur supports-backdrop-filter:bg-black/30">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 text-white"
          onClick={() => setOpen(false)}
        >
          <span className="logo-font text-4xl tracking-wider">
            {t("brand")}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              className="transition-colors hover:text-white"
            >
              {t(s.key)}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-lime-500 px-4 py-2 text-sm font-medium text-black hover:bg-lime-400 md:inline-flex"
          >
            {t("cta")}
          </a>

          {/* Mobile toggle */}
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {/* Icon */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M5 7h14M5 12h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={["md:hidden", open ? "block" : "hidden"].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-black-950/60 p-2 backdrop-blur">
            {SECTIONS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {t(s.key)}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-lime-500 px-3 py-3 text-center text-sm font-medium text-black hover:bg-lime-400"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
