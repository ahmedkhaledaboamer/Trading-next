 'use client'
 import { motion } from 'framer-motion'
import {
  Globe,
  Truck,
  TrendingUp,
  Monitor,
  Home,
  Smartphone,
  Gamepad2,
  Headphones,
  Wrench,
  Wifi,
} from 'lucide-react'
import Image from 'next/image'
export function ServicesSection() {
  const services = [
    {
      name: 'استيراد دولي',
      icon: <Globe />,
      color: 'bg-blue-500',
      image:
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=300&q=80',
    },
    {
      name: 'توزيع محلي',
      icon: <Truck />,
      color: 'bg-green-500',
      image:
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&q=80',
    },
    {
      name: 'توسع خارجي',
      icon: <TrendingUp />,
      color: 'bg-purple-500',
      image:
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=300&q=80',
    },
    {
      name: 'أجهزة إلكترونية',
      icon: <Monitor />,
      color: 'bg-indigo-500',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80',
    },
    {
      name: 'أجهزة منزلية',
      icon: <Home />,
      color: 'bg-orange-500',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80',
    },
    {
      name: 'هواتف ذكية',
      icon: <Smartphone />,
      color: 'bg-teal-500',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80',
    },
    {
      name: 'ترفيه رقمي',
      icon: <Gamepad2 />,
      color: 'bg-pink-500',
      image:
        'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&q=80',
    },
    {
      name: 'سمعيات ومرئيات',
      icon: <Headphones />,
      color: 'bg-red-500',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
    },
    {
      name: 'قطع غيار',
      icon: <Wrench />,
      color: 'bg-gray-600',
      image:
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80',
    },
    {
      name: 'شبكات واتصالات',
      icon: <Wifi />,
      color: 'bg-cyan-500',
      image:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&q=80',
    },
  ]
  return (
    <section className="  bg-white">
      <div className=" p-[5%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#0A1628] mb-4">
            خدماتنا المتكاملة
          </h2>
          <div className="w-24 h-1 bg-[#D4A853] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-gray-600  ">
            كل خدمة مصممة لتمنحك سهولة، جودة، وثقة في كل خطوة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="group rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4A853] hover:shadow-lg transition-all duration-300 text-center cursor-default overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="h-90 w-full relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Icon overlapping image */}
              <div className="relative -mt-8 mb-4 flex justify-center">
                <div
                  className={`w-16 h-16 rounded-full ${service.color} text-white flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-8 h-8 flex items-center justify-center">{service.icon}</div>
                </div>
              </div>

              <div className="px-4 pb-6 pt-0">
                <h3 className="font-bold text-gray-800 text-lg md:text-xl lg:text-2xl xl:text-3xl group-hover:text-[#0A1628] transition-colors">
                  {service.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
