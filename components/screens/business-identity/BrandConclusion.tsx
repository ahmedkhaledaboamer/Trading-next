'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Award, Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function BrandConclusion() {
  const t = useTranslations('businessIdentity.conclusion')
  const pillars = [
    {
      icon: <Shield />,
      title: t('pillars.clarity.title'),
      desc: t('pillars.clarity.desc'),
      color: '#0D9488',
    },
    {
      icon: <Clock />,
      title: t('pillars.commitment.title'),
      desc: t('pillars.commitment.desc'),
      color: '#D97706',
    },
    {
      icon: <Award />,
      title: t('pillars.quality.title'),
      desc: t('pillars.quality.desc'),
      color: '#7C3AED',
    },
    {
      icon: <Heart />,
      title: t('pillars.respect.title'),
      desc: t('pillars.respect.desc'),
      color: '#DC2626',
    },
  ]
  return (
    <>
  

      {/* Final Conclusion - Converted to Light */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-brand-off-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
            alt="City Skyline"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/60" />
        </div>

        {/* Floating Colored Circles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-20 left-20 w-24 h-24 rounded-full blur-2xl"
          style={{
            background: '#0D9488',
            opacity: 0.1,
          }}
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-40 right-20 w-32 h-32 rounded-full blur-2xl"
          style={{
            background: '#D97706',
            opacity: 0.1,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
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
              duration: 1,
            }}
          >
            <h2
              className="text-xl md:text-2xl lg:text-3xl 2xl:text-6xl font-bold text-brand-navy mb-8 leading-tight inline-block"
              style={{
                background:
                  'linear-gradient(120deg, rgba(248, 250, 252, 0.96), rgba(248, 250, 252, 0.85))',
                padding: '12px 26px',
                borderRadius: '9999px',
                border: '1px solid rgba(200, 164, 92, 0.5)',
              }}
            >
              {t('brandNamePrefix')}{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #C8A45C 0%, #D97706 50%, #C8A45C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('brandNameHighlight')}
              </span>
            </h2>

            <p
              className="text-2xl md:text-3xl text-brand-dark/80 font-light mb-12 leading-relaxed inline-block"
              style={{
                background:
                  'linear-gradient(120deg, rgba(248, 250, 252, 0.96), rgba(15, 23, 42, 0.08))',
                color: '#0F172A',
                padding: '10px 24px',
                borderRadius: '9999px',
                border: '1px solid rgba(148, 163, 184, 0.6)',
              }}
            >
              {t('tagline')}
            </p>

            <div
              className="w-24 h-1 mx-auto mb-12"
              style={{
                background: '#C8A45C',
              }}
            ></div>

            <p
              className="text-xl text-brand-dark/70  mb-8 inline-block"
              style={{
                background:
                  'linear-gradient(120deg, rgba(248, 250, 252, 0.96), rgba(200, 164, 92, 0.12))',
                color: '#0F172A',
                padding: '8px 22px',
                borderRadius: '9999px',
                border: '1px solid rgba(200, 164, 92, 0.6)',
              }}
            >
              {t('leadIn')}
            </p>

            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{
                color: '#C8A45C',
              }}
            >
              {t('final')}
            </h3>
          </motion.div>
        </div>

        
      </section>
    </>
  )
}
