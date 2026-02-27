'use client'
import { motion } from 'framer-motion'
import {
  ShieldAlert,
  Globe,
  Monitor,
  Award,
  ShoppingCart,
  FileCheck,
  Users,
  BarChart3,
  Headphones,
  FileText,
  CheckCircle,
  Handshake,
} from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function BusinessUnits({ locale }: { locale: string }) {
  const isRTL = locale === 'ar'
  const t = useTranslations('businessPath.businessUnits')
  const units = [
    {
      id: 1,
      name: t('units.risk.name'),
      icon: <ShieldAlert />,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-500',
      desc: t('units.risk.desc'),
      tasks: [
        t('units.risk.tasks.0'),
        t('units.risk.tasks.1'),
        t('units.risk.tasks.2'),
        t('units.risk.tasks.3'),
      ],
      value: [
        t('units.risk.value.0'),
        t('units.risk.value.1'),
        t('units.risk.value.2'),
      ],
      image:
        '/images/Business Units/51.webp',
    },
    {
      id: 2,
      name: t('units.internationalExpansion.name'),
      icon: <Globe />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      desc: t('units.internationalExpansion.desc'),
      tasks: [
        t('units.internationalExpansion.tasks.0'),
        t('units.internationalExpansion.tasks.1'),
        t('units.internationalExpansion.tasks.2'),
        t('units.internationalExpansion.tasks.3'),
      ],
      value: [
        t('units.internationalExpansion.value.0'),
        t('units.internationalExpansion.value.1'),
        t('units.internationalExpansion.value.2'),
      ],
      image:
        '/images/Business Units/59.webp',
    },
    {
      id: 3,
      name: t('units.digitalTransformation.name'),
      icon: <Monitor />,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-500',
      desc: t('units.digitalTransformation.desc'),
      tasks: [
        t('units.digitalTransformation.tasks.0'),
        t('units.digitalTransformation.tasks.1'),
        t('units.digitalTransformation.tasks.2'),
        t('units.digitalTransformation.tasks.3'),
      ],
      value: [
        t('units.digitalTransformation.value.0'),
        t('units.digitalTransformation.value.1'),
        t('units.digitalTransformation.value.2'),
      ],
      image:
        '/images/Business Units/62.webp',
    },
    {
      id: 4,
      name: t('units.franchise.name'),
      icon: <Award />,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-500',
      desc: t('units.franchise.desc'),
      tasks: [
        t('units.franchise.tasks.0'),
        t('units.franchise.tasks.1'),
        t('units.franchise.tasks.2'),
        t('units.franchise.tasks.3'),
      ],
      value: [
        t('units.franchise.value.0'),
        t('units.franchise.value.1'),
        t('units.franchise.value.2'),
      ],
      image:
        '/images/Business Units/80.webp',
    },
    {
      id: 5,
      name: t('units.ecommerce.name'),
      icon: <ShoppingCart />,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-500',
      desc: t('units.ecommerce.desc'),
      tasks: [
        t('units.ecommerce.tasks.0'),
        t('units.ecommerce.tasks.1'),
        t('units.ecommerce.tasks.2'),
        t('units.ecommerce.tasks.3'),
      ],
      value: [
        t('units.ecommerce.value.0'),
        t('units.ecommerce.value.1'),
        t('units.ecommerce.value.2'),
      ],
      image:
        '/images/Business Units/79.webp',
    },
    {
      id: 6,
      name: t('units.compliance.name'),
      icon: <FileCheck />,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-500',
      desc: t('units.compliance.desc'),
      tasks: [
        t('units.compliance.tasks.0'),
        t('units.compliance.tasks.1'),
        t('units.compliance.tasks.2'),
        t('units.compliance.tasks.3'),
      ],
      value: [
        t('units.compliance.value.0'),
        t('units.compliance.value.1'),
        t('units.compliance.value.2'),
      ],
      image:
        '/images/Business Units/005.webp',
    },
    {
      id: 7,
      name: t('units.supplierDevelopment.name'),
      icon: <Users />,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-500',
      desc: t('units.supplierDevelopment.desc'),
      tasks: [
        t('units.supplierDevelopment.tasks.0'),
        t('units.supplierDevelopment.tasks.1'),
        t('units.supplierDevelopment.tasks.2'),
        t('units.supplierDevelopment.tasks.3'),
      ],
      value: [
        t('units.supplierDevelopment.value.0'),
        t('units.supplierDevelopment.value.1'),
        t('units.supplierDevelopment.value.2'),
      ],
      image:
        '/images/Business Units/68.webp',
    },
    {
      id: 8,
      name: t('units.financialAnalysis.name'),
      icon: <BarChart3 />,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-500',
      desc: t('units.financialAnalysis.desc'),
      tasks: [
        t('units.financialAnalysis.tasks.0'),
        t('units.financialAnalysis.tasks.1'),
        t('units.financialAnalysis.tasks.2'),
        t('units.financialAnalysis.tasks.3'),
      ],
      value: [
        t('units.financialAnalysis.value.0'),
        t('units.financialAnalysis.value.1'),
        t('units.financialAnalysis.value.2'),
      ],
      image:
        '/images/Business Units/0013.webp',
    },
    {
      id: 9,
      name: t('units.customerService.name'),
      icon: <Headphones />,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-500',
      desc: t('units.customerService.desc'),
      tasks: [
        t('units.customerService.tasks.0'),
        t('units.customerService.tasks.1'),
        t('units.customerService.tasks.2'),
        t('units.customerService.tasks.3'),
      ],
      value: [
        t('units.customerService.value.0'),
        t('units.customerService.value.1'),
        t('units.customerService.value.2'),
      ],
      image:
        '/images/38.webp',
    },
    {
      id: 10,
      name: t('units.contractManagement.name'),
      icon: <FileText />,
      color: 'text-slate-600',
      bg: 'bg-slate-50',
      border: 'border-slate-500',
      desc: t('units.contractManagement.desc'),
      tasks: [
        t('units.contractManagement.tasks.0'),
        t('units.contractManagement.tasks.1'),
        t('units.contractManagement.tasks.2'),
        t('units.contractManagement.tasks.3'),
      ],
      value: [
        t('units.contractManagement.value.0'),
        t('units.contractManagement.value.1'),
        t('units.contractManagement.value.2'),
      ],
      image:
        '/images/Business Units/image_2684.webp',
    },
    {
      id: 11,
      name: t('units.quality.name'),
      icon: <CheckCircle />,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-500',
      desc: t('units.quality.desc'),
      tasks: [
        t('units.quality.tasks.0'),
        t('units.quality.tasks.1'),
        t('units.quality.tasks.2'),
        t('units.quality.tasks.3'),
      ],
      value: [
        t('units.quality.value.0'),
        t('units.quality.value.1'),
        t('units.quality.value.2'),
      ],
      image:
        '/images/Business Units/image_2692.webp',
    },
    {
      id: 12,
      name: t('units.internationalRelations.name'),
      icon: <Handshake />,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-500',
      desc: t('units.internationalRelations.desc'),
      tasks: [
        t('units.internationalRelations.tasks.0'),
        t('units.internationalRelations.tasks.1'),
        t('units.internationalRelations.tasks.2'),
        t('units.internationalRelations.tasks.3'),
      ],
      value: [
        t('units.internationalRelations.value.0'),
        t('units.internationalRelations.value.1'),
        t('units.internationalRelations.value.2'),
      ],
      image:
        '/images/image_2675.webp',
    } 
  ]
  return (
    <section
      className="  bg-gradient-to-b from-white to-gray-50"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className=" p-[5%]">
        <div className="text-center mb-16">
          <span className="text-[#0E7490] font-bold tracking-wider uppercase text-base md:text-lg lg:text-xl xl:text-3xl bg-[#0E7490]/10 px-4 py-1 rounded-full">
            {t('badge')}
          </span>
          <h2 className="text-xl md:text-2xl lg:text-4xl 2xl:text-7xl font-bold text-[#0A1628] mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-md md:text-xl lg:text-2xl 2xl:text-4xl text-gray-600  ">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{
                once: true,
              }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 ${unit.border} group flex flex-col`}
            >
              {/* Image Header */}
              <div className="h-36 md:h-100 lg:h-62 xl:h-100 2xl:h-130 w-full relative overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay matching unit color */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90`}
                />
                <div
                  className={`absolute inset-0 ${unit.bg} opacity-20 mix-blend-multiply`}
                />
              </div>

              <div className="px-8 pb-8 pt-0 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6 -mt-7 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl ${unit.bg} ${unit.color} flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">{unit.icon}</div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight pt-10">
                    {unit.name}
                  </h3>
                </div>

                <p className="text-base md:text-lg lg:text-xl xl:text-3xl text-gray-600 mb-6 min-h-[48px] leading-relaxed">
                  {unit.desc}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`font-bold text-base md:text-lg xl:text-3xl mb-3 ${unit.color}`}>
                      {t('tasksTitle')}
                    </h4>
                    <ul className="space-y-2">
                      {unit.tasks.slice(0, 3).map((task, i) => (
                        <li
                          key={i}
                          className="flex items-start text-base md:text-lg xl:text-2xl text-gray-600"
                        >
                          <span
                            className={`w-2 h-2 rounded-full mt-2 ${isRTL ? "ml-2" : "mr-2"} shrink-0 bg-gray-400 `}
                          />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-base md:text-lg xl:text-3xl text-gray-900 mb-2">
                      {t('valueTitle')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {unit.value.slice(0, 2).map((val, i) => (
                        <span
                          key={i}
                          className={`text-sm md:text-base lg:text-lg xl:text-xl  px-3 py-1 rounded-md ${unit.bg} ${unit.color} font-medium`}
                        >
                          {val}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
