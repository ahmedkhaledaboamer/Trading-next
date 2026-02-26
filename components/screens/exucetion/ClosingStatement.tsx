import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { getLocale } from 'next-intl/server';
export async function ClosingStatement() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  return (
    <section className="relative p-[5%] overflow-hidden flex items-center justify-center text-center" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-1 bg-[#C9A84C]" />
        </div>

        <h2 className="text-xl md:text-2xl xl:text-4xl 2xl:text-5xl font-bold text-fuchsia-100 mb-8 leading-tight bg-fuchsia-900/60 border-2 border-fuchsia-300 rounded-xl px-8 py-4">
          كل منصب داخل المنظومة له دور واضح يخدمك أنت
        </h2>

        <p className="text-base md:text-xl text-slate-200 mb-12 leading-relaxed bg-slate-800/60 border-2 border-slate-400 rounded-lg px-8 py-4">
          نحن نعمل كفريق واحد لضمان أن طلبك يتحرك بسرعة، ودقة، وبأعلى مستوى من
          الاحتراف.
          <br />
          نقدّر وقتك، نحترم احتياجاتك، ونضع نجاحك في مقدمة أولوياتنا.
        </p>

        <Link href="tel:+0000000000" className="group bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#b08d35] transition-all flex items-center gap-3 mx-auto w-fit">
          <span>تواصل معنا الآن</span>
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
