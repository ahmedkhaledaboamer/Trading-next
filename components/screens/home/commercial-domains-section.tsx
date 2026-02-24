import { cn } from "@/utils/cn";
import {
  ArrowUpRight,
  Globe2,
  Home,
  Monitor,
  Phone,
  Gamepad2,
  Camera,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";

type Domain = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const domains: Domain[] = [
  {
    id: "import",
    title: "منظومة الاستيراد الدولي",
    description:
      "ارتباط مباشر بالأسواق العالمية يضمن منتجات عالية الجودة ووصولاً ثابتاً بإجراءات دولية موثوقة.",
    icon: Globe2,
  },
  {
    id: "export",
    title: "منظومة التصدير والتوسع الخارجي",
    description:
      "مسارات تجارية تفتح أبواب التسويق الإقليمي والدولي أمام شركائنا في أسواق مختارة بعناية.",
    icon: ArrowUpRight,
  },
  {
    id: "home-appliances",
    title: "مركز الأجهزة المنزلية والكهربية",
    description:
      "حلول متكاملة للأجهزة المنزلية والابتكارات من الأجهزة الكبرى إلى المستلزمات الدقيقة.",
    icon: Home,
  },
  {
    id: "electronics",
    title: "مركز الأجهزة الإلكترونية والتقنية",
    description:
      "أجهزة إلكترونية متقدمة، شاشات، وحلول تقنية مصممة لتخدم مختلف القطاعات التجارية.",
    icon: Monitor,
  },
  {
    id: "mobiles",
    title: "مركز الهواتف الذكية والإكسسوارات",
    description:
      "أحدث الإصدارات العالمية من الهواتف الذكية مع منظومة توزيع مرنة تغطي قنوات متعددة.",
    icon: Phone,
  },
  {
    id: "gaming",
    title: "مركز الألعاب والترفيه الرقمي",
    description:
      "منتجات ألعاب، كونسولات، وإكسسوارات موجهة لقطاع الترفيه الرقمي المتنامي.",
    icon: Gamepad2,
  },
  {
    id: "photo-video",
    title: "مركز التصوير الفوتوغرافي والسينمائي",
    description:
      "معدات تصوير احترافية، عدسات، وإكسسوارات تدعم صناعة المحتوى بجودة عالية.",
    icon: Camera,
  },
  {
    id: "networks",
    title: "مركز الشبكات والاتصالات",
    description:
      "حلول شبكات متكاملة، أجهزة اتصال، وبنى تحتية تدعم استمرارية الأعمال بكفاءة.",
    icon: Wifi,
  },
];

export default async function CommercialDomainsSection() {
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
              مجالات النفوذ التجاري
            </h2>
            <p
              className="text-secondary/80 "
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
            >
              كل مجال هنا يمثل وحدة قوة داخل كيان الشركة، صُممت لتخدم احتياجات
              السوق وتفتح قنوات نفوذ جديدة.
            </p>
          </header>

          {/* Domains grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <article
                  key={domain.id}
                  className={cn(
                    "rounded-2xl bg-secondary/3 border border-secondary/10",
                    "shadow-sm hover:shadow-md transition-shadow"
                  )}
                >
                  <div className="flex items-stretch justify-between gap-4 p-5 md:p-6 lg:p-7">
                    {/* Text */}
                    <div className="flex-1 flex flex-col gap-2">
                      <h3
                        className="font-bold text-secondary"
                        style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.2rem)" }}
                      >
                        {domain.title}
                      </h3>
                      <p
                        className="text-secondary/80 leading-relaxed"
                        style={{
                          fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                        }}
                      >
                        {domain.description}
                      </p>
                    </div>

                    {/* Icon badge */}
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary p-3 md:p-3.5">
                        <Icon
                          className="text-primary"
                          style={{
                            width: "clamp(1.2rem, 1.4vw, 1.4rem)",
                            height: "clamp(1.2rem, 1.4vw, 1.4rem)",
                          }}
                          strokeWidth={2}
                        />
                      </span>
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

