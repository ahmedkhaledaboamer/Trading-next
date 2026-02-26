import { PostDeliveryProgress } from './PostDeliveryProgress'
import { getLocale, getTranslations } from 'next-intl/server';

export async function PostDelivery() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("execution.postDelivery");
  return (
    <section className="relative py-24 overflow-hidden bg-black/70" dir={isRTL ? "rtl" : "ltr"}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="mx-auto">
        <div className="relative flex flex-col-reverse lg:flex-row gap-16 items-center p-[5%] z-10">
          {/* Image Side */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                alt="Customer Satisfaction"
                className="w-full h-auto object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A84C]/20 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl md:text-4xl font-bold text-lime-100 mb-6 text-center lg:text-right bg-lime-900/60 border-2 border-lime-400 rounded-xl px-6 py-4 w-fit mx-auto lg:mx-0">
              {t("title")}
            </h2>
            <p className="text-amber-200 mb-4 text-base md:text-lg text-center lg:text-right bg-amber-950/50 border-2 border-amber-500/70 rounded-lg px-6 py-3 w-fit mx-auto lg:mx-0">
              {t("p1")}
            </p>
            <p className="text-sky-100 mb-10 text-base md:text-lg leading-relaxed text-center lg:text-right bg-sky-900/40 border-2 border-sky-400/70 rounded-lg px-6 py-4 w-fit mx-auto lg:mx-0">
              {t("p2")}
            </p>

            <PostDeliveryProgress />
          </div>

        </div>
      </div>
    </section>
  )
}
