 'use client'
 import { motion } from 'framer-motion'
import {
  MessageCircle,
  Check,
  Star,
  TrendingUp,
  FileText,
  Truck,
  Globe,
  BarChart,
} from 'lucide-react'
export function BrandOperations() {
  const proveValuePoints = [
    {
      icon: <TrendingUp />,
      text: 'سرعة تنفيذ محسوبة وليست عشوائية.',
      color: '#0D9488',
    },
    {
      icon: <FileText />,
      text: 'مستندات دقيقة بلا أخطاء ولا تأجيل.',
      color: '#7C3AED',
    },
    {
      icon: <Truck />,
      text: 'شحنات تُتابَع لحظة بلحظة، من المصدر حتى باب العميل.',
      color: '#D97706',
    },
    {
      icon: <Globe />,
      text: 'علاقات دولية قوية تُسهّل الطريق بدل أن تعقّده.',
      color: '#DC2626',
    },
    {
      icon: <BarChart />,
      text: 'تحليل أسعار وأسواق مستمر يضمن أفضل قرار في أفضل توقيت.',
      color: '#2563EB',
    },
    {
      icon: <Star />,
      text: 'حلول مرنة تناسب كل عميل، وكل سوق، وكل حالة.',
      color: '#059669',
    },
  ]
  const credibilityPoints = [
    'عقود واضحة لا تحتمل التأويل.',
    'فواتير شفافة بلا مفاجآت.',
    'تحديثات مستمرة في كل مرحلة.',
    'تنفيذ قابل للقياس، لا يعتمد على الكلام.',
    'التزام لا يتغير مهما تغيّرت الظروف.',
    'توثيق كامل لكل خطوة، من أول اتصال حتى آخر توقيع.',
  ]
  return (
    <>
      

      {/* Communication Style */}
      <section className="p-[5%] bg-brand-cream">
        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            >
              <h2
                className="text-4xl font-bold mb-6 flex items-center gap-4"
                style={{
                  background: '#0A1628',
                  color: '#C8A45C',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                }}
              >
                <MessageCircle className="w-10 h-10" />
                أسلوب التواصل
              </h2>

              {/* Added Side Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
                  alt="Communication"
                  className="w-full h-48 object-cover"
                />
              </div>

              <p className="text-xl text-brand-dark/80 mb-8">
                نحن نتواصل مع العميل بطريقة واحدة فقط:
              </p>

              <ul className="space-y-4">
                {[
                  'نشرح… ولا نبرر.',
                  'نوضح… ولا نُربك.',
                  'نخبر… ولا نتركه يتوقع.',
                  'نقدّم معلومة… لا انطباعًا.',
                  'نستخدم لغة تحترم عقل العميل… لا تستهلك وقته.',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: i * 0.1,
                    }}
                    className="flex items-center gap-3 text-lg font-medium text-brand-navy"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: '#C8A45C',
                      }}
                    ></span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <p
                className="mt-8 text-2xl font-bold"
                style={{
                  color: '#D97706',
                }}
              >
                التواصل عندنا ليس خدمة… بل جزء من الهوية.
              </p>
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
              className="p-10 rounded-2xl shadow-2xl text-white relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #0A1628 0%, #1a3a5c 50%, #0D9488 100%)',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

              <h3
                className="text-3xl font-bold mb-8 text-center"
                style={{
                  color: '#E8D5A3',
                }}
              >
                وعد العلامة التجارية
              </h3>
              <p className="text-center text-lg mb-8 opacity-80">
                نعد العميل بثلاثة أمور لا نتراجع عنها:
              </p>

              <div className="grid gap-6">
                <div
                  className="p-4 rounded-lg text-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(13, 148, 136, 0.2)',
                    borderLeft: '3px solid #0D9488',
                  }}
                >
                  <span className="text-xl font-bold">معلومة واضحة</span>
                </div>
                <div
                  className="p-4 rounded-lg text-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(217, 119, 6, 0.2)',
                    borderLeft: '3px solid #D97706',
                  }}
                >
                  <span className="text-xl font-bold">تنفيذ دقيق</span>
                </div>
                <div
                  className="p-4 rounded-lg text-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(124, 58, 237, 0.2)',
                    borderLeft: '3px solid #7C3AED',
                  }}
                >
                  <span className="text-xl font-bold">تجربة تعامل تُحترم</span>
                </div>
              </div>

              <p className="mt-8 text-center text-sm opacity-60">
                هذا الوعد هو معيارنا… وهو ما نحاسب أنفسنا عليه قبل أن يحاسبنا
                العميل.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prove Value & Credibility - Converted to Light */}
      <section className="p-[5%] bg-white text-brand-navy">
        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Prove Value */}
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                  color: '#C8A45C',
                }}
              >
                كيف نثبت قيمتنا؟
              </motion.h2>

              {/* Added Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                  alt="Logistics Warehouse"
                  className="w-full h-48 object-cover"
                />
              </div>

              <p className="text-lg mb-8 text-brand-dark/80">
                نثبت قيمتنا بالفعل لا بالكلام، وبالنتيجة لا بالوعود:
              </p>

              <div className="space-y-6">
                {proveValuePoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: i * 0.1,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="mt-1 shrink-0"
                      style={{
                        color: point.color,
                      }}
                    >
                      {point.icon}
                    </div>
                    <p className="text-lg text-brand-dark/90">{point.text}</p>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-10 p-6 rounded-l-lg bg-brand-cream/50"
                style={{
                  borderRight: '4px solid #C8A45C',
                }}
              >
                <p className="text-xl font-light italic text-brand-navy">
                  نحن لا نقول "نحن الأفضل"… نحن نترك النتائج تقول ذلك.
                </p>
              </div>
            </div>

            {/* Credibility */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="text-3xl md:text-4xl font-bold mb-8 text-brand-navy"
                style={{
                  background: 'linear-gradient(90deg, #C8A45C, transparent)',
                  padding: '8px 20px',
                  borderRadius: '4px',
                  color: 'white',
                }}
              >
                كيف نُظهر مصداقيتنا؟
              </motion.h2>

              {/* Added Decorative Image */}
              <div className="mb-8 rounded-lg overflow-hidden h-40">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"
                  alt="Contracts"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              <p
                className="text-lg mb-8 font-medium"
                style={{
                  color: '#D97706',
                }}
              >
                المصداقية ليست خيارًا… هي جزء من نظام التشغيل:
              </p>

              <div className="space-y-4">
                {credibilityPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: i * 0.1,
                    }}
                    className="flex items-center gap-4 bg-white p-4 rounded border border-gray-100 shadow-sm"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: '#C8A45C',
                      }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-brand-navy">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
