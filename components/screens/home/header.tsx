import Button from "@/components/button";
import { Link } from "@/i18n/routing";
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
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div
        className="relative z-20 text-white text-center flex flex-col items-center justify-center w-full  pt-20 md:px-20 xl:px-[5%] px-8"
        style={{
          gap: "clamp(1rem, 2vw, 4rem)",
        }}
      >
        <h1
          className="font-bold text-primary"
          style={{
            fontSize: "clamp(1.5rem, 2vw, 6rem)",
            lineHeight: "1.1",
          }}
        >
          {t("companyName")}
        </h1>
        <h2
          className="font-bold text-white"
          style={{
            fontSize: "clamp(1rem, 2vw, 7rem)",
            lineHeight: "1.2",
          }}
        >
          {t("tagline")}
        </h2>
        <p className="p-4 bg-black/50 font-bold  border border-yellow-500 text-white rounded-2xl" style={{
            fontSize: "clamp(1rem, 1vw, 3rem)",
            
          }}>
          {t("paragraph1")}
        </p>
        <p className="p-4 font-bold bg-black/50 border border-yellow-500 text-white rounded-2xl"style={{
            fontSize: "clamp(1rem, 1.5vw, 2.5rem)",
            
          }}>{t("paragraph2")}</p>
        <div
          className="flex items-center justify-center  flex-row"
          style={{
            gap: "clamp(1rem, 2vw, 2rem)",
          }}
        >
          <Link href="/business-path">
            <Button variant="primary" size="lg" className="font-extrabold">
              {t("ctaBusinessPath")}
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="lg" className="font-extrabold">
              {t("cta.exploreServices")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
