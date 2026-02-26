import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

export default async function InternationalExpansionSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("home.internationalExpansion");
  const tasks = t.raw("tasks") as string[];
  const results = t.raw("results") as string[];

  return (
    <section
      className="py-20 md:py-28 bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className=" p-[5%]">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2
            className="inline-block font-bold text-sky-900 leading-tight text-2xl md:text-xl xl:text-4xl 2xl:text-6xl bg-sky-100 border border-sky-300 rounded-2xl px-6 py-4"
          >
            {t("title")}
          </h2>
          <p
            className="inline-block text-teal-900 text-base md:text-2xl bg-teal-50 border border-teal-200 rounded-full px-5 py-2"
          >
            {t("subtitle")}
          </p>
        </header>

        {/* Two main cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {/* Tasks card */}
          <div className="group relative overflow-hidden shadow-2xl rounded-3xl bg-transparent pb-10">
            <div className="h-80 relative overflow-hidden">
              <Image
                src="/images/30.webp"
                alt={t("imageAltTasks")}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A2E]/60 group-hover:bg-[#1A1A2E]/40 transition-colors" />
            </div>

            <div className="bg-[#F8F6F1] p-8 md:p-10 relative z-10 -mt-10 mx-4 md:mx-6 shadow-lg rounded-3xl">
              <h3 className="font-bold text-orange-700 border border-orange-300 bg-orange-50 rounded-2xl px-6 py-4 text-xl md:text-3xl xl:text-5xl mb-6 md:mb-8 tracking-wide border-b border-[#C9A84C]/20 pb-4">
                {t("tasksTitle")}
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {tasks.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 md:gap-4 text-[#4A4A5A] text-base md:text-xl xl:text-3xl"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results card */}
          <div className="group relative overflow-hidden shadow-2xl rounded-3xl bg-transparent pb-10">
            <div className="h-80  relative overflow-hidden">
              <Image
                src="/images/31.webp"
                alt={t("imageAltResults")}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A2E]/60 group-hover:bg-[#1A1A2E]/40 transition-colors" />
            </div>

            <div className="bg-[#F8F6F1] p-8 md:p-10 relative z-10 -mt-10 mx-4 md:mx-6 shadow-lg rounded-3xl">
              <h3 className="font-bold text-orange-700 border border-orange-300 bg-orange-50 rounded-2xl px-6 py-4 text-xl md:text-3xl xl:text-5xl mb-6 md:mb-8 tracking-wide border-b border-[#C9A84C]/20 pb-4">
                {t("resultsTitle")}
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {results.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 md:gap-4 text-[#4A4A5A] text-base md:text-xl xl:text-3xl"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
