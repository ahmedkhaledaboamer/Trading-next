"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

import "swiper/css";

type DomainData = { id: string; title: string; description: string };
const domainImages = ["/images/15.webp", "/images/16.webp", "/images/17.webp", "/images/18.webp", "/images/19.webp", "/images/20.webp", "/images/21.webp", "/images/22.webp"];

function DomainCard({ domain, image }: { domain: DomainData; image: string }) {
  return (
    <div className="group p-[2%] bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 flex flex-col md:flex-row h-full">
      {/* Image */}
      <div className="relative rounded-2xl w-full md:w-1/2 min-w-[200px] h-[200px] xl:h-[200px] 2xl:h-[400px] flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={domain.title}
          fill
          className="object-cover shadow-lg bg-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col justify-center text-right">
        <h3 className="text-sm md:text-md xl:text-sm 2xl:text-3xl font-bold text-orange-700 border border-orange-300 bg-orange-50 rounded-2xl px-6 py-4 mb-2">
          {domain.title}
        </h3>
        <p className=" text-center md:text-start text-sm md:text-md xl:text-sm 2xl:text-2xl text-secondary/80 leading-relaxed line-clamp-3 md:line-clamp-4 border-cyan-700 border rounded-2xl px-6 py-4">
          {domain.description}
        </p>
      </div>
    </div>
  );
}

export default function CommercialDomainsSection() {
  const t = useTranslations("home.commercialDomains");
  const domains = t.raw("domains") as DomainData[];

  return (
    <section className="w-full bg-gray-50  " dir="rtl">
      <div className="p-[5%]">
        {/* Header */}
        <header className="flex flex-col items-center md:items-start text-right gap-3 mb-10 md:mb-12">
          <h2
            className="inline-block font-bold text-cyan-900 leading-tight text-2xl md:text-2xl xl:text-4xl 2xl:text-6xl bg-cyan-100 border border-cyan-300 rounded-2xl px-6 py-4"
          >
            {t("title")}
          </h2>
          <p
            className="inline-block text-emerald-900 text-base md:text-2xl bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 mt-1"
          >
            {t("subtitle")}
          </p>
        </header>

        {/* Slider */}
        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            loop
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={8000}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
              1366: { slidesPerView: 2 },
              1600: { slidesPerView: 3 },
              1920: { slidesPerView: 3 },
            }}
          >
            {domains.map((domain, i) => (
              <SwiperSlide key={`row1-${domain.id}`} className="p-2">
                <DomainCard domain={domain} image={domainImages[i]} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 2 - Right to Left */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            loop
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            speed={8000}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.5 },
              1280: { slidesPerView: 2 },
              1600: { slidesPerView: 2.5 },
              1920: { slidesPerView: 3 },
            }}
          >
            {[...domains].reverse().map((domain, i) => (
              <SwiperSlide key={`row2-${domain.id}`} className="p-2">
                <DomainCard domain={domain} image={domainImages[domains.length - 1 - i]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
