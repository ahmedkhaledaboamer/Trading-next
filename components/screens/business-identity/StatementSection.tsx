const statements = [
    "نلتزم قبل أن نعد.",
    "نُظهر قبل أن نتكلم.",
    "ننفّذ قبل أن نروّج.",
    "ونعتبر العميل شريكًا في القرار قبل أن يكون متعاملًا.",
  ];
  
  export default function StatementSection() {
    return (
      <section className="w-full bg-primary/10">
        <div className="p-[5%] flex flex-col gap-8 max-w-3xl">
          <header className="flex flex-col gap-3">
            <h2
              className="font-bold text-secondary"
              style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)" }}
            >
              بيان كي إي بي للتجارة
            </h2>
            <p className="text-secondary/70">
              هذا البيان ليس صياغة رسمية… بل إعلان صريح لطريقة عملنا.
            </p>
          </header>
  
          <ul className="flex flex-col gap-4">
            {statements.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 text-secondary font-semibold"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                {s}
              </li>
            ))}
          </ul>
  
          <p className="text-secondary/70 leading-relaxed">
            نحن لا نبيع منتجات فقط… نحن نبني ثقة، ونصنع علاقة، ونقدّم تجربة
            تعامل تُثبت نفسها مع الوقت.
          </p>
        </div>
      </section>
    );
  }