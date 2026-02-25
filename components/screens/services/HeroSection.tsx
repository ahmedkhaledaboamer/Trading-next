'use client'
 import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
export function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');
          body { font-family: 'Tajawal', sans-serif; }
        `}
      </style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="خلفية تجارية"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 right-[10%] w-64 h-64 rounded-full bg-white opacity-[0.07] blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-teal-400 opacity-[0.12] blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] border border-white/[0.08] rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/[0.08] rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4  ">
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
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <span className="text-base md:text-lg lg:text-xl xl:text-3xl font-medium text-teal-100">
              شريكك الأول في التجارة والتقنية
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
            كي إي بي للتجارة
            <span className="block text-3xl md:text-5xl mt-4 font-bold text-teal-300">
              ذ.م.م
            </span>
          </h1>

          <p className="text-xl lg:text-2xl xl:text-4xl text-blue-100   leading-relaxed mb-10 font-light">
            نقدّم مجموعة واسعة من الخدمات التجارية والتقنية التي تلبي احتياجات
            الشركات والأفراد، مع التزام كامل بالجودة، الاحترافية، والمعايير
            العالمية.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-base md:text-lg cursor-pointer lg:text-xl xl:text-3xl cursor-pointer shadow-lg hover:shadow-xl transition-all flex items-center mx-auto gap-2"
            onClick={() => {
              document.getElementById('services-start')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <span>استكشف خدماتنا</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Wave/Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </div>
  )
}
