import { cn } from "@/utils/cn";
import { Activity, ArrowUpRight, Eye, Settings2, Users } from "lucide-react";
import { getLocale } from "next-intl/server";

const steps = [
  {
    id: "market-insight",
    title: "قراءة دقيقة للسوق",
    description:
      "تحليل شامل للطلب، المنافسة، واتجاهات المستهلك لبناء صورة واضحة عن الفرص والمخاطر.",
    icon: Activity,
  },
  {
    id: "supplier-selection",
    title: "اختيار الموردين بعناية",
    description:
      "مصادر عالمية موثوقة تضمن جودة ثابتة واستمرارية في التوريد مع معايير اختيار صارمة.",
    icon: Users,
  },
  {
    id: "controlled-execution",
    title: "تنفيذ محكم",
    description:
      "إدارة عمليات الاستيراد، النقل، والتسليم وفق إجراءات تشغيلية تضبط الوقت والجودة.",
    icon: Settings2,
  },
  {
    id: "continuous-monitoring",
    title: "متابعة مستمرة",
    description:
      "رقابة تشغيلية تضمن وصول المنتجات دون تأخير أو خلل، مع متابعة لحظية لمسار الشحن.",
    icon: Eye,
  },
  {
    id: "continuous-improvement",
    title: "تطوير مستمر",
    description:
      "تحسين دائم للعمليات بناءً على البيانات، مع تبنّي أفضل الممارسات في التجارة والخدمات.",
    icon: ArrowUpRight,
  },
];

export default async function WorkMethodologySection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="container flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="font-bold text-secondary leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
            >
              منهجية العمل في كي إي بي للتجارة
            </h2>
            <p
              className="text-secondary/80  "
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
            >
              نموذج تشغيل يعتمد على خطوات مترابطة تضمن دقة القرار، جودة التنفيذ، واستمرارية التطوير.
            </p>
          </header>

          {/* Steps line + items */}
          <div className="relative">
            {/* horizontal line (desktop) */}
            <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-secondary/20" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 lg:gap-6 relative">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.id}
                    className={cn(
                      "flex flex-col items-center text-center gap-3",
                      "md:gap-4"
                    )}
                  >
                    {/* Icon circle */}
                    <div className="relative z-10 flex items-center justify-center rounded-full border-2 border-primary bg-white p-3 md:p-4">
                      <Icon
                        className="text-primary"
                        style={{
                          width: "clamp(1.5rem, 2vw, 2rem)",
                          height: "clamp(1.5rem, 2vw, 2rem)",
                        }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-secondary"
                      style={{
                        fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-secondary/80 leading-relaxed"
                      style={{
                        fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)",
                      }}
                    >
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

