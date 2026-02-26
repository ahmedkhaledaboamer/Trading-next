import { cn } from "@/utils/cn";
import {
  Activity,
  Cog,
  PackageSearch,
  Route,
  type LucideIcon,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

type RoomData = {
  id: string;
  number: string;
  title: string;
  points: string[];
  imageAlt: string;
};

const roomIcons: Record<string, LucideIcon> = {
  market: Activity,
  supply: Route,
  quality: PackageSearch,
  operations: Cog,
};

const roomImages: Record<string, string> = {
  market: "/images/32.webp",
  supply: "/images/33.webp",
  quality: "/images/34.webp",
  operations: "/images/35.webp",
};

export default async function OperationalLeadershipSection() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("home.operationalLeadership");
  const rooms = t.raw("rooms") as RoomData[];

  return (
    <section
      className="relative w-full bg-[#ffffff]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="p-[5%]">
        <div className="  flex flex-col  gap-10 md:gap-14">
          {/* Header */}
          <header className="text-center flex flex-col items-center gap-4">
            <h2
              className="inline-block font-bold text-[#004D40] leading-tight text-2xl md:text-2xl xl:text-4xl 2xl:text-6xl bg-[#E0F2F1] border border-[#80CBC4] rounded-2xl px-6 py-4"
            >
              {t("title")}
            </h2>
            <p
              className="inline-block text-[#004D40] text-base md:text-2xl bg-[#B2DFDB] border border-[#4DB6AC] rounded-full px-5 py-2"
            >
              {t("subtitle")}
            </p>
          </header>

          {/* Rooms grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {rooms.map((room) => {
              const Icon = roomIcons[room.id];
              const imageSrc = roomImages[room.id];
              return (
                <article
                  key={room.id}
                  className={cn(
                    "relative overflow-hidden rounded-3xl",
                    "shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                  )}
                >
                  {/* Background image */}
                  <div className="relative min-h-[260px] sm:min-h-[320px] lg:h-[480px]">
                    <Image
                      src={imageSrc}
                      alt={room.imageAlt}
                      fill
                      className="object-cover"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                    {/* Faded number */}
                    <span className="absolute top-4 left-4 text-white/30 font-extrabold select-none leading-none text-4xl sm:text-5xl md:text-6xl">
                      {room.number}
                    </span>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-7 lg:p-8 gap-3 z-10">
                      {/* Title + icon */}
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-bold text-white text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-4xl">
                          {room.title}
                        </h3>

                        <span className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary p-2 sm:p-2.5">
                          {Icon && (
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-secondary" strokeWidth={2} />
                          )}
                        </span>
                      </div>

                      {/* Bullet list */}
                      <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 border border-primary/50 rounded-xl bg-primary/20 p-3 sm:p-4">
                        {room.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-white text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
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