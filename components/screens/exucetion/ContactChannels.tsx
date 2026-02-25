import {
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  UserCheckIcon,
} from 'lucide-react'
export function ContactChannels() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Side */}
        <div className="lg:w-1/2 h-96 lg:h-auto relative min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl md:text-5xl font-bold text-center drop-shadow-lg bg-violet-900/70 text-violet-100 border-2 border-violet-300 rounded-xl px-6 py-3">
              قنوات الاتصال الرسمية
            </h2>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 pt-[5%] pb-[5%] pl-[2%] pr-[5%] bg-gray-50 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="flex items-start gap-6 group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="bg-[#C9A84C] p-4 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                  رقم مخصص للتواصل التجاري
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  خط مباشر لخدمة العملاء والشركاء التجاريين
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="bg-[#C9A84C] p-4 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform">
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                  بريد إلكتروني رسمي للطلبات
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  لإرسال المستندات وطلبات عروض الأسعار
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="bg-[#C9A84C] p-4 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                  واتساب أعمال للمتابعة السريعة
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  تحديثات فورية لحالة الشحنات والطلبات العاجلة
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="bg-[#C9A84C] p-4 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform">
                <UserCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                  مدير حساب مخصص لكبار العملاء
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  نقطة اتصال واحدة لضمان تجربة سلسة ومخصصة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
