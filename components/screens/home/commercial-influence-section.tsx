import { cn } from "@/utils/cn";
import { Cog, Globe2, Target, type LucideIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import Image from "next/image";

type Pillar = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const pillars: Pillar[] = [
  {
    id: "operational",
    title: "النفوذ التشغيلي",
    icon: Cog,
    description:
      "تحكم كامل في مسارات التوريد من المصدر إلى العميل، مع بنية تشغيلية مرنة وسريعة الاستجابة.",
    imageSrc: "/images/1.webp",
    imageAlt: "فريق يعمل على إدارة العمليات التشغيلية في بيئة مكتبية",
  },
  {
    id: "market",
    title: "النفوذ السوقي",
    icon: Globe2,
    description:
      "وجود قوي في أسواق متعددة يمنح الشركة قدرة تفاوضية عالية وتأثيراً في حركة الطلب.",
      imageSrc: "/images/2.webp",
      imageAlt: "أفق مدينة وأسواق تعبر عن النفوذ السوقي",
  },
  {
    id: "strategic",
    title: "النفوذ الاستراتيجي",
    icon: Target,
    description:
      "قرارات مبنية على تحليل عميق للبيانات واتجاهات السوق، وتبنّي نماذج عمل تخلق ميزة مستدامة.",
      imageSrc: "/images/3.webp",
      imageAlt: "اجتماع عمل يخطط للاستراتيجيات التجارية",
  },
  
];

export default async function CommercialInfluenceSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className=" p-[5%] pt-[0]">
        <div className=" flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="font-bold text-secondary leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
            >
              بنية النفوذ التجاري
            </h2>
            <p
              className="text-secondary/80"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
            >
              هيكل القوة داخل كي إي بي للتجارة يعتمد على ثلاث ركائز رئيسية
              تمنحنا عمقاً في السوق وقدرة عالية على التحكم.
            </p>
          </header>

          {/* Pillars row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.id}
                  className={cn(
                    "rounded-3xl overflow-hidden bg-white",
                    "border border-secondary/10 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                  )}
                >
                  {/* Image */}
                  <div className="relative h-52 md:h-56 xl:h-200">
                    <Image
                      src={pillar.imageSrc}
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative px-6 pb-6 pt-5 md:px-7 md:pb-7 md:pt-6">
                    {/* Icon badge overlapping image edge */}
                    <div className="absolute -top-7 start-6">
                      <span className="inline-flex items-center justify-center rounded-2xl bg-primary text-white p-3 shadow-md">
                        <Icon
                          style={{
                            width: "clamp(1.3rem, 1.5vw, 1.5rem)",
                            height: "clamp(1.3rem, 1.5vw, 1.5rem)",
                          }}
                          strokeWidth={2}
                        />
                      </span>
                    </div>

                    <div className="mt-3 flex flex-col gap-2">
                      <h3
                        className="font-bold text-secondary"
                        style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)" }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className="text-secondary/80 leading-relaxed"
                        style={{
                          fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                        }}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


