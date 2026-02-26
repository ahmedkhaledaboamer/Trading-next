import ScrollIndicator from "./scroll-indicator";
import { getTranslations } from "next-intl/server";

export default async function ExecutionHero() {
  const t = await getTranslations("execution.hero");

  return (
    <section className="relative flex items-center justify-center px-[5%] py-[2%]  h-[150vh] md:h-screen  w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4    z-10">
        <h1 className="text-lg md:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-amber-100 mb-6 leading-tight border-4 border-amber-400 rounded-lg bg-amber-950/60 px-6 py-4 shadow-lg">
          {t("title")}
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-sky-100 bg-sky-900/50 border-2 border-sky-400/80 rounded-xl px-6 py-3">
          {t("subtitle")}
        </h2>

        <p className="text-lg md:text-xl text-emerald-100 leading-relaxed bg-emerald-900/40 border-2 border-emerald-500/60 rounded-lg px-6 py-4">
          {t("p1")}
        </p>
        <p className="text-lg md:text-xl xl:text-lg 2xl:text-4xl mt-4   text-white leading-relaxed bg-primary/20 border-2 border-primary/60 rounded-lg px-6 py-4">
          {t("p2")}
        </p>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  )
}

