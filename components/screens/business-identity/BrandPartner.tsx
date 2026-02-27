'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function BrandPartner({locale}: {locale: string}) {
  const isRTL = locale === "ar";
  const t = useTranslations('businessIdentity.partner')
  const differences = [
    {
      text: t('differences.0'),
      color: '#0D9488',
    },
    {
      text: t('differences.1'),
      color: '#D97706',
    },
    {
      text: t('differences.2'),
      color: '#7C3AED',
    },
    {
      text: t('differences.3'),
      color: '#059669',
    },
    {
      text: t('differences.4'),
      color: '#DC2626',
    },
    {
      text: t('differences.5'),
      color: '#2563EB',
    },
  ]
  return (
    <>
      {/* What Makes Us Different */}
      <section className="px-[5%] py-24 bg-brand-cream relative" dir={isRTL ? "rtl" : "ltr"}>
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/image_2656.webp"
            alt="Office Background"
            className="w-full h-full object-cover"
            width={800}
            height={800}
          />
        </div>

        <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-16"
          >
            <h2
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #0A1628, #0D9488)',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '10px',
                display: 'inline-block',
                border: '1px solid rgba(13, 148, 136, 0.55)',
              }}
            >
              {t('title')}
            </h2>
            <p
              className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-brand-dark/70 w-fit mx-auto"
              style={{
                background:
                  'linear-gradient(120deg, rgba(248, 250, 252, 0.96), rgba(13, 148, 136, 0.12))',
                color: '#0F172A',
                padding: '10px 22px',
                borderRadius: '9999px',
                border: '1px solid rgba(13, 148, 136, 0.45)',
              }}
            >
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((diff, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                style={{
                  borderLeft: `4px solid ${diff.color}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 w-2 h-2 rounded-full shrink-0"
                    style={{
                      background: diff.color,
                    }}
                  />
                  <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-navy font-medium">
                    {diff.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mt-12"
          >
            <span
              className="inline-block py-2 px-6 rounded-full text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-bold"
              style={{
                background: '#0A1628',
                color: '#C8A45C',
              }}
            >
              {t('footer')}
            </span>
          </motion.div>
        </div>
      </section>

    

      
    </>
  )
}
