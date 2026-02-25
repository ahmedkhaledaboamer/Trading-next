 'use client'
 import { motion } from 'framer-motion'
import { BoxIcon } from 'lucide-react'
interface ServiceCardProps {
  title: string
  description: string  
  points: string[]
  icon: typeof BoxIcon
  image: string
  colorClass: string  
  accentColor: string  
  delay?: number
}
export function ServiceCard({
  title,
  description,
  points,
  icon: Icon,
  image,
  colorClass,
  accentColor,
  delay = 0,
}: ServiceCardProps) {
  return (
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
        margin: '-50px',
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -10,
        transition: {
          duration: 0.2,
        },
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border-t-4 group"
      style={{
        borderColor: accentColor,
      }}
    >
      {/* Card Image Area */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
      </div>

      <div className="px-6 pb-6 flex-1 flex flex-col relative">
        {/* Icon Header - Overlapping Image */}
        <div className="flex items-center justify-between mb-4 -mt-7 relative z-10">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white ${colorClass}`}
            style={{
              backgroundColor: accentColor,
            }}
          >
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <div
            className="h-1.5 w-12 rounded-full opacity-20 mt-8"
            style={{
              backgroundColor: accentColor,
            }}
          ></div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>

        {/* Description Pill */}
        <div
          className="inline-block px-3 py-1.5 rounded-xl text-sm font-medium mb-5 self-start"
          style={{
            backgroundColor: `${accentColor}15`,
            color: accentColor,
          }}
        >
          {description}
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2 mt-auto">
          {points.map((point, index) => (
            <li key={index} className="flex items-start text-gray-600 text-sm">
              <span
                className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ml-2"
                style={{
                  backgroundColor: accentColor,
                }}
              />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
