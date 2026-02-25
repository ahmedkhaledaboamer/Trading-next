import { cn } from "@/utils/cn";
import { BadgePercent, Briefcase } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";

const franchiseBenefits = [
  "توسع سريع للعلامة التجارية",
  "تقليل المخاطر التشغيلية على الشركة الأم",
  "زيادة الحصة السوقية عبر شركاء متعددين",
  "دعم الشركاء بنظام تشغيل وتجربة جاهزة",
];

const franchiseTasks = [
  "إعداد نماذج الامتياز التجاري",
  "اختيار شركاء الامتياز المناسبين",
  "توفير التدريب والدعم التشغيلي",
  "مراقبة جودة التنفيذ في نقاط الامتياز",
  "ضمان التزام العلامة بمعاييرها التجارية",
];

export default async function FranchiseUnitSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className="relative w-full bg-[#f7f3eb]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="p-[5%]">
        <div className="  flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="font-bold text-secondary leading-tight text-2xl md:text-6xl"
            >
              وحدة الامتياز التجاري
            </h2>
            <p
              className="text-secondary/80 text-base md:text-2xl"
            >
              وحدة متخصصة لمنح الامتياز التجاري للعلامات التي تديرها كي إي بي
              للتجارة، وفق معايير تشغيلية واضحة.
            </p>
          </header>

          {/* Main layout: two info cards + image */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] gap-6 md:gap-8 items-stretch">
            {/* Benefits card */}
            <article
              className={cn(
                "rounded-3xl bg-white border border-secondary/10",
                "shadow-[0_14px_36px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1 border-b border-primary/40 pb-3">
                <h3
                  className="font-bold text-secondary text-xl md:text-3xl"
                >
                  فوائد الامتياز
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <BadgePercent
                    style={{
                      width: "clamp(1.4rem, 1.4vw, 1.4rem)",
                      height: "clamp(1.4rem, 1.4vw, 1.4rem)",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>

              <ul className="space-y-2.5">
                {franchiseBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-secondary/85 text-base md:text-xl"
                  >
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Tasks card */}
            <article
              className={cn(
                "rounded-3xl bg-white border border-secondary/10",
                "shadow-[0_14px_36px_rgba(0,0,0,0.06)] p-6 md:p-7 lg:p-8 flex flex-col gap-4"
              )}
            >
              <div className="flex items-center justify-between gap-3 mb-1 border-b border-primary/40 pb-3">
                <h3
                  className="font-bold text-secondary text-xl md:text-3xl"
                >
                  مهام الوحدة
                </h3>
                <span className="inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary p-2.5">
                  <Briefcase
                    style={{
                      width: "clamp(1.4rem, 1.4vw, 1.4rem)",
                      height: "clamp(1.4rem, 1.4vw, 1.4rem)",
                    }}
                    strokeWidth={2}
                  />
                </span>
              </div>

              <ul className="space-y-2.5">
                {franchiseTasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-start gap-2 text-secondary/85 text-base md:text-xl"
                  >
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Image card */}
            <div className="flex justify-center lg:justify-end">
              <div
                className={cn(
                  "relative   w-full rounded-3xl overflow-hidden",
                  "bg-white border border-primary/40",
                  "shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
                )}
              >
                <Image
                  src="/images/29.webp"
                  alt="اجتماع عمل لوحدة الامتياز التجاري"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

