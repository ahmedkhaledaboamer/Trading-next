 "use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type Domain = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const domains: Domain[] = [
  {
    id: "import",
    title: "منظومة الاستيراد الدولي",
    description:
      "ارتباط مباشر بالأسواق العالمية يضمن منتجات عالية الجودة ووصولاً ثابتاً بإجراءات دولية موثوقة.",
    image: "/images/15.webp",
  },
  {
    id: "export",
    title: "منظومة التصدير والتوسع الخارجي",
    description:
      "مسارات تجارية تفتح أبواب التسويق الإقليمي والدولي أمام شركائنا في أسواق مختارة بعناية.",
    image: "/images/16.webp",
  },
  {
    id: "home-appliances",
    title: "مركز الأجهزة المنزلية والكهربية",
    description:
      "حلول متكاملة للأجهزة المنزلية والابتكارات من الأجهزة الكبرى إلى المستلزمات الدقيقة.",
    image: "/images/17.webp",
  },
  {
    id: "electronics",
    title: "مركز الأجهزة الإلكترونية والتقنية",
    description:
      "أجهزة إلكترونية متقدمة، شاشات، وحلول تقنية مصممة لتخدم مختلف القطاعات التجارية.",
      image: "/images/18.webp",
    },
  {
    id: "mobiles",
    title: "مركز الهواتف الذكية والإكسسوارات",
    description:
      "أحدث الإصدارات العالمية من الهواتف الذكية مع منظومة توزيع مرنة تغطي قنوات متعددة.",
      image: "/images/19.webp",
    },
  {
    id: "gaming",
    title: "مركز الألعاب والترفيه الرقمي",
    description:
      "منتجات ألعاب، كونسولات، وإكسسوارات موجهة لقطاع الترفيه الرقمي المتنامي.",
      image: "/images/20.webp",
    },
  {
    id: "photo-video",
    title: "مركز التصوير الفوتوغرافي والسينمائي",
    description:
      "معدات تصوير احترافية، عدسات، وإكسسوارات تدعم صناعة المحتوى بجودة عالية.",
      image: "/images/21.webp",
    },
  {
    id: "networks",
    title: "مركز الشبكات والاتصالات",
    description:
      "حلول شبكات متكاملة، أجهزة اتصال، وبنى تحتية تدعم استمرارية الأعمال بكفاءة.",
      image: "/images/22.webp",
    },
];

function DomainCard({ domain }: { domain: Domain }) {
  return (
    <div className="group p-[2%] bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 flex flex-row h-full">
      {/* Image */}
      <div className="relative rounded-2xl w-1/2 min-w-[200px] h-[200px] xl:h-[400px] flex-shrink-0 overflow-hidden">
        <Image
          src={domain.image}
          alt={domain.title}
          fill
          className="object-cover shadow-lg bg-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col justify-center text-right">
        <h3 className="text-[clamp(1.5rem,2.5vw,2.3rem)] font-bold text-secondary mb-2">
          {domain.title}
        </h3>
        <p className="text-[clamp(0.95rem,1.4vw,1.2rem)] text-secondary/80 leading-relaxed line-clamp-3 md:line-clamp-4">
          {domain.description}
        </p>
      </div>
    </div>
  );
}

export default function CommercialDomainsSection() {
  return (
    <section className="w-full bg-gray-50  " dir="rtl">
      <div className="p-[5%]">
        {/* Header */}
        <header className="flex flex-col items-start text-right gap-3 mb-10 md:mb-12">
          <h2
            className="font-bold text-secondary leading-tight"
            style={{ fontSize: "clamp(1.9rem, 2.6vw, 2.7rem)" }}
          >
            مجالات النفوذ التجاري
          </h2>
          <p
            className="text-secondary/80  "
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
          >
            كل مجال هنا يمثل وحدة قوة داخل كيان الشركة، صُممت لتخدم احتياجات
            السوق وتفتح قنوات نفوذ جديدة.
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
            {domains.map((domain) => (
              <SwiperSlide key={`row1-${domain.id}`} className="p-2">
                <DomainCard domain={domain} />
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
            {[...domains].reverse().map((domain) => (
              <SwiperSlide key={`row2-${domain.id}`} className="p-2">
                <DomainCard domain={domain} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
