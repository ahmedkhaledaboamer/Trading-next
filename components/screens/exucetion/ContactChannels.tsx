import {
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  UserCheckIcon,
} from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server';

const channelIcons = [
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  UserCheckIcon,
] as const

export async function ContactChannels() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("execution.contactChannels");
  const channels = t.raw("channels") as { title: string; desc: string }[];
  return (
    <section className="relative bg-white overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
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
              {t("imageTitle")}
            </h2>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 pt-[5%] pb-[5%] pl-[2%] pr-[5%] bg-gray-50 flex flex-col justify-center">
          <div className="space-y-8">
            {channels.map((channel, index) => {
              const Icon = channelIcons[index]
              return (
                <div
                  key={index}
                  className="flex items-start gap-6 group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="bg-[#C9A84C] p-4 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      {channel.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
