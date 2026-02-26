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
  Package,
  Truck,
  Shield,
  Database,
  Cloud,
  Settings,
  Wifi,
  HardDrive,
  Plug,
  Mouse,
} from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'
import { CTASection } from '@/components/screens/services/CTASection'
import { HeroSection } from '@/components/screens/services/HeroSection'
import {
  FilterBar,
  ServiceSection,
} from '@/components/screens/services/ServiceSection'
import { ServiceCard } from '@/components/screens/services/ServiceCard'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function ServicesPageClient({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const tSections = useTranslations('services.sections')
  const tFilters = useTranslations('services.filters')

  const sections = [
    /* ================= التجارة والخدمات اللوجستية (8) ================= */
    {
      title: tSections('tradeLogistics.title'),
      subtitle: tSections('tradeLogistics.subtitle'),
      bgColor: 'bg-white',
      accentColor: '#2563eb',
      services: [
        {
          title: tSections('tradeLogistics.services.import.title'),
          description: tSections('tradeLogistics.services.import.description'),
          icon: Ship,
          image:
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.import.points.0'),
            tSections('tradeLogistics.services.import.points.1'),
            tSections('tradeLogistics.services.import.points.2'),
            tSections('tradeLogistics.services.import.points.3'),
          ],
        },
        {
          title: tSections('tradeLogistics.services.export.title'),
          description: tSections('tradeLogistics.services.export.description'),
          icon: Globe,
          image:
            'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.export.points.0'),
            tSections('tradeLogistics.services.export.points.1'),
            tSections('tradeLogistics.services.export.points.2'),
            tSections('tradeLogistics.services.export.points.3'),
          ],
        },
        {
          title: tSections('tradeLogistics.services.seaShipping.title'),
          description: tSections(
            'tradeLogistics.services.seaShipping.description',
          ),
          icon: Anchor,
          image:
            'https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.seaShipping.points.0'),
            tSections('tradeLogistics.services.seaShipping.points.1'),
            tSections('tradeLogistics.services.seaShipping.points.2'),
            tSections('tradeLogistics.services.seaShipping.points.3'),
          ],
        },
        {
          title: tSections('tradeLogistics.services.airShipping.title'),
          description: tSections(
            'tradeLogistics.services.airShipping.description',
          ),
          icon: Plane,
          image:
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.airShipping.points.0'),
            tSections('tradeLogistics.services.airShipping.points.1'),
            tSections('tradeLogistics.services.airShipping.points.2'),
            tSections('tradeLogistics.services.airShipping.points.3'),
          ],
        },
        {
          title: tSections('tradeLogistics.services.customs.title'),
          description: tSections(
            'tradeLogistics.services.customs.description',
          ),
          icon: FileCheck,
          image:
            'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.customs.points.0'),
            tSections('tradeLogistics.services.customs.points.1'),
            tSections('tradeLogistics.services.customs.points.2'),
            tSections('tradeLogistics.services.customs.points.3'),
          ],
        },
        {
          title: tSections('tradeLogistics.services.storage.title'),
          description: tSections(
            'tradeLogistics.services.storage.description',
          ),
          icon: Package,
          image:
            'https://images.unsplash.com/photo-1581093588401-22f5c6d2c7d0?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.storage.points.0'),
            tSections('tradeLogistics.services.storage.points.1'),
            tSections('tradeLogistics.services.storage.points.2'),
            tSections('tradeLogistics.services.storage.points.3'),
          ],
        },
        {
          title: tSections('tradeLogistics.services.landTransport.title'),
          description: tSections(
            'tradeLogistics.services.landTransport.description',
          ),
          icon: Truck,
          image:
            'https://images.unsplash.com/photo-1501706362039-c6e08b7c40d2?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.landTransport.points.0'),
            tSections('tradeLogistics.services.landTransport.points.1'),
            tSections('tradeLogistics.services.landTransport.points.2'),
            tSections('tradeLogistics.services.landTransport.points.3'),
          ],
        },
        {
          title: tSections('tradeLogistics.services.commercialInsurance.title'),
          description: tSections(
            'tradeLogistics.services.commercialInsurance.description',
          ),
          icon: Shield,
          image:
            'https://images.unsplash.com/photo-1565372919396-5a0f6c89bca1?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('tradeLogistics.services.commercialInsurance.points.0'),
            tSections('tradeLogistics.services.commercialInsurance.points.1'),
            tSections('tradeLogistics.services.commercialInsurance.points.2'),
            tSections('tradeLogistics.services.commercialInsurance.points.3'),
          ],
        },
      ],
    },

    /* ================= الدفع الإلكتروني (4) ================= */
    {
      title: tSections('ePayments.title'),
      subtitle: tSections('ePayments.subtitle'),
      bgColor: 'bg-[#f0fdf4]',
      accentColor: '#059669',
      services: [
        {
          title: tSections('ePayments.services.posDevices.title'),
          description: tSections(
            'ePayments.services.posDevices.description',
          ),
          icon: CreditCard,
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('ePayments.services.posDevices.points.0'),
            tSections('ePayments.services.posDevices.points.1'),
            tSections('ePayments.services.posDevices.points.2'),
            tSections('ePayments.services.posDevices.points.3'),
          ],
        },
        {
          title: tSections('ePayments.services.smartCards.title'),
          description: tSections(
            'ePayments.services.smartCards.description',
          ),
          icon: Wallet,
          image:
            'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('ePayments.services.smartCards.points.0'),
            tSections('ePayments.services.smartCards.points.1'),
            tSections('ePayments.services.smartCards.points.2'),
            tSections('ePayments.services.smartCards.points.3'),
          ],
        },
        {
          title: tSections('ePayments.services.mobilePayments.title'),
          description: tSections(
            'ePayments.services.mobilePayments.description',
          ),
          icon: Smartphone,
          image:
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('ePayments.services.mobilePayments.points.0'),
            tSections('ePayments.services.mobilePayments.points.1'),
            tSections('ePayments.services.mobilePayments.points.2'),
            tSections('ePayments.services.mobilePayments.points.3'),
          ],
        },
        {
          title: tSections('ePayments.services.paymentGateways.title'),
          description: tSections(
            'ePayments.services.paymentGateways.description',
          ),
          icon: Database,
          image:
            'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('ePayments.services.paymentGateways.points.0'),
            tSections('ePayments.services.paymentGateways.points.1'),
            tSections('ePayments.services.paymentGateways.points.2'),
            tSections('ePayments.services.paymentGateways.points.3'),
          ],
        },
      ],
    },

    /* ================= الحاسب والتقنية (8) ================= */
    {
      title: tSections('computingTech.title'),
      subtitle: tSections('computingTech.subtitle'),
      bgColor: 'bg-[#faf5ff]',
      accentColor: '#7c3aed',
      services: [
        {
          title: tSections('computingTech.services.desktopComputers.title'),
          description: tSections(
            'computingTech.services.desktopComputers.description',
          ),
          icon: Monitor,
          image:
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.desktopComputers.points.0'),
            tSections('computingTech.services.desktopComputers.points.1'),
            tSections('computingTech.services.desktopComputers.points.2'),
            tSections('computingTech.services.desktopComputers.points.3'),
          ],
        },
        {
          title: tSections('computingTech.services.laptops.title'),
          description: tSections(
            'computingTech.services.laptops.description',
          ),
          icon: Laptop,
          image:
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.laptops.points.0'),
            tSections('computingTech.services.laptops.points.1'),
            tSections('computingTech.services.laptops.points.2'),
            tSections('computingTech.services.laptops.points.3'),
          ],
        },
        {
          title: tSections('computingTech.services.printersScanners.title'),
          description: tSections(
            'computingTech.services.printersScanners.description',
          ),
          icon: Printer,
          image:
            'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.printersScanners.points.0'),
            tSections('computingTech.services.printersScanners.points.1'),
            tSections('computingTech.services.printersScanners.points.2'),
            tSections('computingTech.services.printersScanners.points.3'),
          ],
        },
        {
          title: tSections('computingTech.services.monitorsAccessories.title'),
          description: tSections(
            'computingTech.services.monitorsAccessories.description',
          ),
          icon: MonitorSmartphone,
          image:
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.monitorsAccessories.points.0'),
            tSections('computingTech.services.monitorsAccessories.points.1'),
            tSections('computingTech.services.monitorsAccessories.points.2'),
            tSections('computingTech.services.monitorsAccessories.points.3'),
          ],
        },
        {
          title: tSections('computingTech.services.serversDataCenters.title'),
          description: tSections(
            'computingTech.services.serversDataCenters.description',
          ),
          icon: Server,
          image:
            'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.serversDataCenters.points.0'),
            tSections('computingTech.services.serversDataCenters.points.1'),
            tSections('computingTech.services.serversDataCenters.points.2'),
            tSections('computingTech.services.serversDataCenters.points.3'),
          ],
        },
        {
          title: tSections('computingTech.services.storageUnits.title'),
          description: tSections(
            'computingTech.services.storageUnits.description',
          ),
          icon: HardDrive,
          image:
            'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.storageUnits.points.0'),
            tSections('computingTech.services.storageUnits.points.1'),
            tSections('computingTech.services.storageUnits.points.2'),
            tSections('computingTech.services.storageUnits.points.3'),
          ],
        },
        {
          title: tSections('computingTech.services.peripherals.title'),
          description: tSections(
            'computingTech.services.peripherals.description',
          ),
          icon: Mouse,
          image:
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.peripherals.points.0'),
            tSections('computingTech.services.peripherals.points.1'),
            tSections('computingTech.services.peripherals.points.2'),
            tSections('computingTech.services.peripherals.points.3'),
          ],
        },
        {
          title: tSections('computingTech.services.osSetup.title'),
          description: tSections(
            'computingTech.services.osSetup.description',
          ),
          icon: Settings,
          image:
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('computingTech.services.osSetup.points.0'),
            tSections('computingTech.services.osSetup.points.1'),
            tSections('computingTech.services.osSetup.points.2'),
            tSections('computingTech.services.osSetup.points.3'),
          ],
        },
      ],
    },

    /* ================= البرمجيات (4) ================= */
    {
      title: tSections('softwareDev.title'),
      subtitle: tSections('softwareDev.subtitle'),
      bgColor: 'bg-[#fffbeb]',
      accentColor: '#ea580c',
      services: [
        {
          title: tSections('softwareDev.services.corporateSystems.title'),
          description: tSections(
            'softwareDev.services.corporateSystems.description',
          ),
          icon: Code,
          image:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('softwareDev.services.corporateSystems.points.0'),
            tSections('softwareDev.services.corporateSystems.points.1'),
            tSections('softwareDev.services.corporateSystems.points.2'),
            tSections('softwareDev.services.corporateSystems.points.3'),
          ],
        },
        {
          title: tSections('softwareDev.services.appDevelopment.title'),
          description: tSections(
            'softwareDev.services.appDevelopment.description',
          ),
          icon: AppWindow,
          image:
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('softwareDev.services.appDevelopment.points.0'),
            tSections('softwareDev.services.appDevelopment.points.1'),
            tSections('softwareDev.services.appDevelopment.points.2'),
            tSections('softwareDev.services.appDevelopment.points.3'),
          ],
        },
        {
          title: tSections('softwareDev.services.cloudComputing.title'),
          description: tSections(
            'softwareDev.services.cloudComputing.description',
          ),
          icon: Cloud,
          image:
            'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('softwareDev.services.cloudComputing.points.0'),
            tSections('softwareDev.services.cloudComputing.points.1'),
            tSections('softwareDev.services.cloudComputing.points.2'),
            tSections('softwareDev.services.cloudComputing.points.3'),
          ],
        },
        {
          title: tSections('softwareDev.services.softwareSupport.title'),
          description: tSections(
            'softwareDev.services.softwareSupport.description',
          ),
          icon: Shield,
          image:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('softwareDev.services.softwareSupport.points.0'),
            tSections('softwareDev.services.softwareSupport.points.1'),
            tSections('softwareDev.services.softwareSupport.points.2'),
            tSections('softwareDev.services.softwareSupport.points.3'),
          ],
        },
      ],
    },

    /* الشبكات (4) كما هي */
    {
      title: tSections('networks.title'),
      subtitle: tSections('networks.subtitle'),
      bgColor: 'bg-[#ecfeff]',
      accentColor: '#0891b2',
      services: [
        {
          title: tSections('networks.services.communicationDevices.title'),
          description: tSections(
            'networks.services.communicationDevices.description',
          ),
          icon: Radio,
          image:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('networks.services.communicationDevices.points.0'),
            tSections('networks.services.communicationDevices.points.1'),
            tSections('networks.services.communicationDevices.points.2'),
            tSections('networks.services.communicationDevices.points.3'),
          ],
        },
        {
          title: tSections('networks.services.cablingFiber.title'),
          description: tSections(
            'networks.services.cablingFiber.description',
          ),
          icon: Cable,
          image:
            'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('networks.services.cablingFiber.points.0'),
            tSections('networks.services.cablingFiber.points.1'),
            tSections('networks.services.cablingFiber.points.2'),
            tSections('networks.services.cablingFiber.points.3'),
          ],
        },
        {
          title: tSections('networks.services.computerParts.title'),
          description: tSections(
            'networks.services.computerParts.description',
          ),
          icon: Cpu,
          image:
            'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('networks.services.computerParts.points.0'),
            tSections('networks.services.computerParts.points.1'),
            tSections('networks.services.computerParts.points.2'),
            tSections('networks.services.computerParts.points.3'),
          ],
        },
        {
          title: tSections('networks.services.electronicParts.title'),
          description: tSections(
            'networks.services.electronicParts.description',
          ),
          icon: CircuitBoard,
          image:
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('networks.services.electronicParts.points.0'),
            tSections('networks.services.electronicParts.points.1'),
            tSections('networks.services.electronicParts.points.2'),
            tSections('networks.services.electronicParts.points.3'),
          ],
        },
      ],
    },

    /* الوسائط والترفيه (8) */
    {
      title: tSections('mediaEntertainment.title'),
      subtitle: tSections('mediaEntertainment.subtitle'),
      bgColor: 'bg-[#fff1f2]',
      accentColor: '#e11d48',
      services: [
        {
          title: tSections('mediaEntertainment.services.avDevices.title'),
          description: tSections(
            'mediaEntertainment.services.avDevices.description',
          ),
          icon: Speaker,
          image:
            'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mediaEntertainment.services.avDevices.points.0'),
            tSections('mediaEntertainment.services.avDevices.points.1'),
            tSections('mediaEntertainment.services.avDevices.points.2'),
            tSections('mediaEntertainment.services.avDevices.points.3'),
          ],
        },
        {
          title: tSections('mediaEntertainment.services.surveillance.title'),
          description: tSections(
            'mediaEntertainment.services.surveillance.description',
          ),
          icon: Camera,
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mediaEntertainment.services.surveillance.points.0'),
            tSections('mediaEntertainment.services.surveillance.points.1'),
            tSections('mediaEntertainment.services.surveillance.points.2'),
            tSections('mediaEntertainment.services.surveillance.points.3'),
          ],
        },
        {
          title: tSections('mediaEntertainment.services.photoEquipment.title'),
          description: tSections(
            'mediaEntertainment.services.photoEquipment.description',
          ),
          icon: CameraIcon,
          image:
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mediaEntertainment.services.photoEquipment.points.0'),
            tSections('mediaEntertainment.services.photoEquipment.points.1'),
            tSections('mediaEntertainment.services.photoEquipment.points.2'),
            tSections('mediaEntertainment.services.photoEquipment.points.3'),
          ],
        },
        {
          title: tSections('mediaEntertainment.services.cinemaEquipment.title'),
          description: tSections(
            'mediaEntertainment.services.cinemaEquipment.description',
          ),
          icon: Film,
          image:
            'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mediaEntertainment.services.cinemaEquipment.points.0'),
            tSections('mediaEntertainment.services.cinemaEquipment.points.1'),
            tSections('mediaEntertainment.services.cinemaEquipment.points.2'),
            tSections('mediaEntertainment.services.cinemaEquipment.points.3'),
          ],
        },
        {
          title: tSections('mediaEntertainment.services.gameConsoles.title'),
          description: tSections(
            'mediaEntertainment.services.gameConsoles.description',
          ),
          icon: Gamepad2,
          image:
            'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mediaEntertainment.services.gameConsoles.points.0'),
            tSections('mediaEntertainment.services.gameConsoles.points.1'),
            tSections('mediaEntertainment.services.gameConsoles.points.2'),
            tSections('mediaEntertainment.services.gameConsoles.points.3'),
          ],
        },
        {
          title: tSections('mediaEntertainment.services.gamingAccessories.title'),
          description: tSections(
            'mediaEntertainment.services.gamingAccessories.description',
          ),
          icon: Joystick,
          image:
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mediaEntertainment.services.gamingAccessories.points.0'),
            tSections('mediaEntertainment.services.gamingAccessories.points.1'),
            tSections('mediaEntertainment.services.gamingAccessories.points.2'),
            tSections('mediaEntertainment.services.gamingAccessories.points.3'),
          ],
        },
        {
          title: tSections(
            'mediaEntertainment.services.homeTheaterSystems.title',
          ),
          description: tSections(
            'mediaEntertainment.services.homeTheaterSystems.description',
          ),
          icon: Speaker,
          image:
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections(
              'mediaEntertainment.services.homeTheaterSystems.points.0',
            ),
            tSections(
              'mediaEntertainment.services.homeTheaterSystems.points.1',
            ),
            tSections(
              'mediaEntertainment.services.homeTheaterSystems.points.2',
            ),
            tSections(
              'mediaEntertainment.services.homeTheaterSystems.points.3',
            ),
          ],
        },
        {
          title: tSections(
            'mediaEntertainment.services.proDisplayScreens.title',
          ),
          description: tSections(
            'mediaEntertainment.services.proDisplayScreens.description',
          ),
          icon: Monitor,
          image:
            'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections(
              'mediaEntertainment.services.proDisplayScreens.points.0',
            ),
            tSections(
              'mediaEntertainment.services.proDisplayScreens.points.1',
            ),
            tSections(
              'mediaEntertainment.services.proDisplayScreens.points.2',
            ),
            tSections(
              'mediaEntertainment.services.proDisplayScreens.points.3',
            ),
          ],
        },
      ],
    },

    /* الهواتف والاستهلاكية (8) */
    {
      title: tSections('mobilesConsumer.title'),
      subtitle: tSections('mobilesConsumer.subtitle'),
      bgColor: 'bg-white',
      accentColor: '#d97706',
      services: [
        {
          title: tSections('mobilesConsumer.services.mobilePhones.title'),
          description: tSections(
            'mobilesConsumer.services.mobilePhones.description',
          ),
          icon: Phone,
          image:
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.mobilePhones.points.0'),
            tSections('mobilesConsumer.services.mobilePhones.points.1'),
            tSections('mobilesConsumer.services.mobilePhones.points.2'),
            tSections('mobilesConsumer.services.mobilePhones.points.3'),
          ],
        },
        {
          title: tSections('mobilesConsumer.services.phoneAccessories.title'),
          description: tSections(
            'mobilesConsumer.services.phoneAccessories.description',
          ),
          icon: Headphones,
          image:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.phoneAccessories.points.0'),
            tSections('mobilesConsumer.services.phoneAccessories.points.1'),
            tSections('mobilesConsumer.services.phoneAccessories.points.2'),
            tSections('mobilesConsumer.services.phoneAccessories.points.3'),
          ],
        },
        {
          title: tSections('mobilesConsumer.services.homeAppliances.title'),
          description: tSections(
            'mobilesConsumer.services.homeAppliances.description',
          ),
          icon: Refrigerator,
          image:
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.homeAppliances.points.0'),
            tSections('mobilesConsumer.services.homeAppliances.points.1'),
            tSections('mobilesConsumer.services.homeAppliances.points.2'),
            tSections('mobilesConsumer.services.homeAppliances.points.3'),
          ],
        },
        {
          title: tSections('mobilesConsumer.services.cookersOvens.title'),
          description: tSections(
            'mobilesConsumer.services.cookersOvens.description',
          ),
          icon: CookingPot,
          image:
            'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.cookersOvens.points.0'),
            tSections('mobilesConsumer.services.cookersOvens.points.1'),
            tSections('mobilesConsumer.services.cookersOvens.points.2'),
            tSections('mobilesConsumer.services.cookersOvens.points.3'),
          ],
        },
        {
          title: tSections('mobilesConsumer.services.watchesParts.title'),
          description: tSections(
            'mobilesConsumer.services.watchesParts.description',
          ),
          icon: Watch,
          image:
            'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.watchesParts.points.0'),
            tSections('mobilesConsumer.services.watchesParts.points.1'),
            tSections('mobilesConsumer.services.watchesParts.points.2'),
            tSections('mobilesConsumer.services.watchesParts.points.3'),
          ],
        },
        {
          title: tSections('mobilesConsumer.services.wearables.title'),
          description: tSections(
            'mobilesConsumer.services.wearables.description',
          ),
          icon: Watch,
          image:
            'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.wearables.points.0'),
            tSections('mobilesConsumer.services.wearables.points.1'),
            tSections('mobilesConsumer.services.wearables.points.2'),
            tSections('mobilesConsumer.services.wearables.points.3'),
          ],
        },
        {
          title: tSections('mobilesConsumer.services.smartHome.title'),
          description: tSections(
            'mobilesConsumer.services.smartHome.description',
          ),
          icon: Wifi,
          image:
            'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.smartHome.points.0'),
            tSections('mobilesConsumer.services.smartHome.points.1'),
            tSections('mobilesConsumer.services.smartHome.points.2'),
            tSections('mobilesConsumer.services.smartHome.points.3'),
          ],
        },
        {
          title: tSections('mobilesConsumer.services.phoneParts.title'),
          description: tSections(
            'mobilesConsumer.services.phoneParts.description',
          ),
          icon: Plug,
          image:
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800&h=600',
          points: [
            tSections('mobilesConsumer.services.phoneParts.points.0'),
            tSections('mobilesConsumer.services.phoneParts.points.1'),
            tSections('mobilesConsumer.services.phoneParts.points.2'),
            tSections('mobilesConsumer.services.phoneParts.points.3'),
          ],
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
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <HeroSection />

      <div id="services-start" className='bg-gray-50/50"'>
        <FilterBar
          categories={filterCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          scrollToSectionId="services-start"
          allLabel={tFilters('all')}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
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
                    isRTL={isRTL}
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
