 'use client'
 import { motion } from 'framer-motion'
import {
  MessageCircle,
  Check,
  Star,
  TrendingUp,
  FileText,
  Truck,
  Globe,
  BarChart,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function BrandOperations({locale}: {locale: string}) {
  const isRTL = locale === "ar";
  const t = useTranslations('businessIdentity.operations')
  const communicationPoints = [
    t('communication.points.0'),
    t('communication.points.1'),
    t('communication.points.2'),
    t('communication.points.3'),
    t('communication.points.4'),
  ]

  const proveValuePoints = [
    {
      icon: <TrendingUp />,
      text: t('proveValue.points.0'),
      color: '#0D9488',
    },
    {
      icon: <FileText />,
      text: t('proveValue.points.1'),
      color: '#7C3AED',
    },
    {
      icon: <Truck />,
      text: t('proveValue.points.2'),
      color: '#D97706',
    },
    {
      icon: <Globe />,
      text: t('proveValue.points.3'),
      color: '#DC2626',
    },
    {
      icon: <BarChart />,
      text: t('proveValue.points.4'),
      color: '#2563EB',
    },
    {
      icon: <Star />,
      text: t('proveValue.points.5'),
      color: '#059669',
    },
  ]
  const credibilityPoints = [
    t('credibility.points.0'),
    t('credibility.points.1'),
    t('credibility.points.2'),
    t('credibility.points.3'),
    t('credibility.points.4'),
    t('credibility.points.5'),
  ]
  return (
    <>
      

      {/* Communication Style */}
      <section className="p-[5%] bg-brand-cream" dir={isRTL ? "rtl" : "ltr"}>
        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            >
              <h2
                className="text-xl md:text-2xl lg:text-4xl 2xl:text-7xl font-bold mb-6 flex items-center gap-4"
                style={{
                  background: '#0A1628',
                  color: '#C8A45C',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  border: '1px solid rgba(200, 164, 92, 0.6)',
                }}
              >
                <MessageCircle className="w-10 h-10" />
                {t('communication.title')}
              </h2>

              {/* Added Side Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/image_2688.webp"
                  alt="Communication"
                  className="w-full h-150 object-cover"
                  width={800}
                  height={800}
                />
              </div>

              <p
                className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-dark/80 mb-8 inline-block"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(248, 250, 252, 0.96), rgba(15, 23, 42, 0.08))',
                  color: '#0F172A',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(148, 163, 184, 0.6)',
                }}
              >
                {t('communication.tagline')}
              </p>

              <ul className="space-y-4">
                {communicationPoints.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: i * 0.1,
                    }}
                    className="flex items-center gap-3 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-brand-navy"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: '#C8A45C',
                      }}
                    ></span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <p
                className="mt-8 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold"
                style={{
                  color: '#D97706',
                }}
              >
                {t('communication.footer')}
              </p>
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
              className="p-10 rounded-2xl shadow-2xl text-white relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #0A1628 0%, #1a3a5c 50%, #0D9488 100%)',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

              <h3
                className="text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-8 text-center"
                style={{
                  color: '#E8D5A3',
                }}
              >
                {t('brandPromise.title')}
              </h3>
              <p className="text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-8 opacity-80">
                {t('brandPromise.intro')}
              </p>

              <div className="grid gap-6">
                <div
                  className="p-4 rounded-lg text-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(13, 148, 136, 0.2)',
                    borderLeft: '3px solid #0D9488',
                  }}
                >
                  <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold">{t('brandPromise.items.0')}</span>
                </div>
                <div
                  className="p-4 rounded-lg text-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(217, 119, 6, 0.2)',
                    borderLeft: '3px solid #D97706',
                  }}
                >
                  <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold">{t('brandPromise.items.1')}</span>
                </div>
                <div
                  className="p-4 rounded-lg text-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(124, 58, 237, 0.2)',
                    borderLeft: '3px solid #7C3AED',
                  }}
                >
                  <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold">{t('brandPromise.items.2')}</span>
                </div>
              </div>

                <p className="mt-8 text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl opacity-60">
                  {t('brandPromise.footer')}
                </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prove Value & Credibility - Converted to Light */}
      <section className="p-[5%] bg-white text-brand-navy" dir={isRTL ? "rtl" : "ltr"}>
        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Prove Value */}
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-8 inline-block"
                style={{
                  background:
                    'linear-gradient(135deg, #0F172A 0%, #334155 45%, #0D9488 100%)',
                  color: '#E8E7DC',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(15, 118, 110, 0.5)',
                }}
              >
                {t('proveValue.title')}
              </motion.h2>

              {/* Added Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/image_2595.webp"
                  alt="Logistics Warehouse"
                  className="w-full h-150 object-cover"
                  width={800}
                  height={800}
                />
              </div>

              <p
                className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-8 text-brand-dark/80 inline-block"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(248, 250, 252, 0.96), rgba(22, 163, 74, 0.08))',
                  color: '#064E3B',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                }}
              >
                {t('proveValue.intro')}
              </p>

              <div className="space-y-6">
                {proveValuePoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: i * 0.1,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="mt-1 shrink-0"
                      style={{
                        color: point.color,
                      }}
                    >
                      {point.icon}
                    </div>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-dark/90">{point.text}</p>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-10 p-6 rounded-l-lg bg-brand-cream/50"
                style={ !isRTL ? {
                  borderLeft: '4px solid #C8A45C',
                } : {
                  borderRight: '4px solid #C8A45C',
                }}
              >
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light italic text-brand-navy">
                  {t('proveValue.quote')}
                </p>
              </div>
            </div>

            {/* Credibility */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-8 text-brand-navy inline-block"
                style={{
                  background:
                    'linear-gradient(90deg, #C8A45C 0%, #0A1628 70%, transparent 100%)',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  color: 'white',
                  border: '1px solid rgba(15, 23, 42, 0.45)',
                }}
              >
                {t('credibility.title')}
              </motion.h2>

              {/* Added Decorative Image */}
              <div className="mb-8 rounded-lg overflow-hidden h-150">
                <Image
                  src="/images/image_2654.webp"
                  alt="Contracts"
                  className="w-full h-150 object-cover opacity-80 hover:opacity-100 transition-opacity"
                  width={800}
                  height={800}
                />
              </div>

              <p
                className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-8 font-medium inline-block"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(248, 250, 252, 0.96), rgba(248, 250, 252, 0.9))',
                  color: '#92400E',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(234, 179, 8, 0.4)',
                }}
              >
                {t('credibility.intro')}
              </p>

              <div className="space-y-4">
                {credibilityPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: i * 0.1,
                    }}
                    className="flex items-center gap-4 bg-white p-4 rounded border border-gray-100 shadow-sm"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: '#C8A45C',
                      }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-navy">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
