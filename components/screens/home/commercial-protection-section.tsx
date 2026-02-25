 "use client";

import { cn } from "@/utils/cn";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const protections = [
  "حماية التوريد من الانقطاع",
  "حماية الجودة من التراجع",
  "حماية الالتزامات التعاقدية",
  "حماية الجدول الزمني للتسليم",
  "حماية المخزون من المخاطر",
];

export default function CommercialProtectionSection() {
  return (
    <section className="p-[5%] bg-white" dir="rtl">
      <div className="  flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4">
          <h2
            className="font-bold text-secondary leading-tight text-2xl md:text-6xl"
          >
            نظام الحماية التجارية
          </h2>
          <p
            className="text-secondary/80 text-base md:text-2xl"
          >
            نظام متكامل يضمن حماية رأس المال التجاري في كل مرحلة من مراحل
            سلسلة القيمة.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[380px] md:h-[460px]  xl:h-[600px] w-full shadow-2xl"
          >
            <div className="absolute top-8 -right-8 w-full h-full border-4 border-[#C9A84C] z-0 rounded-3xl" />
            <div className="relative z-10 w-full h-full overflow-hidden rounded-3xl">
              <Image
                src="/images/26.webp"
                alt="نظام الحماية التجارية"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-[#1A1A2E] p-6 md:p-8 z-20   rounded-tr-3xl">
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                حماية شاملة{" "}
                <span className="text-[#C9A84C]">لكل مرحلة</span> من مراحل التجارة
              </h3>
            </div>
          </motion.div>

          {/* List side */}
          <div className="space-y-5 md:space-y-6">
            {protections.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "flex items-center gap-5 md:gap-6 p-5 md:p-6",
                  "bg-[#F8F6F1] border-r-4 border-transparent",
                  "hover:border-[#C9A84C] hover:bg-white hover:shadow-lg transition-all duration-300 group rounded-2xl"
                )}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#C9A84C] transition-colors">
                  <Shield className="w-6 h-6 text-[#C9A84C] group-hover:text-white transition-colors" />
                </div>
                <span
                  className="font-bold text-[#1A1A2E] group-hover:text-[#C9A84C] transition-colors text-base md:text-2xl"
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

