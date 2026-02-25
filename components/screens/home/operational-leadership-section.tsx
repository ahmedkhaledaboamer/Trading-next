import { cn } from "@/utils/cn";
import {
  Activity,
  Cog,
  PackageSearch,
  Route,
  type LucideIcon,
} from "lucide-react";
import { getLocale } from "next-intl/server";
import Image from "next/image";

type Room = {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  points: string[];
  imageSrc: string;
  imageAlt: string;
};

const rooms: Room[] = [
  {
    id: "market",
    number: "01",
    title: "غرفة مراقبة السوق",
    icon: Activity,
    points: [
      "تحليل لحظي لحركة الأسعار",
      "متابعة اتجاهات الطلب",
      "تقييم المخاطر التجارية",
    ],
    imageSrc: "/images/32.webp",
    imageAlt: "شاشة تعرض حركة الأسعار في الأسواق المالية",
  },
  {
    id: "supply",
    number: "02",
    title: "غرفة التحكم في التوريد",
    icon: Route,
    points: [
      "إدارة خطوط التوريد الدولية",
      "تتبع الشحنات في الوقت الفعلي",
      "ضمان ثبات الإمداد",
    ],
    imageSrc: "/images/33.webp",
    imageAlt: "ممرات شحن وموانئ لوجستية",
  },
  {
    id: "quality",
    number: "03",
    title: "غرفة الجودة والامتثال",
    icon: PackageSearch,
    points: [
      "فحص المنتجات قبل الشحن",
      "مراجعة شهادات الجودة",
      "ضمان مطابقة المواصفات الدولية",
    ],
    imageSrc: "/images/34.webp",
    imageAlt: "مكونات إلكترونية تخضع للفحص والجودة",
  },
  {
    id: "operations",
    number: "04",
    title: "غرفة العمليات اللوجستية",
    icon: Cog,
    points: [
      "إدارة النقل الداخلي والخارجي",
      "تنسيق عمليات التسليم",
      "رفع كفاءة الحركة اللوجستية",
    ],
    imageSrc: "/images/35.webp",
    imageAlt: "أوناش وساحات شحن في ميناء تجاري",
  },
];

export default async function OperationalLeadershipSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className="relative w-full bg-[#ffffff]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="p-[5%]">
        <div className="  flex flex-col gap-10 md:gap-14">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="font-bold text-secondary leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.6rem)" }}
            >
              منظومة القيادة التشغيلية
            </h2>
            <p
              className="text-secondary/80"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
            >
              هيكل قيادة متكامل يضمن السيطرة الكاملة على حركة التجارة عبر أربع
              غرف تحكم رئيسية.
            </p>
          </header>

          {/* Rooms grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {rooms.map((room) => {
              const Icon = room.icon;
              return (
                <article
                  key={room.id}
                  className={cn(
                    "relative overflow-hidden rounded-3xl",
                    "shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                  )}
                >
                  {/* Background image */}
                  <div className="relative h-64 md:h-72 lg:h-80">
                    <Image
                      src={room.imageSrc}
                      alt={room.imageAlt}
                      fill
                      className="object-cover"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                    {/* Faded number */}
                    <span
                      className="absolute top-4 text-white/30 font-extrabold select-none leading-none"
                      style={{ fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)" }}
                    >
                      {room.number}
                    </span>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7 lg:p-8 gap-3">
                      {/* Title + icon */}
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className="font-bold text-white"
                          style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)" }}
                        >
                          {room.title}
                        </h3>
                        <span className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary p-2.5">
                          <Icon
                            className="text-secondary"
                            style={{
                              width: "clamp(1.2rem, 1.4vw, 1.4rem)",
                              height: "clamp(1.2rem, 1.4vw, 1.4rem)",
                            }}
                            strokeWidth={2}
                          />
                        </span>
                      </div>

                      {/* Bullet list */}
                      <ul className="space-y-1.5 md:space-y-2">
                        {room.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-white/90"
                            style={{
                              fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)",
                            }}
                          >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}