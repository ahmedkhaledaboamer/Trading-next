'use client'
import { motion } from 'framer-motion'
import {
  Heart,
  Shield,
  CheckCircle,
  Zap,
  DollarSign,
  RefreshCw,
  Eye,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function WhyKEP({ locale }: { locale: string }) {
  const isRTL = locale === 'ar'
  const t = useTranslations('businessPath.whyKEP')

  const features = [
    {
      text: t('features.care'),
      icon: <Heart />,
      color: 'text-red-500',
      bg: 'bg-red-50',
    },
    {
      text: t('features.consistentQuality'),
      icon: <Shield />,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      text: t('features.commitment'),
      icon: <CheckCircle />,
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      text: t('features.easyExecution'),
      icon: <Zap />,
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
    },
    {
      text: t('features.fairPrices'),
      icon: <DollarSign />,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
    },
    {
      text: t('features.continuousFollowup'),
      icon: <RefreshCw />,
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
    },
    {
      text: t('features.clarity'),
      icon: <Eye />,
      color: 'text-cyan-500',
      bg: 'bg-cyan-50',
    },
    {
      text: t('features.premiumExperience'),
      icon: <Star />,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
  ]
  return (
    <section
      className="py-24 bg-gray-50 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="px-[5%] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="text-xl md:text-2xl lg:text-4xl 2xl:text-7xl font-bold text-[#0A1628] mb-6">
                {t('title')}
              </h2>
              <div className="w-20 h-1.5 bg-[#D4A853] rounded-full mb-8" />

              {/* Added Visual Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8 relative h-120 w-full">
                <Image
                  src="/images/image_2710.webp"
                  alt="Team Collaboration"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                <div className="absolute bottom-4 right-4 text-white font-bold text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
                  {t('overlayText')}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="flex items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${feature.bg} ${feature.color} flex items-center justify-center ml-4 shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">{feature.icon}</div>
                  </div>
                  <span className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-semibold text-gray-800 group-hover:text-[#0A1628] transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
