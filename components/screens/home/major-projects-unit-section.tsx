import { cn } from "@/utils/cn";
import { Headphones, Layers, LucideIcon, Monitor, Package, Timer } from "lucide-react";
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
    title: "دعم فني وتشغيلي مستمر",
    icon: Headphones,
  },
  {
    id: "continuous-support-2",
    title: "دعم فني وتشغيلي مستمر 2",
    icon: Headphones,
  },
];

export default async function MajorProjectsUnitSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="w-full bg-[#f7f3eb]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="p-[5%]">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="flex flex-col items-start gap-3 text-right">
            <h2
              className="font-bold text-secondary leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
            >
              وحدة المشاريع الكبرى
            </h2>
            <p
              className="text-secondary/80"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
            >
              وحدة مخصصة لإدارة المشاريع الضخمة، من التخطيط إلى التنفيذ عبر حلول
              توريد وتشغيل متكاملة.
            </p>
          </header>

          {/* Layout: image + feature pills */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-8 lg:gap-10 items-stretch">
            {/* Image column – stretches to match features grid height */}
            <div className="flex flex-col min-h-[280px]">
              <div
                className={cn(
                  "relative flex-1 w-full rounded-3xl overflow-hidden",
                  "shadow-[0_22px_60px_rgba(0,0,0,0.16)] border border-secondary/10 bg-white"
                )}
              >
                <Image
                  src="/images/32.webp"
                  alt="وحدة متخصصة لإدارة المشاريع الكبرى"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 content-start">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className={cn(
                      "flex items-center justify-between gap-3",
                      "rounded-2xl bg-[#fdf7eb] border border-secondary/10",
                      "px-4 py-3 md:px-5 md:py-4 shadow-[0_10px_26px_rgba(0,0,0,0.04)]"
                    )}
                  >
                    <span
                      className="text-secondary font-semibold"
                      style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)" }}
                    >
                      {feature.title}
                    </span>
                    <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5 shrink-0">
                      <Icon
                        style={{
                          width: "clamp(1.2rem, 1.4vw, 1.4rem)",
                          height: "clamp(1.2rem, 1.4vw, 1.4rem)",
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