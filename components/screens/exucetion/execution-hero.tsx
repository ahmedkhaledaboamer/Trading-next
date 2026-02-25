import ScrollIndicator from "./scroll-indicator";


export default async function ExecutionHero() {

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6 leading-tight border-4 border-amber-400 rounded-lg bg-amber-950/60 px-6 py-4 shadow-lg">
          كي إي بي للتجارة
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-sky-100 bg-sky-900/50 border-2 border-sky-400/80 rounded-xl px-6 py-3">
          آلية تنفيذ الاتصالات — منظومة اتصال واضحة تضمن تجربة محترفة
        </h2>

        <p className="text-lg md:text-xl text-emerald-100 leading-relaxed bg-emerald-900/40 border-2 border-emerald-500/60 rounded-lg px-6 py-4">
          نحن نؤمن أن نجاح العملية التجارية يبدأ من وضوح الأدوار، وسرعة
          الاستجابة، ودقة التنفيذ
        </p>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  )
}

