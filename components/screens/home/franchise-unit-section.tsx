import { cn } from "@/utils/cn";
import { BadgePercent, Briefcase } from "lucide-react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

export default async function FranchiseUnitSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("home.franchiseUnit");
  const benefits = t.raw("benefits") as string[];
  const tasks = t.raw("tasks") as string[];

  return (
    <section
      className="relative w-full bg-[#f7f3eb]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="p-[5%]">
        <div className="  flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="inline-block font-bold text-[#4E342E] leading-tight text-2xl md:text-xl xl:text-4xl 2xl:text-6xl bg-[#FFE0B2] border border-[#FFB74D] rounded-2xl px-6 py-4"
            >
              {t("title")}
            </h2>
            <p
              className="inline-block text-[#5D4037] text-base md:text-2xl bg-[#FFF8E1] border border-[#FFECB3] rounded-full px-5 py-2"
            >
              {t("subtitle")}
            </p>
          </header>

          {/* Main layout: two info cards + image */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.3fr)_minmax(0,0.4fr)] gap-6 md:gap-8 items-start">
            {/* Benefits card */}
            <article
              className={cn(
                "rounded-3xl bg-white border border-secondary/10",
                "shadow-[0_14px_36px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1 border-b border-primary/40 pb-3">
                <h3
                  className="font-bold text-orange-700 border border-orange-300 bg-orange-50 rounded-2xl px-6 py-4 text-xl md:text-xl xl:text-xl 2xl:text-5xl"
                >
                  {t("benefitsTitle")}
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <BadgePercent
                    style={{
                      width: "2rem",
                      height: "2rem",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>

              <ul className="space-y-2.5">
                {benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-secondary/85 text-base md:text-xl xl:text-lg 2xl:text-4xl"
                  >
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-secondary/85 text-base md:text-xl xl:text-sm 2xl:text-3xl bg-primary/30 rounded-2xl p-4">
                {t("benefitsNote")}
              </p>
            </article>

            {/* Tasks card */}
            <article
              className={cn(
                "rounded-3xl bg-white border border-secondary/10",
                "shadow-[0_14px_36px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1 border-b border-primary/40 pb-3">
                <h3
                  className="font-bold text-orange-700 border border-orange-300 bg-orange-50 rounded-2xl px-6 py-4 text-xl md:text-xl xl:text-xl 2xl:text-5xl"
                >
                  {t("tasksTitle")}
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <Briefcase
                    style={{
                      width: "2rem",
                      height: "2rem",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>

              <ul className="space-y-2.5">
                {tasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-start gap-2 text-secondary/85 text-base md:text-xl xl:text-lg 2xl:text-4xl"
                  >
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              <p className="text-secondary/85 text-base md:text-xl xl:text-sm 2xl:text-3xl bg-primary/30 rounded-2xl p-4">
                {t("tasksNote")}
              </p>
            </article>

            {/* Image card */}
            <div className="flex justify-center lg:justify-end">
              <div
                className={cn(
                  "relative w-full h-[50vh] rounded-3xl overflow-hidden",
                  "bg-white border border-primary/40",
                  "shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
                )}
              >
                <Image
                  src="/images/29.webp"
                  alt={t("imageAlt")}
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

