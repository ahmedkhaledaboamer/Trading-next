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
  TrendingUp,
} from 'lucide-react'
import Image from 'next/image'
export function BusinessUnits( {locale}: {locale: string} ) {
  const isRTL = locale === "ar";
  const units = [
    {
      id: 1,
      name: 'وحدة المخاطر التجارية',
      icon: <ShieldAlert />,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-500',
      desc: 'وحدة متخصصة في حماية أعمال العملاء من أي اضطرابات قد تؤثر على استقرار التوريد.',
      tasks: [
        'تحليل المخاطر في الأسواق',
        'تقييم استقرار الموردين',
        'مراقبة تقلبات الأسعار',
        'إدارة مخاطر النقل والشحن',
      ],
      value: [
        'ضمان استمرارية التوريد',
        'حماية رأس المال التجاري',
        'تقليل الخسائر التشغيلية',
      ],
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
    },
    {
      id: 2,
      name: 'وحدة التوسع الدولي',
      icon: <Globe />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      desc: 'وحدة استراتيجية تهدف إلى فتح أسواق جديدة لعملائنا وتوسيع نطاق نفوذهم التجاري.',
      tasks: [
        'دراسة الأسواق الدولية',
        'بناء شراكات جديدة',
        'فتح خطوط توريد جديدة',
        'دعم العملاء في التوسع',
      ],
      value: [
        'وصول لأسواق جديدة',
        'تنويع مصادر التوريد',
        'تعزيز القوة التنافسية',
      ],
      image:
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80',
    },
    {
      id: 3,
      name: 'وحدة التحول الرقمي',
      icon: <Monitor />,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-500',
      desc: 'تطوير البنية الرقمية لضمان سرعة، دقة، وشفافية في كل عملية تجارية.',
      tasks: [
        'رقمنة عمليات التوريد',
        'تطوير أنظمة تتبع الشحنات',
        'بناء لوحات تحكم لحظية',
        'استخدام الذكاء الاصطناعي',
      ],
      value: [
        'سرعة أعلى وشفافية أكبر',
        'تقليل الأخطاء البشرية',
        'تجربة تعامل احترافية',
      ],
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
    },
    {
      id: 4,
      name: 'وحدة الامتياز التجاري',
      icon: <Award />,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-500',
      desc: 'توسيع العلامات التجارية عبر منح الامتياز لشركاء محليين وإقليميين.',
      tasks: [
        'إعداد نماذج الامتياز',
        'اختيار شركاء الامتياز',
        'توفير التدريب والدعم',
        'مراقبة جودة الفروع',
      ],
      value: [
        'توسع أسرع ومخاطر أقل',
        'دعم تشغيلي كامل',
        'علامة تجارية جاهزة للنجاح',
      ],
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80',
    },
    {
      id: 5,
      name: 'وحدة التجارة الإلكترونية',
      icon: <ShoppingCart />,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-500',
      desc: 'إدارة وتطوير عمليات البيع الرقمي عبر المنصات الإلكترونية المختلفة.',
      tasks: [
        'إدارة المتاجر الإلكترونية',
        'تطوير حلول الدفع',
        'إدارة المخزون الرقمي',
        'حملات التسويق الإلكتروني',
      ],
      value: ['وصول أسرع للعملاء', 'زيادة المبيعات', 'تجربة شراء سلسة'],
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80',
    },
    {
      id: 6,
      name: 'وحدة الامتثال التجاري',
      icon: <FileCheck />,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-500',
      desc: 'ضمان التزام كل عمليات الشركة بالمعايير المحلية والدولية والقانونية.',
      tasks: [
        'مراجعة العقود التجارية',
        'مطابقة المنتجات للمعايير',
        'متابعة القوانين واللوائح',
        'إدارة الوثائق والشهادات',
      ],
      value: ['تعامل قانوني آمن', 'منتجات معتمدة', 'حماية من المخالفات'],
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
    },
    {
      id: 7,
      name: 'وحدة تطوير الموردين',
      icon: <Users />,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-500',
      desc: 'رفع جودة الموردين وتحسين أدائهم لضمان استقرار التوريد وجودته.',
      tasks: [
        'تقييم أداء الموردين',
        'تطوير خطط تحسين الجودة',
        'بناء علاقات طويلة المدى',
        'تدريب الموردين',
      ],
      value: [
        'جودة أعلى وأسعار أفضل',
        'استقرار أكبر في التوريد',
        'شراكات استراتيجية',
      ],
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
    },
    {
      id: 8,
      name: 'وحدة التحليل المالي',
      icon: <BarChart3 />,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-500',
      desc: 'تحليل البيانات المالية لدعم القرارات التجارية وضمان أفضل عائد.',
      tasks: [
        'تحليل تكاليف التوريد',
        'تقييم جدوى الأسواق',
        'دراسة الربحية والمخاطر',
        'تقارير مالية دقيقة',
      ],
      value: [
        'قرارات مبنية على أرقام',
        'تقليل المخاطر المالية',
        'رؤية واضحة للتكاليف',
      ],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    },
    {
      id: 9,
      name: 'وحدة خدمة العملاء',
      icon: <Headphones />,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-500',
      desc: 'وحدة مخصصة للعملاء الذين يحتاجون متابعة خاصة وتجربة تعامل راقية.',
      tasks: [
        'متابعة شخصية لكل عميل',
        'توفير مدير حساب خاص',
        'سرعة استجابة عالية',
        'حلول فورية للمشاكل',
      ],
      value: ['اهتمام أعلى', 'سرعة في الإنجاز', 'تجربة تعامل فاخرة'],
      image:
        'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&q=80',
    },
    {
      id: 10,
      name: 'وحدة إدارة العقود',
      icon: <FileText />,
      color: 'text-slate-600',
      bg: 'bg-slate-50',
      border: 'border-slate-500',
      desc: 'صياغة، مراجعة، وإدارة العقود لضمان حقوق العملاء والشركة.',
      tasks: [
        'صياغة العقود التجارية',
        'مراجعة البنود القانونية',
        'متابعة الالتزامات',
        'إدارة التجديدات',
      ],
      value: [
        'وضوح كامل في الاتفاقيات',
        'حماية قانونية',
        'التزام صارم بكل بند',
      ],
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
    },
    {
      id: 11,
      name: 'وحدة الجودة الشاملة',
      icon: <CheckCircle />,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-500',
      desc: 'مراقبة الجودة في كل مرحلة من مراحل التوريد والتسليم لضمان التميز.',
      tasks: [
        'فحص المنتجات قبل الشحن',
        'مراجعة الجودة بعد الوصول',
        'مراقبة أداء الموردين',
        'معالجة أي خلل تشغيلي',
      ],
      value: ['جودة ثابتة', 'منتجات موثوقة', 'تقليل الأخطاء والمشاكل'],
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80',
    },
    {
      id: 12,
      name: 'وحدة العلاقات الدولية',
      icon: <Handshake />,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-500',
      desc: 'بناء علاقات استراتيجية مع كيانات تجارية حول العالم لفتح آفاق جديدة.',
      tasks: [
        'التواصل مع الشركات العالمية',
        'بناء تحالفات تجارية',
        'حضور المعارض الدولية',
        'دعم توسع العملاء',
      ],
      value: ['فرص تجارية أكبر', 'وصول لأسواق جديدة', 'دعم دولي مستمر'],
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
    } 
  ]
  return (
    <section className="  bg-gradient-to-b from-white to-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      <div className=" p-[5%]">
        <div className="text-center mb-16">
          <span className="text-[#0E7490] font-bold tracking-wider uppercase text-sm bg-[#0E7490]/10 px-4 py-1 rounded-full">
            منظومة متكاملة
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#0A1628] mt-4 mb-6">
            وحداتنا المتخصصة
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-gray-600  ">
            وحدات استراتيجية متكاملة تعمل معًا لضمان نجاح عملائنا في كل خطوة من
            رحلتهم التجارية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="h-36 w-full relative overflow-hidden">
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
                    <div className="w-8 h-8">{unit.icon}</div>
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
                      مهام الوحدة:
                    </h4>
                    <ul className="space-y-2">
                      {unit.tasks.slice(0, 3).map((task, i) => (
                        <li
                          key={i}
                          className="flex items-start text-base md:text-lg xl:text-2xl text-gray-600"
                        >
                          <span
                            className={`w-2 h-2 rounded-full mt-2 ml-2 shrink-0 bg-gray-400 `}
                          />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-base md:text-lg xl:text-3xl text-gray-900 mb-2">
                      القيمة للعميل:
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
