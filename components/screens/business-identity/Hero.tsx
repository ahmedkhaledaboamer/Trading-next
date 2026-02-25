export default function HeroSection() {
    return (
      <section className="w-full bg-secondary text-white">
        <div className="p-[5%] flex flex-col gap-6 max-w-4xl">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">
            الهوية التجارية
          </p>
          <h1
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            في كي إي بي للتجارة، اخترنا أن نكتب تعريفنا بطريقة لا تشبه أحدًا
          </h1>
          <p
            className="text-white/75 leading-relaxed max-w-2xl"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)" }}
          >
            لسنا شركة تكرر ما يقوله الآخرون. نحن نعرّف أنفسنا بالطريقة التي
            نعمل بها: بوضوح لا يختبئ خلف الكلمات، وبقوة تُرى في التنفيذ.
          </p>
          <p
            className="text-white/60 italic border-r-4 border-primary pr-4"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}
          >
            هذه الصفحة ليست مقدمة… هذه هوية مكتوبة بصدق.
          </p>
        </div>
      </section>
    );
  }