import {
  FileTextIcon,
  SaveIcon,
  ActivityIcon,
  ArchiveIcon,
  FileBarChartIcon,
} from 'lucide-react'
import { getLocale } from 'next-intl/server';
const featureBgColors = [
  'bg-emerald-600 border-emerald-400',
  'bg-sky-600 border-sky-400',
  'bg-fuchsia-600 border-fuchsia-400',
  'bg-orange-600 border-orange-400',
  'bg-lime-600 border-lime-400',
]

const features = [
  {
    icon: FileTextIcon,
    text: 'تسجيل الطلب إلكترونياً',
  },
  {
    icon: SaveIcon,
    text: 'حفظ المستندات بشكل آمن',
  },
  {
    icon: ActivityIcon,
    text: 'متابعة مراحل التنفيذ لحظياً',
  },
  {
    icon: ArchiveIcon,
    text: 'أرشفة الفواتير والشحنات',
  },
  {
    icon: FileBarChartIcon,
    text: 'تقارير حالة الطلب الدورية',
  },
]
export async function DocumentationSystem() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  return (
    <section className="bg-white text-gray-700 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex flex-col lg:flex-row">
        {/* Content Side */}
        <div className="lg:w-1/2 pt-[5%] pr-[2%] pb-[5%] pl-[5%] flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center lg:text-left text-slate-800 bg-slate-200 border-2 border-slate-500 rounded-xl px-6 py-4 w-fit mx-auto lg:mx-0">نظام التوثيق والمتابعة</h2>
          <p className="text-blue-900 mb-12 text-l md:text-lg text-center xl:text-start bg-blue-100 border-2 border-blue-400 rounded-lg px-6 py-4 w-fit">
            كل خطوة في العملية يتم توثيقها داخل نظام تشغيل إلكتروني متكامل يضمن
            الشفافية الكاملة.
          </p>

          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors border text-white ${featureBgColors[idx % featureBgColors.length]}`}
              >
                <div className="text-white">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="text-2xl font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:w-1/2 relative min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[#0A1628]/60" />
        </div>
      </div>
    </section>
  )
}
