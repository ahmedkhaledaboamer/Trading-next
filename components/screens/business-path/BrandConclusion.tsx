'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Award, Heart } from 'lucide-react'
export function BrandConclusion() {
  const pillars = [
    {
      icon: <Shield />,
      title: 'الوضوح',
      desc: 'لأن المعلومة حق.',
      color: '#0D9488',
    },
    {
      icon: <Clock />,
      title: 'الالتزام',
      desc: 'لأن الوقت قيمة.',
      color: '#D97706',
    },
    {
      icon: <Award />,
      title: 'الجودة',
      desc: 'لأنها أساس الثقة.',
      color: '#7C3AED',
    },
    {
      icon: <Heart />,
      title: 'الاحترام',
      desc: 'لأنه جوهر التعامل.',
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
            <h2 className="text-5xl md:text-7xl font-bold text-brand-navy mb-8 leading-tight">
              كي إي بي{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #C8A45C 0%, #D97706 50%, #C8A45C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                للتجارة
              </span>
            </h2>

            <p className="text-2xl md:text-3xl text-brand-dark/80 font-light mb-12 leading-relaxed">
              ليست مجرد شركة… هي أسلوب تعامل، طريقة تفكير، ومعيار جودة.
            </p>

            <div
              className="w-24 h-1 mx-auto mb-12"
              style={{
                background: '#C8A45C',
              }}
            ></div>

            <p className="text-xl text-brand-dark/70  mb-8">
              هذه هوية مكتوبة بوضوح، وقوة، وثقة… لتقول للعميل:
            </p>

            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{
                color: '#C8A45C',
              }}
            >
              أنت في المكان الصحيح.
            </h3>
          </motion.div>
        </div>

        
      </section>
    </>
  )
}
