 'use client'
 import { motion } from 'framer-motion'
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
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
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
