'use client'

import {
  Ship,
  Globe,
  Anchor,
  Plane,
  FileCheck,
  CreditCard,
  Wallet,
  Smartphone,
  Monitor,
  Laptop,
  Printer,
  MonitorSmartphone,
  Server,
  Code,
  AppWindow,
  Radio,
  Cable,
  Cpu,
  CircuitBoard,
  Speaker,
  Camera,
  CameraIcon,
  Film,
  Gamepad2,
  Joystick,
  Phone,
  Headphones,
  Refrigerator,
  CookingPot,
  Watch,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
     import { CTASection } from "@/components/screens/services/CTASection";
import { HeroSection } from "@/components/screens/business-identity/HeroSection";
import { FilterBar, ServiceSection } from "@/components/screens/services/ServiceSection";
import { ServiceCard } from "@/components/screens/services/ServiceCard";
import { useState } from "react";

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const sections = [
    {
      title: 'التجارة والخدمات اللوجستية',
      subtitle: 'حلول استيراد وتصدير متكاملة تربطك بالأسواق العالمية',
      bgColor: 'bg-white',
      accentColor: '#2563eb',
      services: [
        {
          title: 'الاستيراد الدولي',
          description: 'إدارة عمليات الاستيراد',
          icon: Ship,
          image:
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'اختيار الموردين',
            'فحص البضائع',
            'شحن بحري وجوي',
            'تأمين الشحنات',
          ],
        },
        {
          title: 'التصدير الدولي',
          description: 'تصدير للأسواق العالمية',
          icon: Globe,
          image:
            'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'تجهيز الشحنات',
            'توثيق المستندات',
            'شحن دولي',
            'متابعة التسليم',
          ],
        },
        {
          title: 'الشحن البحري',
          description: 'حلول شحن موثوقة',
          icon: Anchor,
          image:
            'https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'حاويات كاملة FCL',
            'شحن جزئي LCL',
            'تتبع الشحنات',
            'تأمين بحري',
          ],
        },
        {
          title: 'الشحن الجوي',
          description: 'سرعة عالمية في النقل',
          icon: Plane,
          image:
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['شحن سريع', 'شحن حساس', 'تخزين مؤقت', 'توصيل للمستودعات'],
        },
        {
          title: 'التخليص الجمركي',
          description: 'عبور سريع وآمن',
          icon: FileCheck,
          image:
            'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'تجهيز المستندات',
            'دفع الرسوم',
            'فحص وتخليص',
            'تسليم نهائي',
          ],
        },
      ],
    },
    {
      title: 'حلول الدفع الإلكتروني',
      subtitle: 'تقنيات مالية حديثة لتسهيل معاملاتك التجارية',
      bgColor: 'bg-[#f0fdf4]',
      accentColor: '#059669',
      services: [
        {
          title: 'أجهزة الدفع الإلكتروني POS',
          description: 'أحدث أجهزة الدفع',
          icon: CreditCard,
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['توريد أجهزة POS', 'تركيب وتشغيل', 'صيانة دورية', 'دعم فني'],
        },
        {
          title: 'بطاقات الدفع الذكية',
          description: 'معايير أمان عالمية',
          icon: Wallet,
          image:
            'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'بطاقات EMV',
            'بطاقات NFC',
            'تخصيص وطباعة',
            'إدارة البطاقات',
          ],
        },
        {
          title: 'حلول الدفع عبر الهاتف',
          description: 'عمليات أسرع وأسهل',
          icon: Smartphone,
          image:
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['Apple Pay', 'Google Pay', 'QR Payment', 'ربط مع التطبيقات'],
        },
      ],
    },
    {
      title: 'أجهزة الحاسب والتقنية',
      subtitle: 'تجهيزات تقنية متطورة للمكاتب والشركات',
      bgColor: 'bg-[#faf5ff]',
      accentColor: '#7c3aed',
      services: [
        {
          title: 'أجهزة الكمبيوتر المكتبية',
          description: 'أداء عالي للشركات',
          icon: Monitor,
          image:
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['توريد أجهزة', 'إعداد وتجهيز', 'صيانة', 'دعم فني'],
        },
        {
          title: 'أجهزة اللابتوب',
          description: 'أفضل العلامات العالمية',
          icon: Laptop,
          image:
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['بيع أجهزة', 'توريد للشركات', 'إعداد أنظمة', 'صيانة'],
        },
        {
          title: 'الطابعات والماسحات',
          description: 'حلول طباعة متطورة',
          icon: Printer,
          image:
            'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'طابعات ليزر',
            'طابعات نافثة',
            'ماسحات ضوئية',
            'أحبار وملحقات',
          ],
        },
        {
          title: 'الشاشات والملحقات',
          description: 'دقة عالية لكل الاستخدامات',
          icon: MonitorSmartphone,
          image:
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['شاشات مكتبية', 'شاشات عرض', 'لوحات مفاتيح', 'إكسسوارات'],
        },
        {
          title: 'السيرفرات ومراكز البيانات',
          description: 'بنية تحتية رقمية',
          icon: Server,
          image:
            'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'سيرفرات Rack',
            'وحدات تخزين',
            'حلول نسخ احتياطي',
            'إعداد مراكز بيانات',
          ],
        },
      ],
    },
    {
      title: 'البرمجيات والتطوير',
      subtitle: 'حلول برمجية ذكية لدعم نمو أعمالك',
      bgColor: 'bg-[#fffbeb]',
      accentColor: '#ea580c',
      services: [
        {
          title: 'البرمجيات وأنظمة الشركات',
          description: 'برمجيات احترافية',
          icon: Code,
          image:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['ERP', 'CRM', 'أنظمة محاسبة', 'أنظمة موارد بشرية'],
        },
        {
          title: 'تطوير التطبيقات والأنظمة',
          description: 'حلول مصممة خصيصًا',
          icon: AppWindow,
          image:
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'تطبيقات موبايل',
            'أنظمة ويب',
            'برمجيات خاصة',
            'تكامل الأنظمة',
          ],
        },
      ],
    },
    {
      title: 'الشبكات والاتصالات',
      subtitle: 'بنية تحتية قوية لاتصال دائم ومستقر',
      bgColor: 'bg-[#ecfeff]',
      accentColor: '#0891b2',
      services: [
        {
          title: 'أجهزة الاتصالات والشبكات',
          description: 'معايير عالمية للأداء',
          icon: Radio,
          image:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['راوترات', 'سويتشات', 'مودمات', 'أجهزة اتصال'],
        },
        {
          title: 'تمديدات الشبكات والألياف',
          description: 'سرعة اتصال عالية',
          icon: Cable,
          image:
            'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'تمديدات كابلات',
            'ألياف ضوئية',
            'تركيب نقاط شبكة',
            'اختبار واعتماد',
          ],
        },
        {
          title: 'قطع غيار الحاسب الآلي',
          description: 'قطع أصلية ومضمونة',
          icon: Cpu,
          image:
            'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['لوحات أم', 'رامات', 'أقراص SSD', 'مزودات طاقة'],
        },
        {
          title: 'قطع غيار الأجهزة الإلكترونية',
          description: 'جودة معتمدة',
          icon: CircuitBoard,
          image:
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['لوحات إلكترونية', 'شاشات', 'حساسات', 'وحدات تحكم'],
        },
      ],
    },
    {
      title: 'الوسائط والترفيه',
      subtitle: 'تجهيزات صوتية ومرئية وترفيهية متكاملة',
      bgColor: 'bg-[#fff1f2]',
      accentColor: '#e11d48',
      services: [
        {
          title: 'الأجهزة السمعية والمرئية',
          description: 'حلول صوت وصورة',
          icon: Speaker,
          image:
            'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['سماعات', 'شاشات', 'أنظمة صوت', 'أجهزة عرض'],
        },
        {
          title: 'أنظمة المراقبة والتسجيل',
          description: 'حماية على مدار الساعة',
          icon: Camera,
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'كاميرات CCTV',
            'DVR / NVR',
            'أنظمة مراقبة ذكية',
            'تركيب وصيانة',
          ],
        },
        {
          title: 'معدات التصوير الفوتوغرافي',
          description: 'للمحترفين والهواة',
          icon: CameraIcon,
          image:
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['كاميرات', 'عدسات', 'فلاشات', 'حقائب وحوامل'],
        },
        {
          title: 'معدات التصوير السينمائي',
          description: 'حلول إنتاج متقدمة',
          icon: Film,
          image:
            'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            'كاميرات سينما',
            'إضاءة سينمائية',
            'ميكروفونات',
            'معدات ستوديو',
          ],
        },
        {
          title: 'أجهزة ألعاب الفيديو',
          description: 'أحدث منصات الترفيه',
          icon: Gamepad2,
          image:
            'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['بلايستيشن', 'إكس بوكس', 'نينتندو', 'أجهزة VR'],
        },
        {
          title: 'إكسسوارات الألعاب الرقمية',
          description: 'تجربة لعب متكاملة',
          icon: Joystick,
          image:
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['يد تحكم', 'سماعات', 'شواحن', 'بطاقات رقمية'],
        },
      ],
    },
    {
      title: 'الهواتف والأجهزة الاستهلاكية',
      subtitle: 'أحدث الأجهزة الذكية والمنزلية',
      bgColor: 'bg-white',
      accentColor: '#d97706',
      services: [
        {
          title: 'الهواتف المتحركة',
          description: 'أحدث الإصدارات',
          icon: Phone,
          image:
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['بيع هواتف', 'توريد للشركات', 'إعداد أنظمة', 'صيانة'],
        },
        {
          title: 'إكسسوارات الهواتف',
          description: 'حماية وأداء',
          icon: Headphones,
          image:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['جرابات', 'سماعات', 'شواحن', 'كابلات'],
        },
        {
          title: 'الأجهزة الكهربائية المنزلية',
          description: 'جودة عالية للمنزل',
          icon: Refrigerator,
          image:
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['ثلاجات', 'غسالات', 'مجففات', 'أجهزة صغيرة'],
        },
        {
          title: 'المواقد والأفران والطباخات',
          description: 'تجهيزات مطابخ متطورة',
          icon: CookingPot,
          image:
            'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['أفران', 'طباخات', 'شفاطات', 'تركيب وصيانة'],
        },
        {
          title: 'الساعات وقطع غيارها',
          description: 'دقة وأناقة',
          icon: Watch,
          image:
            'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800&h=600',
          points: ['ساعات رجالي', 'ساعات نسائي', 'بطاريات', 'صيانة دقيقة'],
        },
      ],
    },
  ]
  const filterCategories = sections.map((s) => ({
    title: s.title,
    accentColor: s.accentColor,
  }))
  const filteredSections = activeFilter
    ? sections.filter((s) => s.title === activeFilter)
    : sections
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <HeroSection />

      <div id="services-start">
        <FilterBar
          categories={filterCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter || 'all'}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {filteredSections.map((section, idx) => (
              <ServiceSection
                key={idx}
                title={section.title}
                subtitle={section.subtitle}
                backgroundColor={section.bgColor}
                accentColor={section.accentColor}
              >
                {section.services.map((service, sIdx) => (
                  <ServiceCard
                    key={sIdx}
                    title={service.title}
                    description={service.description}
                    points={service.points}
                    icon={service.icon}
                    image={service.image}
                    colorClass=""
                    accentColor={section.accentColor}
                    delay={sIdx * 0.1}
                  />
                ))}
              </ServiceSection>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <CTASection />
    </div>
  )
}
