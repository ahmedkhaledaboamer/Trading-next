import { cn } from "@/utils/cn";
import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

export default async function SuppliersNetworkSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("home.suppliersNetwork");
  const benefits = t.raw("benefits") as string[];
  const regions = t.raw("regions") as string[];

  return (
    <section
      className="relative  w-full "
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/37.webp"
          alt={t("imageAlt")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="container py-[5%]">
        <div className="  flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-3">
            <h2
              className="inline-block font-bold text-amber-200 leading-tight text-2xl md:text-xl xl:text-2xl 2xl:text-6xl bg-amber-900 border border-amber-500 rounded-2xl px-6 py-4"
            >
              {t("title")}
            </h2>
            <p
              className="inline-block text-sky-100 text-base md:text-2xl xl:text-3xl bg-sky-900/80 border border-sky-500 rounded-full px-5 py-2"
            >
              {t("subtitle")}
            </p>
          </header>

          {/* Glass cards row */}
          <div className="mx-auto grid w-full  grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits card */}
            <article
              className={cn(
                "rounded-3xl border border-white/15 bg-white/10",
                "backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
              )}
            >
              <div className="p-6 md:p-7 lg:p-8 flex flex-col gap-4">
                <h3
                  className="font-bold text-white border-b border-white/15 pb-3 mb-1 flex items-center justify-between gap-3 text-base md:text-xl xl:text-2xl 2xl:text-5xl"
                >
                  <span>{t("benefitsTitle")}</span>
                  <Check
                    className="text-primary"
                    style={{ width: "2rem", height: "2rem" }}
                    strokeWidth={2.2}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/90 text-base md:text-xl xl:text-3xl"
                    >
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Regions card */}
            <article
              className={cn(
                "rounded-3xl border border-white/15 bg-white/10",
                "backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
              )}
            >
              <div className="p-6 md:p-7 lg:p-8 flex flex-col gap-4">
                <h3
                  className="font-bold text-white border-b border-white/15 pb-3 mb-1 flex items-center justify-between gap-3 text-base md:text-xl xl:text-2xl 2xl:text-5xl"
                >
                  <span>{t("regionsTitle")}</span>
                  <MapPin
                    className="text-primary"
                    style={{ width: "2rem", height: "2rem" }}
                    strokeWidth={2.2}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {regions.map((region) => (
                    <li
                      key={region}
                      className="flex items-start gap-2 text-white/90 text-base md:text-xl xl:text-3xl"
                    >
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{region}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}


