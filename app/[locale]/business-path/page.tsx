import { BusinessUnits } from "@/components/screens/business-path/BusinessUnits";
import { ClientMessage } from "@/components/screens/business-path/ClientMessage";
import { HeroSection } from "@/components/screens/business-path/HeroSection";
import { ServicesSection } from "@/components/screens/business-path/ServicesSection";
import { VisionMissionGoal } from "@/components/screens/business-path/VisionMissionGoal";
import { WhyKEP } from "@/components/screens/business-path/WhyKEP";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.businessPath" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BusinessPathPage() {
  const locale = await getLocale();

  return (
    <>
      <HeroSection locale={locale} />
      <VisionMissionGoal locale={locale} />
      <ClientMessage />
      <ServicesSection />
      <WhyKEP locale={locale} />
      <BusinessUnits locale={locale} />
    </>
  );
}
