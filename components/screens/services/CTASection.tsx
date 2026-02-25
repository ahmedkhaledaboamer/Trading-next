 'use client'
 import { motion } from 'framer-motion'
import { ArrowLeft, Mail } from 'lucide-react'
export function CTASection() {
  return (
    <section className="relative p-[5%] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Team meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight drop-shadow-xl">
            هل تحتاج إلى خدمة مخصصة؟
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
            فريقنا من الخبراء جاهز لمساعدتك في العثور على الحل الأمثل لأعمالك.
            تواصل معنا اليوم للحصول على استشارة مجانية وحلول مصممة خصيصاً
            لاحتياجاتكم.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 duration-300">
              <span>تواصل معنا الآن</span>
              <ArrowLeft size={22} />
            </button>

            <button className="w-full sm:w-auto px-10 py-5 bg-teal/20 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 hover:border-white/50">
              <Mail size={22} />
              <span>أرسل استفساراً</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}