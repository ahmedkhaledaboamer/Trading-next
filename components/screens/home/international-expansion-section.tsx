import {  Globe } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";

const unitTasks = [
  "دراسة الأسواق الإقليمية والدولية",
  "بناء شراكات جديدة في دول متعددة",
  "فتح خطوط توريد جديدة",
  "تقييم فرص النمو في الأسواق الناشئة",
  "دعم العملاء في التوسع خارج بلدانهم",
];

const unitResults = [
  "زيادة الحضور الدولي",
  "تنويع مصادر التوريد",
  "تعزيز القوة التفاوضية",
  "خلق فرص تجارية جديدة للشركاء",
];

export default async function InternationalExpansionSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className="py-20 md:py-28 bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className=" p-[5%]">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2
            className="font-bold text-secondary leading-tight text-2xl md:text-6xl"
          >
            وحدة التوسع الدولي
          </h2>
          <p
            className="text-secondary/80 text-base md:text-2xl"
          >
            وحدة استراتيجية مسؤولة عن فتح أسواق جديدة وتوسيع نطاق النفوذ
            التجاري لشركائنا حول العالم.
          </p>
        </header>

        {/* Two main cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {/* Tasks card */}
          <div className="group relative overflow-hidden shadow-2xl rounded-3xl bg-transparent">
            <div className="h-80 relative overflow-hidden">
              <Image
                src="/images/2.webp"
                alt="مهام وحدة التوسع الدولي"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A2E]/60 group-hover:bg-[#1A1A2E]/40 transition-colors" />
              
            </div>

            <div className="bg-[#F8F6F1] p-8 md:p-10 relative z-10 -mt-10 mx-4 md:mx-6 shadow-lg rounded-3xl">
              <h3 className="text-xl md:text-3xl font-bold text-[#1A1A2E] mb-6 md:mb-8 tracking-wide border-b border-[#C9A84C]/20 pb-4">
                مهام الوحدة
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {unitTasks.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 md:gap-4 text-[#4A4A5A] text-base md:text-xl"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results card */}
          <div className="group relative overflow-hidden shadow-2xl rounded-3xl bg-transparent">
            <div className="h-80 relative overflow-hidden">
              <Image
                src="/images/1.webp"
                alt="نتائج وحدة التوسع الدولي"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A2E]/60 group-hover:bg-[#1A1A2E]/40 transition-colors" />
               
            </div>

            <div className="bg-[#F8F6F1] p-8 md:p-10 relative z-10 -mt-10 mx-4 md:mx-6 shadow-lg rounded-3xl">
              <h3 className="text-xl md:text-3xl font-bold text-[#1A1A2E] mb-6 md:mb-8 tracking-wide border-b border-[#C9A84C]/20 pb-4">
                نتائج الوحدة
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {unitResults.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 md:gap-4 text-[#4A4A5A] text-base md:text-xl"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
