import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import HeroImage from "@/public/hero.jpeg";
import ArrowBadgeDown from "@/public/arrow-narrow-down-dashed.svg";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <section className="relative h-dvh w-full flex flex-col items-center overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src={HeroImage}
          alt="Casa rural rodeada de naturaleza"
          fill
          priority
          className="object-cover rounded"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              {t("brand")}
            </h1>

            <p className="mt-4 text-lg text-white/80 md:text-xl">
              {t("Hero.desc")}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-lime-500 px-8 py-3 text-base font-medium text-black hover:bg-lime-400">
                {t("Hero.explore")}
              </button>

              <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur hover:bg-white/20">
                {t("Hero.ask")}
              </button>
            </div>
          </div>
        </div>
        <div className="relative bottom-5 z-10 animate-pulse">
          <Image
            src={ArrowBadgeDown}
            alt="Svg icon arrow badge down"
            width={60}
            className=""
          />
        </div>
      </section>
    </>
  );
}
