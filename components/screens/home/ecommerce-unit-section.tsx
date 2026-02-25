import { cn } from "@/utils/cn";
import { ShoppingBag, Target } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";

const unitObjectives = [
  "الوصول إلى شريحة أكبر من العملاء",
  "تسريع عمليات البيع",
  "تحسين تجربة الشراء",
  "دعم الشركاء في التحول الرقمي الكامل",
];

const unitTasks = [
  "إدارة المتاجر الإلكترونية",
  "تطوير حلول دفع إلكتروني",
  "إدارة المخزون الرقمي",
  "تشغيل حملات تسويق إلكتروني",
  "ربط التوريد بالمنصات الرقمية",
];

export default async function EcommerceUnitSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="p-[5%]">
        <div className="  flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="font-bold text-secondary leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
            >
              وحدة التجارة الإلكترونية
            </h2>
            <p
              className="text-secondary/80  "
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
            >
              وحدة متخصصة في إدارة وتطوير عمليات البيع الرقمي عبر منصات متكاملة
              للتجارة الإلكترونية.
            </p>
          </header>

          {/* Hero banner */}
          <div
            className={cn(
              "relative rounded-3xl overflow-hidden",
              "shadow-[0_22px_60px_rgba(0,0,0,0.16)] border border-primary/40"
            )}
          >
            <div className="relative h-56 md:h-64 lg:h-72">
              <Image
                src="/images/28.webp"
                alt="منصة رقمية متكاملة للبيع والتوزيع"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/25 to-black/5" />
              <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-10">
                <h3
                  className="font-bold text-center text-white"
                  style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)" }}
                >
                  منصة رقمية متكاملة للبيع والتوزيع
                </h3>
              </div>
            </div>
          </div>

          {/* Objectives & tasks cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Objectives */}
            <article
              className={cn(
                "rounded-3xl bg-[#f8f4ea] border border-secondary/10",
                "shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3
                  className="font-bold text-secondary"
                  style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)" }}
                >
                  أهداف الوحدة
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <Target
                    style={{
                      width: "clamp(1.2rem, 1.4vw, 1.4rem)",
                      height: "clamp(1.2rem, 1.4vw, 1.4rem)",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>
              <ul className="space-y-2">
                {unitObjectives.map((item, idx) => (
                  <li
                    key={item}
                    className={cn(
                      "text-secondary/85 pb-2",
                      idx !== unitObjectives.length - 1 && "border-b border-secondary/10"
                    )}
                    style={{
                      fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Tasks */}
            <article
              className={cn(
                "rounded-3xl bg-[#f8f4ea] border border-secondary/10",
                "shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3
                  className="font-bold text-secondary"
                  style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)" }}
                >
                  مهام الوحدة
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <ShoppingBag
                    style={{
                      width: "clamp(1.2rem, 1.4vw, 1.4rem)",
                      height: "clamp(1.2rem, 1.4vw, 1.4rem)",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>
              <ul className="space-y-2">
                {unitTasks.map((task, idx) => (
                  <li
                    key={task}
                    className={cn(
                      "text-secondary/85 pb-2",
                      idx !== unitTasks.length - 1 && "border-b border-secondary/10"
                    )}
                    style={{
                      fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                    }}
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

