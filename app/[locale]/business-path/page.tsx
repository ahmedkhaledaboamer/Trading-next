import { BusinessUnits } from "@/components/screens/business-identity/BusinessUnits";
import { ClientMessage } from "@/components/screens/business-identity/ClientMessage";
 import { HeroSection } from "@/components/screens/business-identity/HeroSection";
import { ServicesSection } from "@/components/screens/business-identity/ServicesSection";
import { VisionMissionGoal } from "@/components/screens/business-identity/VisionMissionGoal";
import { WhyKEP } from "@/components/screens/business-identity/WhyKEP";
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
