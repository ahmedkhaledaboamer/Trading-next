'use client'
 import { motion } from 'framer-motion'
import { Target, Eye, Zap, Shield, Award, HeartHandshake } from 'lucide-react'
export function BrandIntro() {
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
          desc: 'نفهم السوق، ونقرأ التفاصيل، ونتحرك بثقة.',
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
      <section className="p-[5%] bg-brand-cream relative overflow-hidden">
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
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Business Meeting"
                  className="rounded-lg shadow-2xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
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
                }}
              >
                مقدمة
              </h2>

              <div className="space-y-6 text-lg text-brand-dark/80 leading-relaxed">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=200"
                    alt="Globe"
                    className="w-24 h-24 rounded-lg object-cover shadow-md border-2 border-brand-gold/30"
                  />
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
                  className="font-bold text-xl pr-4"
                  style={{
                    color: '#0A1628',
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
                    color: '#0D9488',
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
      <section className="px-[5%] bg-white relative">
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
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Professional Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 right-8 left-8">
                <h3 className="text-3xl font-bold text-brand-navy mb-2">
                  شخصية فريدة
                </h3>
                <p
                  className="font-medium"
                  style={{
                    color: '#D97706',
                  }}
                >
                  تعكس قيمنا في كل تفصيل
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-2">
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
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                  شخصية العلامة التجارية
                </h2>
                <p
                  className="text-xl font-bold"
                  style={{
                    background: 'linear-gradient(90deg, #C8A45C, #D97706)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: `${trait.color}20`,
                          color: trait.color,
                        }}
                      >
                        {trait.icon}
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy">
                        {trait.title}
                      </h3>
                    </div>
                    <p className="text-brand-dark/70">{trait.desc}</p>
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
