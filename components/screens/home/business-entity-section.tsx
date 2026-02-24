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

export default async function BusinessEntitySection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
            {/* Text / left side */}
            <div className="flex flex-col gap-6">
              <p
                className="text-primary font-semibold"
                style={{
                  fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                }}
              >
                الكيان التجاري
              </p>

              <h2
                className="text-secondary font-bold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 2.6vw, 2.8rem)",
                }}
              >
                منظومة متكاملة تدير حركة التجارة باحترافية عالية
              </h2>

              <p
                className="text-secondary/80"
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
                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center gap-3 rounded-full",
                        "bg-primary/5 border border-primary/20",
                        "px-4 py-2.5"
                      )}
                    >
                      <span className="inline-flex items-center justify-center rounded-full bg-white p-2">
                        <Icon
                          className="text-primary"
                          style={{
                            width: "1.1rem",
                            height: "1.1rem",
                          }}
                          strokeWidth={2}
                          aria-hidden
                        />
                      </span>
                      <span
                        className="text-secondary font-semibold"
                        style={{
                          fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
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
                className="mt-4 rounded-2xl bg-primary/5 border border-primary/30 px-5 py-4 text-secondary/90"
                style={{
                  fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                }}
              >
                “نُدير عمليات الاستيراد، التصدير، التوزيع، والتوريد عبر منظومة
                تشغيلية تضمن السرعة، الثبات، والجودة في كل خطوة.”
              </div>
            </div>

            {/* Image / right side */}
            <div className="flex justify-center lg:justify-end">
  <div className="relative w-full">
    {/* Decorative border accent */}
    <div
      aria-hidden="true"
      className="absolute bottom-8 -right-8 w-full h-full border-2 border-[#C9A84C] rounded-2xl z-0 pointer-events-none"
    />

    {/* Image card */}
    <div
      className={cn(
        "relative z-10 w-full rounded-3xl overflow-hidden",
        "bg-white border border-primary/30",
        "shadow-2xl"
      )}
    >
      <Image
        src="/images/hero.png"
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
