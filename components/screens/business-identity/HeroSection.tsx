'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative p-[5%] h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60" />
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern Skyscraper"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy/90" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl"
        style={{
          background: '#0D9488',
          opacity: 0.2,
        }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full blur-3xl"
        style={{
          background: '#D97706',
          opacity: 0.2,
        }}
      />

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
            duration: 1,
            ease: 'easeOut',
          }}
          className="mb-8"
        >
          <span
            className="inline-block py-2 px-8 rounded-full text-lg md:text-xl lg:text-xl 2xl:text-3xl tracking-wider mb-2 backdrop-blur-sm border border-white/10"
            style={{
              background: 'rgba(13, 148, 136, 0.15)',
              color: '#E8D5A3',
              border: '1px solid rgba(200, 164, 92, 0.3)',
            }}
          >
            كي إي بي للتجارة
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="text-xl md:text-2xl lg:text-4xl 2xl:text-8xl font-bold text-white mb-8 leading-tight flex flex-col items-center gap-4"
        >
          <span
            className="px-8 py-2 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #C8A45C, #E8D5A3)',
              color: '#0A1628',
              textShadow: 'none',
            }}
          >
            الهوية التجارية
          </span>
         </motion.h1>

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: '150px',
          }}
          transition={{
            duration: 1.5,
            delay: 0.8,
          }}
          className="h-1 mx-auto mb-8"
          style={{
            background: 'linear-gradient(90deg, #0D9488, #C8A45C, #D97706)',
          }}
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="text-sm md:text-xl lg:text-2xl 2xl:text-4xl text-white  font-bold leading-relaxed border border-primary/60 bg-primary/30 p-2 rounded-lg "
        >
        في كي إي بي للتجارة لا نرى الهوية التجارية مجرد شعار أو ألوان، بل إطاراً يحكم طريقة التفكير واتخاذ القرار والتعامل مع العملاء والشركاء. فهي تمثل معايير الجودة التي نلتزم بها، والأسلوب الذي نعبر به عن قيمنا، والطريقة التي نضمن بها تجربة متسقة تعكس احترافنا في كل تفاعل وخدمة نقدمها.
        </motion.p>
       </div>

     

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="absolute bottom-8 xl:bottom-4 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex flex-col items-center cursor-pointer"
          style={{
            color: '#E8D5A3',
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            });
          }}
        >
          <span className="text-sm md:text-base lg:text-lg xl:text-2xl mb-2">اكتشف المزيد</span>
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}