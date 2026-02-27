'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail } from 'lucide-react'
import NextImage from 'next/image'
import { useTranslations } from 'next-intl'

export function CTASection() {
  const t = useTranslations('services.cta')

  return (
    <section className="bg-white relative p-[5%] overflow-hidden container mx-auto rounded-4xl my-[2%] border-4 border-primary/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/images/services/0012.webp"
          alt="Team meeting"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 " />
      </div>

      <div className=" text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className=" "
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-8 text-white tracking-tight drop-shadow-xl">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-100 mb-12 leading-relaxed font-medium  mx-auto">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary rounded-xl font-bold text-base md:text-lg lg:text-xl xl:text-3xl cursor-pointer hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 duration-300">
              <span>{t('primaryCta')}</span>
              <ArrowLeft size={22} />
            </button>

            <button className="w-full sm:w-auto px-10 py-5 bg-teal/20 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-base md:text-lg lg:text-xl xl:text-3xl cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center gap-3 hover:border-white/50">
              <Mail size={22} />
              <span>{t('secondaryCta')}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}