'use client'
 import { motion } from 'framer-motion'
import { Target, Eye, Zap, Shield, Award, HeartHandshake } from 'lucide-react'
import Image from 'next/image'
export function BrandIntro( {locale}: {locale: string} ) {
    const isRTL = locale === "ar";
    const personalityTraits = [
        {
          icon: <Target className="w-6 h-6" />,
          title: 'صريحة',
          desc: 'لا نستخدم كلمات أكبر من الحقيقة.',
          color: '#0D9488', // Teal
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: 'هادئة',
          desc: 'لا نبالغ، ولا نعد بما لا نستطيع.',
          color: '#7C3AED', // Purple
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: 'عملية',
          desc: 'نركز على التنفيذ قبل الكلام.',
          color: '#D97706', // Amber
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: 'واعية',
          desc: 'نفهم السوق، ونقرأ التفاصيل،    .',
          color: '#DC2626', // Red
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: 'محترفة',
          desc: 'نعامل العميل كما يستحق، لا كما هو معتاد.',
          color: '#059669', // Emerald
        },
        {
          icon: <HeartHandshake className="w-6 h-6" />,
          title: 'ملتزمة',
          desc: 'نلتزم بما نقول، ونبني ثقة تدوم.',
          color: '#2563EB', // Blue
        },
      ]
  return (
    <>
      {/* Introduction Section */}
      <section className="p-[5%] bg-brand-cream relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className=" px-4 sm:px-6 lg:px-8">
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
                margin: '-100px',
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <div className="relative">
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 opacity-50"
                  style={{
                    borderColor: '#C8A45C',
                  }}
                />
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 opacity-50"
                  style={{
                    borderColor: '#0D9488',
                  }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Business Meeting"
                  className="rounded-lg shadow-2xl w-full object-cover h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] grayscale-0 hover:grayscale transition-all duration-700"
                  width={800}
                  height={500}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-8 relative inline-block"
                style={{
                  background: 'linear-gradient(90deg, #0A1628, #1a2d4a)',
                  color: '#C8A45C',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid rgba(200, 164, 92, 0.6)',
                }}
              >
                مقدمة
              </h2>

              <div className="space-y-6 text-md md:text-xl lg:text-xl 2xl:text-3xl text-white leading-relaxed bg-gradient-to-r from-[#74dddb8f] to-[#354ad1] p-6 rounded-lg shadow-lg border border-amber-400/30">
                <div className="flex items-start gap-4 mb-6">

                  <p className="flex-1">
                    في كي إي بي للتجارة، اخترنا أن نكتب تعريفنا بطريقة لا تشبه
                    أحدًا، لأننا ببساطة لا نعمل مثل أحد.
                  </p>
                </div>

                <p>
                  لسنا شركة تكرر ما يقوله الآخرون، ولا نستخدم العبارات التي
                  تُقال في كل موقع، ولا نبحث عن كلمات منمّقة بقدر ما نبحث عن
                  حقيقة تُقال كما هي.
                </p>
                <p
                  className="font-bold text-xl md:text-2xl lg:text-2xl 2xl:text-4xl pr-4"
                  style={{
                    color: '#ffff00',
                    borderRight: '4px solid #C8A45C',
                  }}
                >
                  نحن نعرّف أنفسنا بالطريقة التي نعمل بها:
                </p>
                <p>
                  بوضوح لا يختبئ خلف الكلمات، وبقوة تُرى في التنفيذ قبل أن تُقرأ
                  في السطور، وبمنهجية تشغيلية تجعل العميل يشعر أنه يتعامل مع
                  كيان يعرف ماذا يفعل، ولماذا يفعله، وكيف يفعله.
                </p>
                <p>
                  نحن كيان تجاري يعتمد على تشغيل حقيقي، ومعلومات دقيقة، ورؤية
                  واعية للسوق، وفهم عميق لديناميكية التجارة الدولية.
                </p>
                <p
                  className="italic"
                  style={{
                    color: '#eeeee0',
                  }}
                >
                  هذه الصفحة ليست مقدمة… هذه هوية مكتوبة بصدق، وبأسلوب يعكس
                  قيمتنا، وطريقتنا في العمل، وشخصيتنا التجارية التي لا تتكرر.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Personality Section - Converted to Light */}
      <section className="px-[5%] bg-white relative" dir={isRTL ? "rtl" : "ltr"}>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className=" px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Side Image */}
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
              className="lg:col-span-1 h-full min-h-[400px] relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/1.webp"
                alt="Professional Portrait"
                className="absolute inset-0 w-full h-full object-cover"
                width={800}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#b23d03d7] via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-2 text-center md:text-start">
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
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mb-12"
              >
                <h2
                  className="text-lg md:text-3xl lg:text-4xl 2xl:text-7xl   font-bold mb-4 inline-block"
                  style={{
                    background:
                      "linear-gradient(120deg, #0A1628 0%, #0D9488 60%, #1E293B 100%)",
                    color: "#E8D5A3",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(200, 164, 92, 0.6)",
                  }}
                >
                  شخصية العلامة التجارية
                </h2>
                <p
                  className="text-xl md:text-xl lg:text-2xl 2xl:text-4xl font-semibold mt-2 w-fit"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(15, 23, 42, 0.04), rgba(15, 118, 110, 0.08))",
                    color: "#0F172A",
                    padding: "10px 18px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(148, 163, 184, 0.6)",
                  }}
                >
                  شخصيتنا ليست صوتًا مكتوبًا… بل أسلوب تعامل
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalityTraits.map((trait, index) => (
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
                    className="bg-brand-off-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group border border-brand-navy/5"
                    style={{
                      borderLeft: `4px solid ${trait.color}`,
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: `${trait.color}20`,
                          color: trait.color,
                        }}
                      >
                        {trait.icon}
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-bold text-brand-navy">
                        {trait.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-xl lg:text-xl 2xl:text-3xl text-brand-dark/70">{trait.desc}</p>
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
