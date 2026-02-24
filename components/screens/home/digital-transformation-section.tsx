import { cn } from "@/utils/cn";
import { ArrowRightLeft, Zap } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";

const unitTasks = [
  "رقمنة عمليات التوريد والتوزيع",
  "تطوير أنظمة تتبع الشحنات",
  "بناء لوحات تحكم تشغيلية لحظية",
  "تحسين تجربة العملاء عبر حلول رقمية",
  "استخدام الذكاء الاصطناعي في تحليل السوق",
];

const unitGoals = [
  "رفع كفاءة التشغيل",
  "تقليل الأخطاء البشرية",
  "تسريع اتخاذ القرار",
  "تعزيز الشفافية التشغيلية",
];

export default async function DigitalTransformationSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className="relative w-full bg-[#f7f3eb]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="container flex flex-col gap-10 md:gap-14">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="font-bold text-secondary leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
            >
              وحدة التحول الرقمي
            </h2>
            <p
              className="text-secondary/80  "
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
            >
              وحدة متخصصة في تطوير البنية الرقمية لضمان سرعة، دقة، وشفافية في كل
              عملية تشغيلية.
            </p>
          </header>

          {/* Content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left column – two stacked cards */}
            <div className="flex flex-col gap-5 md:gap-6">
              {/* Tasks card */}
              <article
                className={cn(
                  "rounded-3xl bg-white border border-secondary/10",
                  "shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
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
                    <Zap
                      style={{
                        width: "clamp(1.2rem, 1.4vw, 1.4rem)",
                        height: "clamp(1.2rem, 1.4vw, 1.4rem)",
                      }}
                      strokeWidth={2}
                    />
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {unitTasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2 text-secondary/85"
                      style={{
                        fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                      }}
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Goals card */}
              <article
                className={cn(
                  "rounded-3xl bg-white border border-secondary/10",
                  "shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
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
                    <ArrowRightLeft
                      style={{
                        width: "clamp(1.2rem, 1.4vw, 1.4rem)",
                        height: "clamp(1.2rem, 1.4vw, 1.4rem)",
                      }}
                      strokeWidth={2}
                    />
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {unitGoals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-start gap-2 text-secondary/85"
                      style={{
                        fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                      }}
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Right column – image card */}
            <div className="flex justify-center lg:justify-end">
              <div
                className={cn(
                  "relative  w-full rounded-3xl overflow-hidden",
                  "bg-white border border-primary/40",
                  "shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
                )}
              >
                <Image
                  src="/images/digital-unit.jpg"
                  alt="وحدة التحول الرقمي في كي إي بي للتجارة"
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

