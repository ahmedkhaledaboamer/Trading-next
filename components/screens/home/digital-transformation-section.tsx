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
      <div className="p-[5%]">
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="inline-block font-bold text-[#0D47A1] leading-tight text-2xl md:text-6xl bg-[#E3F2FD] border border-[#90CAF9] rounded-2xl px-6 py-4"
            >
              وحدة التحول الرقمي
            </h2>
            <p
              className="inline-block text-[#4A2C0A] text-base md:text-2xl bg-[#FFF3E0] border border-[#FFB74D] rounded-full px-5 py-2"
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
                    className="font-bold text-orange-700 border border-orange-300 bg-orange-50 rounded-2xl px-6 py-4 text-xl md:text-3xl xl:text-5xl"
                  >
                    مهام الوحدة
                  </h3>
                  <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                    <Zap
                      style={{
                        width: "2rem",
                        height: "2rem",
                      }}
                      strokeWidth={2}
                    />
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {unitTasks.map((task) => (
                    <li
                      key={task}
                        className="flex items-start gap-2 text-secondary/85 text-base md:text-xl xl:text-3xl"
                    >
                      <span className="mt-5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
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
                    className="font-bold text-orange-700 border border-orange-300 bg-orange-50 rounded-2xl px-6 py-4 text-xl md:text-3xl xl:text-5xl"
                  >
                    أهداف الوحدة
                  </h3>
                  <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                    <ArrowRightLeft
                      style={{
                        width: "2rem",
                        height: "2rem",
                      }}
                      strokeWidth={2}
                    />
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {unitGoals.map((goal) => (
                    <li
                      key={goal}
                        className="flex items-start gap-2 text-secondary/85 text-base md:text-xl xl:text-3xl"
                    >
                      <span className="mt-5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Right column – image card, stretches to match left column height */}
            <div className="flex flex-col min-h-[280px]">
              <div
                className={cn(
                  "relative flex-1 w-full rounded-3xl overflow-hidden",
                  "bg-white border border-primary/40",
                  "shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
                )}
              >
                <Image
                  src="/images/image_2686.webp"
                  alt="وحدة التحول الرقمي في كي إي بي للتجارة"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}