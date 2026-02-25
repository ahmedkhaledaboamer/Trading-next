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
  /** When set, clicking a filter scrolls the page to this element (e.g. "services-start"). */
  scrollToSectionId?: string
}
export function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
  scrollToSectionId,
}: FilterBarProps) {
  const allCategories = [
    {
      title: 'الكل',
      accentColor: '#1a237e',
    },
    ...categories,
  ]

  const handleFilterClick = (title: string | null) => {
    onFilterChange(title)
    if (scrollToSectionId) {
      const target = document.getElementById(scrollToSectionId)
      if (target) {
        const rect = target.getBoundingClientRect()
        const isMobile = window.innerWidth < 768
        const offset = isMobile ? 100 : 0
        const top = window.scrollY + rect.top - offset

        window.scrollTo({
          top,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div  className="sticky top-22 md:top-24 lg:top-24 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm  ">
      <div className=" flex justify-center items-center px-1 py-2 lg:px-4 lg:py8">
        <div
          className="flex gap-3 overflow-x-auto scrollbar-hide p-4"
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
                  handleFilterClick(cat.title === 'الكل' ? null : cat.title)
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="relative flex-shrink-0 px-4 py-2 lg:px-6 lg:py-4 rounded-full text-base md:text-lg lg:text-xl xl:text-3xl font-bold transition-all duration-300 border-2 cursor-pointer"
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
            style={{
              backgroundColor: accentColor,
            }}
            className="p-5 rounded-2xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 inline-block relative"
          >
            {title}
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
              className="text-gray-600 w-fit mx-auto text-base md:text-lg lg:text-xl xl:text-3xl border-2 rounded-2xl px-4 py-2"
              style={{
                borderColor: accentColor,
                color: accentColor,
              }}
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
