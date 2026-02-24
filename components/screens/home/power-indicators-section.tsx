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
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      />

      <div className=" px-4 md:px-6 relative z-10">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.9rem, 2.6vw, 2.7rem)" }}
          >
            مؤشرات القوة
          </h2>
          <p
            className="text-white/80  "
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
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
                "group relative overflow-hidden rounded-2xl"
              )}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#F8F6F1] -mr-8 -mt-8 rotate-45 group-hover:bg-white/20 transition-colors" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-4 h-4 bg-[#C9A84C] group-hover:bg-white transition-colors duration-300 rounded-sm" />
                <span
                  className="font-bold text-[#1A1A2E] group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "clamp(1rem, 1.15vw, 1.15rem)" }}
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

