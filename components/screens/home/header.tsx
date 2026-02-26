import Button from "@/components/button";
import { cn } from "@/utils/cn";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Header() {
  const t = await getTranslations("header");
  const locale = await getLocale();
  const isRTL = locale === "ar";
  return (
    <header
      className={cn("relative flex h-svh w-full items-center justify-center")}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div
        className="relative z-20 text-white text-center flex flex-col items-center justify-center w-full  pt-20 md:px-20 xl:px-[5%] px-8"
        style={{
          gap: "clamp(1rem, 2vw, 4rem)",
        }}
      >
        <h1
          className="font-bold text-primary"
          style={{
            fontSize: "clamp(1.5rem, 2vw, 6rem)",
            lineHeight: "1.1",
          }}
        >
         كي إي بي للتجارة ذ.م.م
        </h1>
        <h2
          className="font-bold text-white"
          style={{
            fontSize: "clamp(1rem, 2vw, 7rem)",
            lineHeight: "1.2",
          }}
        >
         مركز القوة التجارية… ومنصة النفوذ في سلاسل التوريد العالمية
        </h2>
        <p className="p-4 bg-black/50 font-bold  border border-yellow-500 text-white rounded-2xl" style={{
            fontSize: "clamp(1rem, 1vw, 3rem)",
            
          }}>
        في عالم تتسارع فيه حركة التجارة وتشتد فيه المنافسة، يبرز كيانٌ يمتلك البصيرة، والرؤية، والقدرة على التنفيذ.
كي إي بي للتجارة ليست مجرد شركة… بل مركز تجاري سيادي يدير عمليات توريد وتوزيع تمتد عبر أسواق متعددة، ويُحكم السيطرة على مسارات التجارة من المصدر إلى العميل.

        </p>
        <p className="p-4 font-bold bg-black/50 border border-yellow-500 text-white rounded-2xl"style={{
            fontSize: "clamp(1rem, 1.5vw, 2.5rem)",
            
          }}>نصنع النفوذ عبر شبكات توريد عالمية، علاقات راسخة، وخبرة تنفيذية تمنح عملاءنا قدرة الوصول إلى منتجات عالية الجودة، بأسعار تنافسية، وبآليات تشغيل دقيقة.</p>
        <div
          className="flex items-center justify-center  flex-row"
          style={{
            gap: "clamp(1rem, 2vw, 2rem)",
          }}
        >
          <Button variant="primary" size="lg" className="font-extrabold">
           
مسارك التجاري
          </Button>
          <Button variant="secondary" size="lg" className="font-extrabold">
            {t("cta.exploreServices")}
          </Button>
        </div>
      </div>
    </header>
  );
}
