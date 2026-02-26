import { cn } from "@/utils/cn";
import { ShoppingBag, Target } from "lucide-react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

export default async function EcommerceUnitSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("home.ecommerceUnit");
  const objectives = t.raw("objectives") as string[];
  const tasks = t.raw("tasks") as string[];

  return (
    <section className="relative w-full bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="p-[5%]">
        <div className="  flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="inline-block font-bold text-fuchsia-900 leading-tight text-2xl md:text-xl xl:text-4xl 2xl:text-6xl bg-fuchsia-100 border border-fuchsia-300 rounded-2xl px-6 py-4"
            >
              {t("title")}
            </h2>
            <p
              className="inline-block text-indigo-900 text-base md:text-2xl bg-indigo-50 border border-indigo-200 rounded-full px-5 py-2"
            >
              {t("subtitle")}
            </p>
          </header>

          {/* Hero banner */}
          <div
            className={cn(
              "relative rounded-3xl overflow-hidden",
              "shadow-[0_22px_60px_rgba(0,0,0,0.16)] border border-primary/40"
            )}
          >
           
          </div>

          {/* Objectives & tasks cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Objectives */}
            <article
              className={cn(
                "rounded-3xl bg-orange-50 border border-orange-300",
                "shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3
                  className="font-bold text-orange-700 border border-orange-300 bg-orange-700/20 rounded-2xl px-6 py-4 text-xl md:text-3xl xl:text-5xl"
                >
                  {t("objectivesTitle")}
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <Target
                    style={{
                      width: "2rem",
                      height: "2rem",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>
              <ul className="space-y-2">
                {objectives.map((item, idx) => (
                  <li
                    key={item}
                    className={cn(
                      "text-secondary/85 pb-2 text-base md:text-xl xl:text-3xl",
                      idx !== objectives.length - 1 && "border-b border-secondary/10"
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Tasks */}
            <article
              className={cn(
                "rounded-3xl bg-orange-50 border border-orange-300",
                "shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3
                  className="font-bold text-orange-700 border border-orange-300 bg-orange-700/20 rounded-2xl px-6 py-4 text-xl md:text-3xl xl:text-5xl"
                >
                  {t("tasksTitle")}
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <ShoppingBag
                    style={{
                      width: "2rem",
                      height: "2rem",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>
              <ul className="space-y-2">
                {tasks.map((task, idx) => (
                  <li
                    key={task}
                    className={cn(
                      "text-secondary/85 pb-2 text-base md:text-xl xl:text-3xl",
                      idx !== tasks.length - 1 && "border-b border-secondary/10"
                    )}
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

