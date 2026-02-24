import { cn } from "@/utils/cn";
import {
  CheckSquare,
  Globe,
  Gavel,
  Leaf,
  Scale,
  Network,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

const cards = [
  {
    title: "الكيان القانوني",
    description:
      "تعمل المجموعة كشركة مساهمة عامة خاضعة لقوانين البنك المركزي، مع فصل بين الملكية والإدارة.",
    icon: Scale,
  },
  {
    title: "الالتزام التنظيمي",
    description:
      "تعتمد الإدارة إطارا يحدد الصلاحيات والمسؤوليات بدقة، ويعزز توازن المؤسسة وكفاءة القرار.",
    icon: CheckSquare,
  },
  {
    title: "الولاية القضائية",
    description:
      "يعمل مقر المجموعة ضمن نطاق مالي دولي يوفر حماية قانونية راسخة، ويعزز الثقة في سلامة العمليات.",
    icon: Gavel,
  },
  {
    title: "الاستدامة المؤسسية",
    description:
      "تلتزم المجموعة بممارسات مالية وتشغيلية مستدامة، تدعم النمو وتحافظ على صلابة الكيان المؤسسي.",
    icon: Leaf,
  }
];

export default async function BusinessEntitySection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className={cn("relative w-full")}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Orange banner */}
      <div
        className="w-full bg-primary py-4 md:py-5"
        style={{
          paddingInline: "clamp(1rem, 3vw, 3rem)",
        }}
      >
        <h2
          className="text-secondary font-bold text-center"
          style={{
            fontSize: "clamp(1.25rem, 2vw, 2rem)",
          }}
        >
          سلطة المجلس الاداري
        </h2>
      </div>

      {/* Cards grid on light blue background */}
      <div
        className="bg-[#e8f4f8] py-[clamp(2rem, 4vw, 4rem)]"
        style={{
          paddingInline: "clamp(1rem, 3vw, 3rem)",
        }}
      >
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cards.map((card, index) => {
              const Icon = card.icon as LucideIcon;
              return (
                <article
                  key={index}
                  className={cn(
                    "flex flex-col overflow-hidden rounded-lg",
                    "bg-white shadow-lg shadow-secondary/10",
                    "border border-secondary/5"
                  )}
                >
                  {/* Icon / emblem area */}
                  <div
                    className={cn(
                      "flex items-center justify-center py-8",
                      "bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center rounded-full",
                        "bg-[#1a3a4a]/10 border-2 border-primary/40",
                        "p-4 md:p-5"
                      )}
                    >
                      <Icon
                        className="text-primary"
                        style={{
                          width: "clamp(2rem, 4vw, 3rem)",
                          height: "clamp(2rem, 4vw, 3rem)",
                        }}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </div>
                  </div>

                  {/* Dark title bar */}
                  <div className="bg-secondary px-4 py-3">
                    <h3
                      className="text-white font-bold text-center"
                      style={{
                        fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex-1 px-4 py-5">
                    <p
                      className="text-secondary/90 leading-relaxed text-center"
                      style={{
                        fontSize: "clamp(0.875rem, 1vw, 1rem)",
                      }}
                    >
                      {card.description}
                    </p>
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
