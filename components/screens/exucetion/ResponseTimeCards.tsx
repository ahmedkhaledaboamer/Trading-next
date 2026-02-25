'use client'
import { motion } from 'framer-motion'
import { Clock, FileText, Zap, Shield } from 'lucide-react'

const cardColors = [
  'bg-gradient-to-br from-emerald-500/25 via-emerald-500/10 to-transparent border-emerald-400/70',
  'bg-gradient-to-br from-sky-500/25 via-sky-500/10 to-transparent border-sky-400/70',
  'bg-gradient-to-br from-fuchsia-500/25 via-fuchsia-500/10 to-transparent border-fuchsia-400/70',
  'bg-gradient-to-br from-orange-500/25 via-orange-500/10 to-transparent border-orange-400/70',
  'bg-gradient-to-br from-lime-500/25 via-lime-500/10 to-transparent border-lime-400/70',
  'bg-gradient-to-br from-rose-500/25 via-rose-500/10 to-transparent border-rose-400/70',
  'bg-gradient-to-br from-cyan-500/25 via-cyan-500/10 to-transparent border-cyan-400/70',
  'bg-gradient-to-br from-amber-500/25 via-amber-500/10 to-transparent border-amber-400/70',
]

const badgeColors = [
  'bg-emerald-500',
  'bg-sky-500',
  'bg-fuchsia-500',
  'bg-orange-500',
  'bg-lime-500',
  'bg-rose-500',
  'bg-cyan-500',
  'bg-amber-500',
]

const stats = [
  {
    id: 1,
    title: 'الرد الأولي',
    time: '2 ساعة',
    desc: 'خلال',
    icon: Clock,
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'تقديم العرض',
    time: '24 ساعة',
    desc: 'خلال',
    icon: FileText,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'بدء التنفيذ',
    time: '48 ساعة',
    desc: 'خلال',
    icon: Zap,
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    id: 4,
    title: 'حل المشكلات',
    time: '6 ساعات',
    desc: 'خلال',
    icon: Shield,
    gradient: 'from-pink-500 to-rose-600',
  },
]
export function ResponseTimeCards() {
  return (
    <section className="p-[5%] bg-white relative">
      <div className="mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-5xl font-bold text-teal-800 mb-4 bg-teal-100 border-2 border-teal-500 rounded-xl px-8 py-4 w-fit mx-auto">
          التزاماتنا بالاستجابة
        </h2>
        <p className="text-slate-700 text-base md:text-lg bg-slate-200 border-2 border-slate-400 rounded-lg px-6 py-3 w-fit mx-auto">
          نقدر وقتكم ونلتزم بأعلى معايير السرعة والكفاءة
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
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
                delay: index * 0.1,
              }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-500 ${cardColors[index % cardColors.length]}`}
              ></div>
              <div
                className={`relative glass-card p-8 rounded-2xl text-center h-full flex flex-col items-center justify-center border-2 bg-gray-900/80 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 ${cardColors[index % cardColors.length]}`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg ${badgeColors[index % badgeColors.length]}`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-slate-400 text-base md:text-lg mb-1">{stat.desc}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.time}
                </h3>
                <p className="text-[#0EA5E9] text-xl md:text-2xl font-medium">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      
    </section>
  )
}
