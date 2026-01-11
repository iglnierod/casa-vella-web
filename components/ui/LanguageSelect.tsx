"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LOCALES = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
] as const;

export default function LanguageSelect() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname(); // e.g. /es, /en, /pt

  function onChange(nextLocale: string) {
    // Mantener hash (#section) si existe
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    // Quita el locale actual del pathname: /es/... -> /...
    const parts = pathname.split("/").filter(Boolean);
    const withoutLocale =
      parts.length > 0 && LOCALES.some((l) => l.value === (parts[0] as any))
        ? "/" + parts.slice(1).join("/")
        : pathname;

    const target = `/${nextLocale}${
      withoutLocale === "/" ? "" : withoutLocale
    }${hash}`;
    router.push(target);
  }

  return (
    <div className="relative">
      <label htmlFor="lang" className="sr-only">
        Language
      </label>

      <select
        id="lang"
        value={locale}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 rounded-xl border border-white/15 bg-white/5 px-3 text-sm font-medium text-white outline-none backdrop-blur
                   hover:bg-white/10 focus:ring-2 focus:ring-lime-500/60"
      >
        {LOCALES.map((l) => (
          <option key={l.value} value={l.value} className="bg-zinc-900">
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
