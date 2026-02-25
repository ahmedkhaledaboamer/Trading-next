'use client'

import {
  StarIcon,
  ThumbsUpIcon,
  MessageSquareIcon,
  CheckSquareIcon,
  ZapIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'

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

const barColors = [
  'bg-emerald-400',
  'bg-sky-400',
  'bg-fuchsia-400',
  'bg-orange-400',
  'bg-lime-400',
  'bg-rose-400',
  'bg-cyan-400',
  'bg-amber-400',
]

const items = [
  {
    label: 'جودة التنفيذ',
    icon: StarIcon,
    width: '100%',
    score: '10/10',
  },
  {
    label: 'سرعة الإنجاز',
    icon: ZapIcon,
    width: '95%',
    score: '9.5/10',
  },
  {
    label: 'دقة المستندات',
    icon: CheckSquareIcon,
    width: '100%',
    score: '10/10',
  },
  {
    label: 'مستوى التواصل',
    icon: MessageSquareIcon,
    width: '98%',
    score: '9.8/10',
  },
  {
    label: 'ملاحظات للتحسين',
    icon: ThumbsUpIcon,
    width: '90%',
    score: '9/10',
  },
]

export function PostDeliveryProgress() {
  return (
    <div className="space-y-6">
      {items.map((item, idx) => {
        const cardColor = cardColors[idx % cardColors.length]
        const barColor = barColors[idx % barColors.length]

        return (
          <div
            key={idx}
            className={`relative bg-gray-900/80 backdrop-blur-sm p-4 rounded-2xl border text-white overflow-hidden ${cardColor}`}
          >

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-white/80" />
                <span className="font-bold text-base md:text-lg">{item.label}</span>
              </div>
              <span className="text-base md:text-lg text-gray-200 font-mono">{item.score}</span>
            </div>

            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: item.width }}
                transition={{
                  duration: 1.1,
                  delay: idx * 0.15,
                  ease: 'easeOut',
                }}
                className={`h-full rounded-full shadow-[0_0_18px_rgba(0,0,0,0.35)] ${barColor}`}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

