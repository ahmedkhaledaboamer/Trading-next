import { BusinessUnits } from "@/components/screens/business-path/BusinessUnits";
import { ClientMessage } from "@/components/screens/business-path/ClientMessage";
import { HeroSection } from "@/components/screens/business-path/HeroSection";
import { ServicesSection } from "@/components/screens/business-path/ServicesSection";
import { VisionMissionGoal } from "@/components/screens/business-path/VisionMissionGoal";
import { WhyKEP } from "@/components/screens/business-path/WhyKEP";
import { getLocale, getTranslations } from "next-intl/server";

export default async function BusinessPathPage() {
  const t = await getTranslations("pages.businessPath");
  const locale = await getLocale();
  return (
    <>
    <HeroSection />
      <VisionMissionGoal locale={locale} />                
      <ClientMessage />
      <ServicesSection />
      <WhyKEP locale={locale} />
      <BusinessUnits locale={locale} />
     </>
  );
}
