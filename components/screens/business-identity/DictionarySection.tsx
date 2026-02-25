import { cn } from "@/utils/cn";

const entries = [
  { term: "التوريد", def: "وصول في الوقت، لا وصول وخلاص." },
  { term: "العميل", def: "شريك قرار، لا رقم في النظام." },
  { term: "الجودة", def: "نتيجة تُقاس، لا كلمة تُقال." },
  { term: "الالتزام", def: "موعد ثابت، لا احتمال." },
  { term: "التسويق", def: "انطباع يبقى، لا إعلان يمر." },
  { term: "المصداقية", def: "أسلوب عمل، لا شعار." },
  { term: "الخدمة", def: "تجربة كاملة، لا خطوة منفصلة." },
  { term: "النجاح", def: "نتيجة مشتركة، لا إنجاز فردي." },
];

export default function DictionarySection() {
  return (
    <section className="w-full bg-white">
      <div className="p-[5%] flex flex-col gap-8">
        <header className="flex flex-col gap-3">
          <h2
            className="font-bold text-secondary"
            style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)" }}
          >
            قاموس كي إي بي
          </h2>
          <p className="text-secondary/70">
            هذا القاموس ليس كلمات… بل فلسفة عمل.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entries.map((entry) => (
            <div
              key={entry.term}
              className={cn(
                "rounded-2xl border border-primary/20 bg-[#f7f3eb]",
                "p-5 flex flex-col gap-2"
              )}
            >
              <span className="text-primary font-bold text-base">
                {entry.term}
              </span>
              <p className="text-secondary/75 text-sm leading-relaxed">
                {entry.def}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}