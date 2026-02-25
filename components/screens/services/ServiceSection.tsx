'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FilterCategory {
  title: string
  accentColor: string
}
interface FilterBarProps {
  categories: FilterCategory[]
  activeFilter: string | null
  onFilterChange: (title: string | null) => void
}
export function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  const allCategories = [
    {
      title: 'الكل',
      accentColor: '#1a237e',
    },
    ...categories,
  ]
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm  ">
      <div className=" flex justify-center items-center px-4 py-4">
        <div
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {allCategories.map((cat) => {
            const isActive =
              cat.title === 'الكل'
                ? activeFilter === null
                : activeFilter === cat.title
            return (
              <motion.button
                key={cat.title}
                onClick={() =>
                  onFilterChange(cat.title === 'الكل' ? null : cat.title)
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="relative flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2"
                style={{
                  backgroundColor: isActive ? cat.accentColor : 'transparent',
                  color: isActive ? '#fff' : cat.accentColor,
                  borderColor: isActive
                    ? cat.accentColor
                    : `${cat.accentColor}30`,
                  boxShadow: isActive
                    ? `0 4px 14px ${cat.accentColor}40`
                    : 'none',
                }}
              >
                {cat.title}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterIndicator"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: cat.accentColor,
                      zIndex: -1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}

interface ServiceSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  backgroundColor: string // Tailwind class like "bg-white" or "bg-gray-50"
  accentColor: string // Hex for title decoration
  id?: string
}
export function ServiceSection({
  title,
  subtitle,
  children,
  backgroundColor,
  accentColor,
  id,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className={`p-[5%] ${backgroundColor} relative overflow-hidden`}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            backgroundColor: accentColor,
          }}
        ></div>
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            backgroundColor: accentColor,
          }}
        ></div>
      </div>

      <div className=" relative z-10">
        <div className="text-center mb-16">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block relative pb-2"
          >
            {title}
            <span
              className="absolute bottom-0 left-0 w-full h-1 rounded-full"
              style={{
                backgroundColor: accentColor,
              }}
            />
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-gray-600   text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {children}
        </div>
      </div>
    </section>
  )
}
