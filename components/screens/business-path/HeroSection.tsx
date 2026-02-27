'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export function HeroSection({locale}: {locale: string}) {
  const isRTL = locale === 'ar'
  const t = useTranslations('businessPath.hero')
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/0011.webp"
          alt="Global Trade Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1628]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/50" />
      </div>

      {/* Background Gradients & Shapes */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="relative top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0E7490] opacity-20 blur-[100px]" />
        <div className="relative bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#D4A853] opacity-10 blur-[100px]" />

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
          className="relative z-10"
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
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 text-[#D4A853] font-medium text-base md:text-lg lg:text-xl 2xl:text-3xl backdrop-blur-sm">
            {t('badge')}
          </div>

          <h1 dir={!isRTL ? 'rtl' : 'ltr'} className="text-lg md:text-xl lg:text-4xl 2xl:text-8xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className={`text-[#D4A853] inline-block ${isRTL ? 'mr-5' : 'ml-5'}`}>{t('title2')} </span>
            <span className="text-white inline-block">{t('title1')}</span>
            <span className="block text-xl md:text-2xl lg:text-3xl xl:text-5xl mt-4 font-normal text-gray-300">
              {t('title3')}
            </span>
          </h1>

          <p className="text-sm md:text-xl lg:text-2xl 2xl:text-4xl text-gray-200 mb-10  leading-relaxed drop-shadow-md whitespace-pre-line">
            {t('subtitle')}
          </p>

          <div className="flex  flex-row items-center justify-center gap-4">
            <Link href="/services">
              <button className="cursor-pointer text-sm md:text-lg lg:text-xl 2xl:text-3xl px-8 py-4 bg-[#D4A853] text-[#0A1628] font-bold rounded-lg hover:bg-[#b68d40] transition-colors flex items-center gap-2 shadow-lg shadow-[#D4A853]/20">
                {isRTL ? <ArrowLeft className="w-5 h-5" /> : ""}
                {t('ctaServices')}
                {isRTL ? "" : <ArrowRight className="w-5 h-5" />}
              </button>
            </Link>
            <a href="#contact">
              <button type="button" className="cursor-pointer text-sm md:text-lg lg:text-xl 2xl:text-3xl px-8 py-4 bg-white/10 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                {t('ctaContact')}
              </button>
            </a>
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
          className="absolute top-1/4 right-[10%] w-16 h-16 border-4 border-[#D4A853]/20 rounded-full hidden md:block backdrop-blur-sm z-0"
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
          className="absolute bottom-1/4 left-[10%] w-24 h-24 border-4 border-[#0E7490]/30 rounded-lg rotate-45 hidden md:block backdrop-blur-sm z-0"
        />
      </div>
    </section>
  )
}
