import { cn } from "@/utils/cn";
import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";

const networkBenefits = [
  "تنوع مصادر التوريد",
  "حماية من اضطرابات السوق",
  "توفير بدائل فورية",
  "قوة تفاوضية أعلى في الأسعار والكميات",
];

const supplyRegions = [
  "شرق آسيا",
  "أوروبا",
  "الشرق الأوسط",
  "أمريكا الشمالية",
  "أسواق ناشئة ذات فرص عالية",
];

export default async function SuppliersNetworkSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className="relative  w-full "
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/9.webp"
          alt="شبكة مورّدين عالمية في الموانئ البحرية"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="container py-[5%]">
        <div className="  flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-3">
            <h2
              className="font-bold text-white leading-tight text-2xl md:text-6xl"
            >
              شبكة الموردين العالمية
            </h2>
            <p
              className="text-white/80 text-base md:text-2xl"
            >
              شبكة توريد تمتد عبر قارات متعددة تمنح الشركة قوة في الوصول،
              الاختيار، وإدارة المخاطر.
            </p>
          </header>

          {/* Glass cards row */}
          <div className="mx-auto grid w-full  grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits card */}
            <article
              className={cn(
                "rounded-3xl border border-white/15 bg-white/10",
                "backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
              )}
            >
              <div className="p-6 md:p-7 lg:p-8 flex flex-col gap-4">
                <h3
                  className="font-bold text-white border-b border-white/15 pb-3 mb-1 flex items-center justify-between gap-3 text-base md:text-2xl"
                >
                  <span>مزايا الشبكة</span>
                  <Check
                    className="text-primary"
                    style={{ width: "1.3rem", height: "1.3rem" }}
                    strokeWidth={2.2}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {networkBenefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/90 text-base md:text-xl"
                    >
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Regions card */}
            <article
              className={cn(
                "rounded-3xl border border-white/15 bg-white/10",
                "backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
              )}
            >
              <div className="p-6 md:p-7 lg:p-8 flex flex-col gap-4">
                <h3
                  className="font-bold text-white border-b border-white/15 pb-3 mb-1 flex items-center justify-between gap-3 text-base md:text-2xl"
                >
                  <span>مناطق التوريد الرئيسية</span>
                  <MapPin
                    className="text-primary"
                    style={{ width: "1.3rem", height: "1.3rem" }}
                    strokeWidth={2.2}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {supplyRegions.map((region) => (
                    <li
                      key={region}
                      className="flex items-start gap-2 text-white/90 text-base md:text-xl"
                    >
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{region}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}


