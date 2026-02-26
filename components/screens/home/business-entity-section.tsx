import { cn } from "@/utils/cn";
import { Check, Crown, Eye, Zap, type LucideIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import Image from "next/image";

const features = [
  {
    title: "قوة المركز",
    icon: Zap,
  },
  {
    title: "وضوح الرؤية",
    icon: Eye,
  },
  {
    title: "دقة التنفيذ",
    icon: Check,
  },
  {
    title: "سيادة القرار التجاري",
    icon: Crown,
  },
];

const featureCardColors = [
  "bg-gradient-to-br from-emerald-500/25 via-emerald-500/10 to-transparent border-emerald-400/70",
  "bg-gradient-to-br from-sky-500/25 via-sky-500/10 to-transparent border-sky-400/70",
  "bg-gradient-to-br from-fuchsia-500/25 via-fuchsia-500/10 to-transparent border-fuchsia-400/70",
  "bg-gradient-to-br from-orange-500/25 via-orange-500/10 to-transparent border-orange-400/70",
  "bg-gradient-to-br from-lime-500/25 via-lime-500/10 to-transparent border-lime-400/70",
  "bg-gradient-to-br from-rose-500/25 via-rose-500/10 to-transparent border-rose-400/70",
  "bg-gradient-to-br from-cyan-500/25 via-cyan-500/10 to-transparent border-cyan-400/70",
  "bg-gradient-to-br from-amber-500/25 via-amber-500/10 to-transparent border-amber-400/70",
];

const featureIconColors = [
  "text-emerald-500",
  "text-sky-500",
  "text-fuchsia-500",
  "text-orange-500",
  "text-lime-500",
  "text-rose-500",
  "text-cyan-500",
  "text-amber-500",
];

export default async function BusinessEntitySection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="p-[5%] 2xl:px-[10%] 2xl:py-[5%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text / left side */}
            <div className="flex flex-col gap-6">
              <p
                className="inline-block text-primary text-center  font-semibold bg-primary/5 border border-primary/30 rounded-full px-4 py-1"
                style={{
                  fontSize: "clamp(2rem, 2vw, 5rem)",
                }}
              >
                الكيان التجاري 
              </p>

              <h2
                className="inline-block text-secondary text-center font-bold leading-tight bg-primary/5 border border-primary/40 rounded-2xl px-4 py-3"
                style={{
                  fontSize: "clamp(0.75rem, 2.6vw, 2.8rem)",
                }}
              >
                منظومة متكاملة تدير حركة التجارة باحترافية عالية
              </h2>

              <p
                className="text-secondary/80 text-center"
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
                }}
              >
                كي إي بي للتجارة تعمل وفق نموذج تشغيل متقدم يدمج بين الرؤية
                الاستراتيجية والتنفيذ الدقيق لضمان الريادة في السوق.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon as LucideIcon;
                  const cardColor =
                    featureCardColors[index % featureCardColors.length];
                  const iconColor =
                    featureIconColors[index % featureIconColors.length];

                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center gap-3 rounded-full border px-4 py-2.5",
                        cardColor
                      )}
                    >
                      <span className="inline-flex items-center justify-center rounded-full bg-white p-2">
                        <Icon
                          className={cn(iconColor)}
                          style={{
                            width: "2rem",
                            height: "2rem",
                          }}
                          strokeWidth={2}
                          aria-hidden
                        />
                      </span>
                      <span
                        className="text-secondary font-semibold"
                        style={{
                          fontSize: "clamp(1.5rem, 1.05vw, 1.05rem)",
                        }}
                      >
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Highlighted quote */}
              <div
                className="mt-4 rounded-2xl text-center bg-primary/5 border border-primary/30 px-5 py-4 text-secondary/90"
                style={{
                  fontSize: "clamp(1.2rem, 1.05vw, 1.05rem)",
                }}
              >
                “نُدير عمليات الاستيراد، التصدير، التوزيع، والتوريد عبر منظومة
                تشغيلية تضمن السرعة، الثبات، والجودة في كل خطوة.”
              </div>
            </div>

            {/* Image / right side */}
            <div className="flex justify-center  items-center">
              <div className="relative w-full">
                {/* Decorative border accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-8 -right-8 w-[50%] lg:w-[80%] 2xl:w-[100%] h-full border-2 border-[#C9A84C] rounded-2xl z-0 pointer-events-none"
                />

                {/* Image card */}
                <div
                  className={cn(
                    "relative z-10 w-full md:w-[80%] lg:w-[100%] rounded-3xl overflow-hidden",
                    "bg-white border border-primary/30",
                    "shadow-2xl"
                  )}
                >
                  <Image
                    src="/images/40.webp"
                    alt="منظومة متكاملة تدير حركة التجارة"
                    width={900}
                    height={600}
                    className="w-full h-full object-cover "
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
