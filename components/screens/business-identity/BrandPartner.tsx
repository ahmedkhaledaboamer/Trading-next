 'use client'
 import { motion } from 'framer-motion'
import { Handshake, Users, HelpCircle, CheckSquare } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function BrandPartner() {
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
  const targetAudience = [
    {
      text: 'يريد معلومة واضحة.',
      color: '#0D9488',
    },
    {
      text: 'يقدّر الاحتراف.',
      color: '#7C3AED',
    },
    {
      text: 'يبحث عن شركة تحترم وقته.',
      color: '#D97706',
    },
    {
      text: 'يريد تنفيذًا بلا أعذار.',
      color: '#DC2626',
    },
    {
      text: 'يرى أن الثقة أهم من السعر.',
      color: '#2563EB',
    },
    {
      text: 'يعرف قيمة التعامل مع كيان يفهم السوق.',
      color: '#059669',
    },
  ]
  return (
    <>
      {/* What Makes Us Different */}
      <section className="py-24 bg-brand-cream relative">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="text-lg md:text-xl lg:text-3xl 2xl:text-6xl font-bold mb-4"
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
              className="text-xl text-brand-dark/70 w-fit mx-auto"
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
                  <p className="text-lg text-brand-navy font-medium">
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
              className="inline-block py-2 px-6 rounded-full text-lg font-bold"
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
