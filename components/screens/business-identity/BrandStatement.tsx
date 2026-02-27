 'use client'
 import { motion } from 'framer-motion'
import {
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  Briefcase,
  Globe,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const DICTIONARY_KEYS = [
  'supply',
  'client',
  'quality',
  'commitment',
  'marketing',
  'credibility',
  'service',
  'success',
] as const

const DICTIONARY_COLORS = [
  '#0D9488',
  '#7C3AED',
  '#D97706',
  '#DC2626',
  '#059669',
  '#2563EB',
  '#DB2777',
  '#C8A45C',
] as const

const VALUE_KEYS = [
  'clarity',
  'commitment',
  'respect',
  'accuracy',
  'continuity',
  'professionalism',
] as const

const VALUE_ICONS = [BookOpen, Clock, Users, CheckCircle, Globe, Briefcase]
const VALUE_COLORS = ['#0D9488', '#7C3AED', '#D97706', '#DC2626', '#2563EB', '#059669']

const STATEMENT_BULLET_KEYS = ['0', '1', '2', '3'] as const

export function BrandStatement( {locale}: {locale: string} ) {
  const isRTL = locale === "ar";
  const t = useTranslations('businessIdentity.statement')

  const dictionaryTerms = DICTIONARY_KEYS.map((key, index) => ({
    term: t(`dictionary.terms.${key}.term`),
    def: t(`dictionary.terms.${key}.def`),
    color: DICTIONARY_COLORS[index],
  }))

  const values = VALUE_KEYS.map((key, index) => {
    const Icon = VALUE_ICONS[index]
    return {
      icon: <Icon />,
      title: t(`values.items.${key}.title`),
      desc: t(`values.items.${key}.desc`),
      color: VALUE_COLORS[index],
    }
  })
  return (
    <>
      {/* Statement Section */}
      <section className="p-[5%] bg-brand-cream relative" dir={isRTL ? "rtl" : "ltr"}>
        <div className="  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
            <h2
              className="text-lg md:text-xl lg:text-3xl 2xl:text-6xl font-bold mb-6"
              style={{
                background:
                  'linear-gradient(135deg, #0A1628 0%, #1a3a5c 100%)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.5)',
                width: 'fit-content',
              }}
            >
                {t('heading')}
              </h2>
              <p
                className="font-semibold text-sm md:text-xl lg:text-xl 2xl:text-4xl mb-8 w-fit"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(248, 250, 252, 0.95), rgba(251, 191, 36, 0.22))',
                  color: '#7C2D12',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(217, 119, 6, 0.45)',
                }}
              >
                {t('subheading')}
              </p>

              <div className="space-y-6">
                <div
                  className="bg-white p-8 rounded-lg shadow-sm border-r-4"
                  style={{
                    borderColor: '#C8A45C',
                  }}
                >
                  <ul className="space-y-4 text-sm md:text-xl lg:text-xl 2xl:text-4xl font-medium text-brand-dark">
                    {STATEMENT_BULLET_KEYS.map((key, index) => (
                      <li key={key} className="flex items-center gap-3">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: DICTIONARY_COLORS[index] ?? '#C8A45C',
                          }}
                        ></span>
                        {t(`bullets.${key}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm md:text-xl lg:text-xl 2xl:text-3xl text-brand-dark/80 leading-relaxed">
                  {t('paragraph')}
                </p>
              </div>
            </motion.div>

            <motion.div
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
                duration: 0.8,
              }}
              className="relative h-full min-h-[400px]"
            >
              <div
                className="absolute inset-0 rounded-lg transform rotate-3 h-[70%]"
                style={{
                  background: '#0A1628',
                }}
              ></div>
              <Image
                src="/images/0012.webp"
                alt="Team Collaboration"
                className="relative z-10 w-full h-[70%] object-cover object-top rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                width={800}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dictionary Section - Converted to Light */}
      <section className="p-[5%] bg-white relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/006.webp"
            alt="Books Background"
            className="w-full h-full object-cover opacity-5"
            width={1200}
            height={1200}
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 z-10"></div>

        <div className="   sm:px-6 lg:px-8 relative z-10">
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
              className="text-lg md:text-xl lg:text-2xl 2xl:text-6xl font-bold mb-4 w-fit mx-auto"
              style={{
                background:
                  'linear-gradient(135deg, #0F172A 0%, #0D9488 55%, #0F172A 100%)',
                color: '#E8E7DC',
                padding: '12px 26px',
                borderRadius: '9999px',
                border: '1px solid rgba(15, 118, 110, 0.5)',
              }}
            >
              {t('dictionary.title')}
            </h2>
            <p
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium w-fit mx-auto mt-3"
              style={{
                background:
                  'linear-gradient(90deg, rgba(248, 250, 252, 0.96), rgba(248, 250, 252, 0.9))',
                color: '#92400E',
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid rgba(234, 179, 8, 0.4)',
              }}
            >
              {t('dictionary.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
            {dictionaryTerms.map((item, index) => (
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
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white p-6 rounded hover:shadow-lg transition-all duration-300 shadow-sm border border-gray-100"
                style={{
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.term}
                </h3>
                <p className="text-brand-dark/80 text-lg md:text-xl lg:text-2xl xl:text-3xl">{item.def}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="p-[5%] bg-brand-cream relative" dir={isRTL ? "rtl" : "ltr"}>
        <div className="   sm:px-6 lg:px-8">
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
            className="text-center mb-16"
          >
            <h2
              className="text-lg md:text-xl lg:text-2xl 2xl:text-6xl font-bold mb-8"
              style={{
                background: 'linear-gradient(90deg, #C8A45C 0%, #0A1628 100%)',
                color: 'white',
                padding: '12px 28px',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.4)',
                width: 'fit-content',
                margin: '0 auto',
              }}
            >
              {t('values.title')}
            </h2>

           

            <p
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-dark/70 w-fit mx-auto mt-3"
              style={{
                background:
                  'linear-gradient(120deg, rgba(248, 250, 252, 0.95), rgba(15, 23, 42, 0.06))',
                color: '#0F172A',
                padding: '10px 22px',
                borderRadius: '9999px',
                border: '1px solid rgba(148, 163, 184, 0.6)',
              }}
            >
              {t('values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  borderTop: `4px solid ${val.color}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: val.color,
                    color: 'white',
                  }}
                >
                  <div className="w-8 h-8">{val.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-5xl font-bold text-brand-navy mb-3">
                  {val.title}
                </h3>
                <p className="text-sm md:text-lg lg:text-2xl 2xl:text-3xl text-brand-dark/70 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
