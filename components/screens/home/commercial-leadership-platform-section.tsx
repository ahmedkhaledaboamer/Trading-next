 "use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  "وضوحًا في القرار",
  "حماية في التنفيذ",
  "قوة في التوريد",
  "ثباتًا في النتائج",
];

export default function CommercialLeadershipPlatformSection() {
  return (
    <section
      className="p-[5%] relative overflow-hidden flex items-center justify-center min-h-[70vh] md:min-h-[80vh]"
      dir="rtl"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/10.webp"
          alt="منصة القيادة التجارية"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A2E]/90" />
      </div>

      <div className="     relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight">
            منصة القيادة التجارية
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#C9A84C] mb-10 md:mb-14 font-light">
            حيث تُدار عملياتك بثبات، وتُنفّذ قراراتك بدقة
          </p>

          <div className="w-24 md:w-32 h-px bg-white/25 mx-auto mb-10 md:mb-14" />

          <p className="text-lg md:text-2xl text-white/80  mb-10 md:mb-16 leading-relaxed font-light">
            كي إي بي للتجارة ليست مجرد وسيط… إنها منصة قيادة تدير عملياتك
            التجارية وتضمن لك:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((item, i) => (
              <div
                key={item}
                className="py-5 md:py-7 border border-[#C9A84C]/30 bg-white/5 backdrop-blur-sm hover:bg-[#C9A84C] hover:text-[#1A1A2E] hover:border-[#C9A84C] transition-all duration-500 cursor-default group rounded-2xl"
              >
                <span className="text-lg md:text-xl font-bold text-white group-hover:text-[#1A1A2E] transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

