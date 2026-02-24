import Button from "@/components/button";
import { cn } from "@/utils/cn";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Header() {
  const t = await getTranslations("header");
  const locale = await getLocale();
  const isRTL = locale === "ar";
  return (
    <header
      className={cn("relative flex h-svh w-full items-center justify-center")}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div
        className="relative z-20 text-white text-center flex flex-col items-center justify-center w-full max-w-4xl px-6"
        style={{
          gap: "clamp(1.5rem, 3vw, 4rem)",
        }}
      >
        <h1
          className="font-bold text-primary"
          style={{
            fontSize: "clamp(2rem, 5vw, 6rem)",
            lineHeight: "1.1",
          }}
        >
          {t("title")}
        </h1>
        <h2
          className="font-bold text-white"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 3rem)",
            lineHeight: "1.2",
          }}
        >
          {t("subtitle")}
        </h2>
        <div
          className="flex items-center justify-center flex-col lg:flex-row"
          style={{
            gap: "clamp(1rem, 2vw, 2rem)",
          }}
        >
          <Button variant="primary" size="lg" className="font-extrabold">
            {t("cta.bookConsultation")}
          </Button>
          <Button variant="secondary" size="lg" className="font-extrabold">
            {t("cta.exploreServices")}
          </Button>
        </div>
      </div>
    </header>
  );
}
