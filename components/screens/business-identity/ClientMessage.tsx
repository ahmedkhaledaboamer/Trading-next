 'use client'
 import { motion } from 'framer-motion'
import { Quote, HeartHandshake } from 'lucide-react'
export function ClientMessage() {
  return (
    <section className="py-24 bg-[#0A1628] text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Business Partnership"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 to-[#0A1628]/70" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A853] opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0E7490] opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A853]/20 text-[#D4A853] mb-8 backdrop-blur-sm border border-[#D4A853]/30">
              <HeartHandshake className="w-8 h-8" />
            </div>

            <h2 className="text-4xl font-bold mb-8 text-[#D4A853]">
              كلمة للعميل
            </h2>

            <div className="relative">
              <Quote className="absolute -top-8 -right-4 w-12 h-12 text-[#D4A853]/20 transform -scale-x-100" />

              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight drop-shadow-lg">
                "أنت لست رقمًا في قائمة… <br />
                <span className="text-[#D4A853]">
                  أنت قيمة تُقدّر، وشريك نعتز به
                </span>
                "
              </h3>

              <p className="text-xl text-gray-200 leading-relaxed mb-8 drop-shadow-md">
                وركن أساسي في رحلتنا التجارية. نستمع لك، نفهم احتياجاتك، ونبني
                لك مسارًا تجاريًا يناسب طموحك، لأن نجاحك جزء من هويتنا، وثقتك هي
                رأس مالنا الحقيقي.
              </p>

              <Quote className="absolute -bottom-8 -left-4 w-12 h-12 text-[#D4A853]/20" />
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-[#D4A853] to-transparent mx-auto mt-12 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
