import { cn } from "@/utils/cn";

const traits = [
  { label: "صريحة", desc: "لا نستخدم كلمات أكبر من الحقيقة." },
  { label: "هادئة", desc: "لا نبالغ، ولا نعد بما لا نستطيع." },
  { label: "عملية", desc: "نركز على التنفيذ قبل الكلام." },
  { label: "واعية", desc: "نفهم السوق، ونقرأ التفاصيل، ونتحرك بثقة." },
  { label: "محترفة", desc: "نعامل العميل كما يستحق، لا كما هو معتاد." },
];

export default function BrandPersonalitySection() {
  return (
    <section className="w-full bg-white">
      <div className="p-[5%] flex flex-col gap-8">
        <header className="flex flex-col gap-3">
          <h2
            className="font-bold text-secondary"
            style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)" }}
          >
            شخصية العلامة التجارية
          </h2>
          <p className="text-secondary/70">
            شخصيتنا ليست صوتًا مكتوبًا… بل أسلوب تعامل.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {traits.map((trait) => (
            <div
              key={trait.label}
              className={cn(
                "rounded-2xl border border-secondary/10 bg-[#f7f3eb]",
                "p-5 flex flex-col gap-2"
              )}
            >
              <span className="text-primary font-bold text-lg">
                {trait.label}
              </span>
              <p className="text-secondary/75 text-sm leading-relaxed">
                {trait.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}