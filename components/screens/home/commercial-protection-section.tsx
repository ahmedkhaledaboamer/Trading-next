"use client";

import { cn } from "@/utils/cn";
import { Shield } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const cardColors = [
  "bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 border-emerald-400",
  "bg-gradient-to-br from-sky-500 via-sky-400 to-sky-600 border-sky-400",
  "bg-gradient-to-br from-fuchsia-500 via-fuchsia-400 to-fuchsia-600 border-fuchsia-400",
  "bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 border-orange-400",
  "bg-gradient-to-br from-lime-500 via-lime-400 to-lime-600 border-lime-400",
  "bg-gradient-to-br from-rose-500 via-rose-400 to-rose-600 border-rose-400",
  "bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-600 border-cyan-400",
  "bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 border-amber-400",
];

const iconColors = [
  "text-emerald-500",
  "text-sky-500",
  "text-fuchsia-500",
  "text-orange-500",
  "text-lime-500",
  "text-rose-500",
  "text-cyan-500",
  "text-amber-500",
];

export default function CommercialProtectionSection() {
  const t = useTranslations("home.commercialProtection");
  const items = t.raw("items") as string[];

  return (
    <section className="p-[5%] bg-white" dir="rtl">
      <div className="  flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4">
          <h2
            className="inline-block font-bold text-[#1A1A2E] leading-tight text-2xl md:text-2xl xl:text-4xl 2xl:text-6xl bg-[#C9A84C] border border-[#8F7630] rounded-2xl px-6 py-4"
          >
            {t("title")}
          </h2>
          <p
            className="inline-block text-[#1A1A2E] text-base md:text-2xl bg-[#F8F6F1] border border-[#C9A84C] rounded-full px-5 py-2"
          >
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Image side */}
          <div className="relative h-[380px] md:h-[460px]  xl:h-[600px] w-full shadow-2xl">
            <div className="absolute top-8 -right-8 w-full h-full border-4 border-[#C9A84C] z-0 rounded-3xl" />
            <div className="relative z-10 w-full h-full overflow-hidden rounded-3xl">
              <Image
                src="/images/26.webp"
                alt={t("imageAlt")}
                fill
                className="object-cover grayscale-0 hover:grayscale-100 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-[#1A1A2E] p-6 md:p-8 z-20   rounded-tr-3xl">
              <h3 className="text-sm md:text-2xl xl:text-2xl 2xl:text-6xl font-bold text-white leading-tight">
                {t("highlight")}
                <span className="text-[#C9A84C]">{t("highlightSuffix")}</span>
              </h3>
            </div>
          </div>

          {/* List side */}
          <div className="space-y-5 md:space-y-6">
            {items.map((item, idx) => (
              <div
                key={item}
                className={cn(
                  "flex items-center gap-5 md:gap-6 p-5 md:p-6",
                  "bg-[#F8F6F1] border-r-4 border-transparent",
                  "hover:border-[#C9A84C] hover:bg-white hover:shadow-lg transition-all duration-300 group rounded-2xl",
                  cardColors[idx % cardColors.length]
                )}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#C9A84C] transition-colors">
                  <Shield
                    className={cn(
                      "w-6 h-6 group-hover:text-white transition-colors",
                      iconColors[idx % iconColors.length]
                    )}
                  />
                </div>
                <span className="font-bold text-white group-hover:text-gray-300  transition-colors text-base md:text-2xl">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

