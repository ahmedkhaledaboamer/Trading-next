import {
  UserIcon,
  BriefcaseIcon,
  SettingsIcon,
  ShieldIcon,
} from 'lucide-react'

const stepBgColors = [
  'bg-gradient-to-br from-emerald-500 via-emerald-500/90 to-white border-emerald-400/70',
  'bg-gradient-to-br from-sky-500 via-sky-500/50 to-white border-sky-400/70',
  'bg-gradient-to-br from-fuchsia-500 via-fuchsia-500/50 to-white border-fuchsia-400/70',
  'bg-gradient-to-br from-orange-500 via-orange-500/50 to-white border-orange-400/70',
]
export function EscalationPath() {
  return (
    <section className="p-[5%] bg-gray-50">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
                alt="Professional Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-4xl font-bold text-rose-100 mb-2 bg-rose-900/60 border-2 border-rose-300 rounded-lg px-4 py-2 w-fit ">
                  آلية التصعيد
                </h3>
                <p className="text-amber-100 text-base md:text-lg bg-amber-900/50 border border-amber-400/80 rounded-lg px-4 py-2 w-fit ">
                  مسار واضح لضمان حل المشكلات بسرعة
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-[#C9A84C] rounded-2xl hidden lg:block" />
          </div>

          {/* Steps Side */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 relative">

              {/* Step 1 */}
              <div className={`relative flex items-center gap-6 p-6 rounded-xl shadow-sm border-2 z-10 hover:shadow-md transition-shadow ${stepBgColors[0]}`}>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0 border-2 border-blue-100">
                  <UserIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                    1. منسّق الخدمة
                  </h4>
                  <p className="text-gray-700 text-base md:text-lg">
                    نقطة التواصل الأولى لأي ملاحظة
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`relative flex items-center gap-6 p-6 rounded-xl shadow-sm border-2 z-10 hover:shadow-md transition-shadow ml-8 ${stepBgColors[1]}`}>
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center shrink-0 border-2 border-indigo-100">
                  <BriefcaseIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                    2. مدير الحساب
                  </h4>
                  <p className="text-gray-700 text-base md:text-lg">
                    للمتابعة وحل التحديات التشغيلية
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`relative flex items-center gap-6 p-6 rounded-xl shadow-sm border-2 z-10 hover:shadow-md transition-shadow ml-16 ${stepBgColors[2]}`}>
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center shrink-0 border-2 border-purple-100">
                  <SettingsIcon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                    3. مدير التشغيل
                  </h4>
                  <p className="text-gray-700 text-base md:text-lg">
                    للقرارات الإدارية والفنية المتقدمة
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`relative flex items-center gap-6 p-6 rounded-xl shadow-sm border-2 z-10 hover:shadow-md transition-shadow ml-24 border-r-4 border-r-[#C9A84C] ${stepBgColors[3]}`}>
                <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center shrink-0 border-2 border-[#4c91c9]">
                  <ShieldIcon className="w-8 h-8 text-sky-500" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                    4. الإدارة العليا
                  </h4>
                  <p className="text-gray-700 text-base md:text-lg">
                    الضمان النهائي لجودة الخدمة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
