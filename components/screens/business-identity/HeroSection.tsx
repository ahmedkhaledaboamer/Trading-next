'use client'
 import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image_2710.webp"
          alt="Global Trade Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1628]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/50" />
      </div>

      {/* Background Gradients & Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0E7490] opacity-20 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#D4A853] opacity-10 blur-[100px]" />

        {/* Geometric Patterns (SVG) */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 L100 0 L100 100 Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A853" />
              <stop offset="100%" stopColor="#0E7490" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 text-[#D4A853] font-medium text-base md:text-lg lg:text-xl xl:text-3xl backdrop-blur-sm">
            مسارك التجاري الموثوق
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="text-white">كي إي بي</span>
            <span className="text-[#D4A853]"> للتجارة</span>
            <span className="block text-xl md:text-2xl lg:text-3xl xl:text-5xl mt-4 font-normal text-gray-300">
              ذ.م.م
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-gray-200 mb-10  leading-relaxed drop-shadow-md">
            شريكك التجاري الذي يفتح لك أبواب الأسواق بثقة وجودة وثبات.
            <br />
            في عالم تتسارع فيه حركة التجارة، نحن بوصلتك نحو النجاح.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="cursor-pointer text-base md:text-lg lg:text-xl xl:text-3xl px-8 py-4 bg-[#D4A853] text-[#0A1628] font-bold rounded-lg hover:bg-[#b68d40] transition-colors flex items-center gap-2 shadow-lg shadow-[#D4A853]/20">
              اكتشف خدماتنا
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="cursor-pointer text-base md:text-lg lg:text-xl xl:text-3xl px-8 py-4 bg-white/10 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
              تواصل معنا
            </button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-[10%] w-16 h-16 border-4 border-[#D4A853]/20 rounded-full hidden md:block backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 left-[10%] w-24 h-24 border-4 border-[#0E7490]/30 rounded-lg rotate-45 hidden md:block backdrop-blur-sm"
        />
      </div>
    </section>
  )
}
