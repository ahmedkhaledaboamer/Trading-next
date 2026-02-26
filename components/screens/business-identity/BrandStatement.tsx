 'use client'
 import { motion } from 'framer-motion'
import {
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  Briefcase,
  Globe,
} from 'lucide-react'
export function BrandStatement( {locale}: {locale: string} ) {
  const isRTL = locale === "ar";
  const dictionaryTerms = [
    {
      term: 'التوريد',
      def: 'وصول في الوقت، لا وصول وخلاص.',
      color: '#0D9488',
    },
    {
      term: 'العميل',
      def: 'شريك قرار، لا رقم في النظام.',
      color: '#7C3AED',
    },
    {
      term: 'الجودة',
      def: 'نتيجة تُقاس، لا كلمة تُقال.',
      color: '#D97706',
    },
    {
      term: 'الالتزام',
      def: 'موعد ثابت، لا احتمال.',
      color: '#DC2626',
    },
    {
      term: 'التسويق',
      def: 'انطباع يبقى، لا إعلان يمر.',
      color: '#059669',
    },
    {
      term: 'المصداقية',
      def: 'أسلوب عمل، لا شعار.',
      color: '#2563EB',
    },
    {
      term: 'الخدمة',
      def: 'تجربة كاملة، لا خطوة منفصلة.',
      color: '#DB2777',
    },
    {
      term: 'النجاح',
      def: 'نتيجة مشتركة، لا إنجاز فردي.',
      color: '#C8A45C',
    },
  ]
  const values = [
    {
      icon: <BookOpen />,
      title: 'الوضوح',
      desc: 'نقول الحقيقة كما هي، بلا تجميل ولا التفاف.',
      color: '#0D9488',
    },
    {
      icon: <Clock />,
      title: 'الالتزام',
      desc: 'الموعد عندنا عقد… والتنفيذ مسؤولية.',
      color: '#7C3AED',
    },
    {
      icon: <Users />,
      title: 'الاحترام',
      desc: 'احترام وقت العميل، وماله، وثقته.',
      color: '#D97706',
    },
    {
      icon: <CheckCircle />,
      title: 'الدقة',
      desc: 'كل خطوة محسوبة، وكل معلومة مؤكدة.',
      color: '#DC2626',
    },
    {
      icon: <Globe />,
      title: 'الاستمرارية',
      desc: 'علاقة طويلة المدى، مش صفقة قصيرة.',
      color: '#2563EB',
    },
    {
      icon: <Briefcase />,
      title: 'الاحتراف',
      desc: 'أسلوب عمل ثابت لا يتغير مهما تغيّرت الظروف.',
      color: '#059669',
    },
  ]
  return (
    <>
      {/* Statement Section */}
      <section className="p-[5%] bg-brand-cream relative" dir={isRTL ? "rtl" : "ltr"}>
        <div className="  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
            <h2
              className="text-lg md:text-xl lg:text-3xl 2xl:text-6xl font-bold mb-6"
              style={{
                background:
                  'linear-gradient(135deg, #0A1628 0%, #1a3a5c 100%)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.5)',
                width: 'fit-content',
              }}
            >
                بيان كي إي بي للتجارة
              </h2>
              <p
                className="font-semibold text-sm md:text-xl lg:text-xl 2xl:text-4xl mb-8 w-fit"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(248, 250, 252, 0.95), rgba(251, 191, 36, 0.22))',
                  color: '#7C2D12',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(217, 119, 6, 0.45)',
                }}
              >
                هذا البيان ليس صياغة رسمية… بل إعلان صريح لطريقة عملنا
              </p>

              <div className="space-y-6">
                <div
                  className="bg-white p-8 rounded-lg shadow-sm border-r-4"
                  style={{
                    borderColor: '#C8A45C',
                  }}
                >
                  <ul className="space-y-4 text-sm md:text-xl lg:text-xl 2xl:text-4xl font-medium text-brand-dark">
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: '#0D9488',
                        }}
                      ></span>
                      نلتزم قبل أن نعد.
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: '#7C3AED',
                        }}
                      ></span>
                      نُظهر قبل أن نتكلم.
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: '#D97706',
                        }}
                      ></span>
                      ننفّذ قبل أن نروّج.
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: '#DC2626',
                        }}
                      ></span>
                      ونعتبر العميل شريكًا في القرار قبل أن يكون متعاملًا.
                    </li>
                  </ul>
                </div>

                <p className="text-sm md:text-xl lg:text-xl 2xl:text-3xl text-brand-dark/80 leading-relaxed">
                  نحن لا نبيع منتجات فقط… نحن نبني ثقة، ونصنع علاقة، ونقدّم
                  تجربة تعامل تُثبت نفسها مع الوقت، وتترك أثرًا يجعل العميل يعود
                  لأنه يريد، لا لأنه مضطر.
                </p>
              </div>
            </motion.div>

            <motion.div
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
                duration: 0.8,
              }}
              className="relative h-full min-h-[400px]"
            >
              <div
                className="absolute inset-0 rounded-lg transform rotate-3"
                style={{
                  background: '#0A1628',
                }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Team Collaboration"
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dictionary Section - Converted to Light */}
      <section className="p-[5%] bg-white relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200"
            alt="Books Background"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 z-10"></div>

        <div className="   sm:px-6 lg:px-8 relative z-10">
          <motion.div
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
            className="text-center mb-16"
          >
            <h2
              className="text-lg md:text-xl lg:text-2xl 2xl:text-6xl font-bold mb-4 w-fit mx-auto"
              style={{
                background:
                  'linear-gradient(135deg, #0F172A 0%, #0D9488 55%, #0F172A 100%)',
                color: '#E8E7DC',
                padding: '12px 26px',
                borderRadius: '9999px',
                border: '1px solid rgba(15, 118, 110, 0.5)',
              }}
            >
              قاموس كي إي بي
            </h2>
            <p
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium w-fit mx-auto mt-3"
              style={{
                background:
                  'linear-gradient(90deg, rgba(248, 250, 252, 0.96), rgba(248, 250, 252, 0.9))',
                color: '#92400E',
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid rgba(234, 179, 8, 0.4)',
              }}
            >
              هذا القاموس ليس كلمات… بل فلسفة عمل
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
            {dictionaryTerms.map((item, index) => (
              <motion.div
                key={index}
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
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white p-6 rounded hover:shadow-lg transition-all duration-300 shadow-sm border border-gray-100"
                style={{
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.term}
                </h3>
                <p className="text-brand-dark/80 text-lg md:text-xl lg:text-2xl xl:text-3xl">{item.def}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="p-[5%] bg-brand-cream relative" dir={isRTL ? "rtl" : "ltr"}>
        <div className="   sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-16"
          >
            <h2
              className="text-lg md:text-xl lg:text-2xl 2xl:text-6xl font-bold mb-8"
              style={{
                background: 'linear-gradient(90deg, #C8A45C 0%, #0A1628 100%)',
                color: 'white',
                padding: '12px 28px',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.4)',
                width: 'fit-content',
                margin: '0 auto',
              }}
            >
              قيم كي إي بي للتجارة
            </h2>

           

            <p
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brand-dark/70 w-fit mx-auto mt-3"
              style={{
                background:
                  'linear-gradient(120deg, rgba(248, 250, 252, 0.95), rgba(15, 23, 42, 0.06))',
                color: '#0F172A',
                padding: '10px 22px',
                borderRadius: '9999px',
                border: '1px solid rgba(148, 163, 184, 0.6)',
              }}
            >
              قيمنا ليست شعارات… بل قواعد تشغيل لا نتجاوزها
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  borderTop: `4px solid ${val.color}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: val.color,
                    color: 'white',
                  }}
                >
                  <div className="w-8 h-8">{val.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-5xl font-bold text-brand-navy mb-3">
                  {val.title}
                </h3>
                <p className="text-sm md:text-lg lg:text-2xl 2xl:text-3xl text-brand-dark/70 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
