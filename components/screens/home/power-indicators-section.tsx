 "use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const indicators = [
  "فهم عميق لطبيعة الطلب",
  "تحليل سوقي دقيق",
  "قدرة تنفيذية عالية",
  "التزام صارم بالجودة",
  "شبكات توريد موثوقة",
  "سرعة في الإنجاز",
  "مرونة تشغيلية",
  "حماية رأس المال التجاري",
];

const cardColors = [
  "bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 border-emerald-400",
  "bg-gradient-to-br from-sky-500 via-sky-400 to-sky-600 border-sky-400",
  "bg-gradient-to-br from-fuchsia-500 via-fuchsia-400 to-fuchsia-600 border-fuchsia-400",
  "bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 border-orange-400",
  "bg-gradient-to-br from-lime-500 via-lime-400 to-lime-600 border-lime-400",
  "bg-gradient-to-br from-rose-500 via-rose-400 to-rose-600 border-rose-400",
  "bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-600 border-cyan-400",
  "bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 border-amber-400",
];

const indicatorColors = [
  "bg-emerald-500",
  "bg-sky-500",
  "bg-fuchsia-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-amber-500",
];

export default function PowerIndicatorsSection() {
  return (
    <section
      className="py-20 md:py-28 bg-[#1A1A2E] relative overflow-hidden"
      dir="rtl"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('images/36.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="p-[5%] relative z-10">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2
            className="inline-block font-bold text-amber-200 leading-tight text-2xl md:text-2xl xl:text-4xl 2xl:text-6xl bg-amber-900 border border-amber-500 rounded-2xl px-6 py-4"
          >
            مؤشرات القوة
          </h2>
          <p
            className="inline-block text-cyan-100 text-base md:text-2xl bg-cyan-900 border border-cyan-500 rounded-full px-5 py-2"
          >
            معايير أداء تعكس ثباتًا وسيادة في التنفيذ التجاري عبر مختلف الوحدات
            التشغيلية.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {indicators.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={cn(
                "bg-white p-6 md:p-8 shadow-2xl",
                "hover:bg-[#C9A84C] transition-colors duration-500",
                "group relative overflow-hidden rounded-2xl",
                cardColors[idx % cardColors.length]
              )}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#F8F6F1] -mr-8 -mt-8 rotate-45 group-hover:bg-white/20 transition-colors" />

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={cn(
                    "w-6 h-6 rounded-sm transition-colors duration-300",
                    "group-hover:bg-white",
                    indicatorColors[idx % indicatorColors.length]
                  )}
                />
                <span
                  className="font-bold text-white group-hover:text-gray-300 transition-colors duration-300 text-base md:text-2xl"
                >
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

