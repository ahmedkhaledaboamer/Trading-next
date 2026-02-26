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
      "تحكم كامل في مسارات التوريد من المصدر إلى العميل، مع بنية تشغيلية سريعة الاستجابة.",
    imageSrc: "/images/23.webp",
    imageAlt: "فريق يعمل على إدارة العمليات التشغيلية في بيئة مكتبية",
  },
  {
    id: "market",
    title: "النفوذ السوقي",
    icon: Globe2,
    description:
      "وجود قوي في أسواق متعددة يمنح الشركة قدرة تفاوضية عالية وتأثيراً في حركة الطلب.",
      imageSrc: "/images/24.webp",
      imageAlt: "أفق مدينة وأسواق تعبر عن النفوذ السوقي",
  },
  {
    id: "strategic",
    title: "النفوذ الاستراتيجي",
    icon: Target,
    description:
      "قرارات مبنية على تحليل عميق للبيانات ، وتبنّي نماذج عمل تخلق ميزة مستدامة.",
      imageSrc: "/images/25.webp",
      imageAlt: "اجتماع عمل يخطط للاستراتيجيات التجارية",
  },

];

const pillarTitleColors = [
  "text-emerald-500",
  "text-sky-500",
  "text-fuchsia-500",
  "text-orange-500",
  "text-lime-500",
  "text-rose-500",
  "text-cyan-500",
  "text-amber-500",
];

const pillarTitleBgColors = [
  "bg-emerald-50 border border-emerald-200",
  "bg-sky-50 border border-sky-200",
  "bg-fuchsia-50 border border-fuchsia-200",
  "bg-orange-50 border border-orange-200",
  "bg-lime-50 border border-lime-200",
  "bg-rose-50 border border-rose-200",
  "bg-cyan-50 border border-cyan-200",
  "bg-amber-50 border border-amber-200",
];

export default async function CommercialInfluenceSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className=" p-[5%] pt-[0%]">
        <div className=" flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="inline-block font-bold text-emerald-800 leading-tight text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl bg-emerald-100 border border-emerald-300 rounded-2xl px-6 py-4"
            >
              بنية النفوذ التجاري
            </h2>
            <p 
              className="inline-block text-sky-800 text-base md:text-xl bg-sky-100 border border-sky-300 rounded-full px-5 py-2"
            >
              هيكل القوة داخل كي إي بي للتجارة يعتمد على ثلاث ركائز رئيسية
              تمنحنا عمقاً في السوق وقدرة عالية على التحكم.
            </p>
          </header>

          {/* Pillars row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const titleColor =
                pillarTitleColors[index % pillarTitleColors.length];
              const titleBg =
                pillarTitleBgColors[index % pillarTitleBgColors.length];

              return (
                <article
                  key={pillar.id}
                  className={cn(
                    "rounded-3xl overflow-hidden bg-white",
                    "border border-secondary/10 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                  )}
                >
                  {/* Image */}
                  <div className="relative h-52 md:h-64 lg:h-64 xl:h-80 2xl:h-200">
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
                            width: "clamp(1.5rem, 1.5vw, 1.5rem)",
                            height: "clamp(1.5rem, 1.5vw, 1.5rem)",
                          }}
                          strokeWidth={2}
                        />
                      </span>
                    </div>

                    <div className="mt-3 flex flex-col gap-2">
                      <h3
                        className={cn(
                          "inline-block text-center font-bold text-xl md:text-3xl rounded-full px-4 py-2",
                          titleColor,
                          titleBg
                        )}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className="text-secondary/80 leading-relaxed text-center text-base md:text-xl lg:text-lg xl:text-md 2xl:text-4xl"
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


