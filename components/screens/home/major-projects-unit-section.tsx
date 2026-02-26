import { cn } from "@/utils/cn";
import { Headphones, Layers, LucideIcon, Monitor, Package, Timer, TrendingUp } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";

interface Feature {
  id: string;
  title: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    id: "large-quantities",
    title: "توريد كميات كبيرة",
    icon: Package,
  },
  {
    id: "advanced-tech",
    title: "تجهيزات تقنية متقدمة",
    icon: Monitor,
  },
  {
    id: "integrated-solutions",
    title: "حلول تشغيلية متكاملة",
    icon: Layers,
  },
  {
    id: "long-term-supply",
    title: "إدارة توريد طويلة المدى",
    icon: Timer,
  },
  {
    id: "continuous-support",
    title: "دعم فني  ",
    icon: Headphones,
  },
  {
    id: "continuous-support-2",
    title: "التشغيل مستمر ",
    icon: TrendingUp   ,
  },
];

const featureCardColors = [
  "bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 border-emerald-400",
  "bg-gradient-to-br from-sky-500 via-sky-400 to-sky-600 border-sky-400",
  "bg-gradient-to-br from-fuchsia-500 via-fuchsia-400 to-fuchsia-600 border-fuchsia-400",
  "bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 border-orange-400",
  "bg-gradient-to-br from-lime-500 via-lime-400 to-lime-600 border-lime-400",
  "bg-gradient-to-br from-rose-500 via-rose-400 to-rose-600 border-rose-400",
  "bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-600 border-cyan-400",
  "bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 border-amber-400",
];

const featureIconColors = [
  "bg-emerald-500",
  "bg-sky-500",
  "bg-fuchsia-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-amber-500",
];

export default async function MajorProjectsUnitSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="w-full bg-[#f7f3eb]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="p-[5%]">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="flex flex-col items-center md:items-start gap-3 text-right">
            <h2
              className="inline-block  font-bold text-[#283593] leading-tight text-2xl md:text-xl xl:text-4xl 2xl:text-6xl bg-[#E8EAF6] border border-[#9FA8DA] rounded-2xl px-6 py-4"
            >
              وحدة المشاريع الكبرى
            </h2>
            <p
              className="inline-block text-[#303F9F] text-center md:text-start text-base md:text-2xl bg-[#C5CAE9] border border-[#7986CB] rounded-full px-5 py-2 mt-1"
            >
              وحدة مخصصة لإدارة المشاريع الضخمة، من التخطيط إلى التنفيذ عبر حلول
              توريد وتشغيل متكاملة.
            </p>
          </header>

          {/* Layout: image + feature pills */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-stretch justify-between w-full align-middle">
            {/* Image column – stretches to match features grid height */}
            <div className="flex flex-col min-h-[500px] md:min-h-[600px] w-full md:w-1/2">
              <div
                className={cn(
                  "relative flex-1 w-full rounded-3xl overflow-hidden",
                  "shadow-[0_22px_60px_rgba(0,0,0,0.16)] border border-secondary/10 bg-white"
                )}
              >
                <Image
                  src="/images/image_2678.webp"
                  alt="وحدة متخصصة لإدارة المشاريع الكبرى"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full md:w-1/2 ">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className={cn(
                      "flex items-center justify-between gap-3 ",
                      "rounded-2xl px-4 py-3 md:px-5 md:py-2 xl:py-2 2xl:py-4 shadow-[0_10px_26px_rgba(0,0,0,0.04)]",
                      "transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A84C] hover:border-[#C9A84C] group",
                      featureCardColors[idx % featureCardColors.length]
                    )}
                  >
                    <span
                      className="text-white font-semibold text-base md:text-xl xl:text-md 2xl:text-4xl group-hover:text-[#1A1A2E]"
                    >
                      {feature.title}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center justify-center rounded-2xl text-white p-2.5 shrink-0",
                        "transition-colors duration-300 group-hover:bg-white group-hover:text-[#C9A84C]",
                        featureIconColors[idx % featureIconColors.length]
                      )}
                    >
                      <Icon
                        style={{
                          width: "clamp(1.4rem, 1.4vw, 1.4rem)",
                          height: "clamp(1.4rem, 1.4vw, 1.4rem)",
                        }}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}