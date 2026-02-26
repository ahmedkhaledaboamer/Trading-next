'use client'
 import { motion } from 'framer-motion'
import { Eye, Target, Flag } from 'lucide-react'
import Image from 'next/image'
export function VisionMissionGoal( {locale}: {locale: string} ) {
  const isRTL = locale === "ar";
  const cards = [
    {
      title: 'الرؤية',
      icon: <Eye className="w-8 h-8 text-white" />,
      text: 'أن نكون الخيار التجاري الأول للعملاء الذين يبحثون عن جودة ثابتة، ومسارات توريد موثوقة، وتجربة تعامل تُشعرهم بأنهم في قلب الاهتمام.',
      gradient: 'from-blue-600 to-blue-800',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      overlay: 'bg-blue-900/60',
    },
    {
      title: 'الرسالة',
      icon: <Target className="w-8 h-8 text-white" />,
      text: 'تقديم حلول تجارية متكاملة تُبنى على الشفافية، والدقة، والالتزام، مع التركيز على احتياجات العميل وتوفير تجربة تعامل راقية تُعزز ثقته في كل خطوة.',
      gradient: 'from-teal-600 to-teal-800',
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
      overlay: 'bg-teal-900/60',
    },
    {
      title: 'الهدف',
      icon: <Flag className="w-8 h-8 text-white" />,
      text: 'تمكين عملائنا من الوصول إلى أفضل المنتجات والأسواق عبر مسارات توريد مدروسة، وتنفيذ احترافي، وخدمة تُشعرهم بأنهم شركاء في النجاح.',
      gradient: 'from-amber-500 to-amber-700',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      overlay: 'bg-amber-900/60',
    },
  ]
  
  return (
    <section className="pt-5 pb-[2%] px-[5%] bg-gray-50 relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-52 md:h-100 lg:h-60 2xl:h-120 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 ${card.overlay} mix-blend-multiply`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent`}
                />

                {/* Icon positioned over image */}
                <div className="absolute bottom-4 right-4 z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg`}
                  >
                    {card.icon}
                  </div>
                </div>
              </div>

              <div className={`h-1 bg-gradient-to-r ${card.gradient}`} />

              <div className="p-8 flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-4 font-cairo flex items-center gap-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl xl:text-2xl">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
