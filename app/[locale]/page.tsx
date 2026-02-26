import BusinessEntitySection from "@/components/screens/home/business-entity-section";
import CommercialDomainsSection from "@/components/screens/home/commercial-domains-section";
import CommercialInfluenceSection from "@/components/screens/home/commercial-influence-section";
import CommercialLeadershipPlatformSection from "@/components/screens/home/commercial-leadership-platform-section";
import CommercialProtectionSection from "@/components/screens/home/commercial-protection-section";
import DigitalTransformationSection from "@/components/screens/home/digital-transformation-section";
import EcommerceUnitSection from "@/components/screens/home/ecommerce-unit-section";
import FranchiseUnitSection from "@/components/screens/home/franchise-unit-section";
import Header from "@/components/screens/home/header";
import InternationalExpansionSection from "@/components/screens/home/international-expansion-section";
import MajorProjectsUnitSection from "@/components/screens/home/major-projects-unit-section";
import OperationalLeadershipSection from "@/components/screens/home/operational-leadership-section";
import SuppliersNetworkSection from "@/components/screens/home/suppliers-network-section";
import WorkMethodologySection from "@/components/screens/home/work-methodology-section";
import PowerIndicatorsSection from "@/components/screens/home/power-indicators-section";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page() {
  return (
    <main>CommercialProtectionSection
      <Header />
      <BusinessEntitySection />
      <CommercialInfluenceSection />
      <PowerIndicatorsSection />
      {/* <CommercialLeadershipPlatformSection /> */}
      <CommercialProtectionSection />
      <CommercialDomainsSection />
      <SuppliersNetworkSection />
      <DigitalTransformationSection />
      <EcommerceUnitSection />
      <FranchiseUnitSection />
      <InternationalExpansionSection />
      <MajorProjectsUnitSection />
      {/* <WorkMethodologySection /> */}
      <OperationalLeadershipSection />
    </main>
  );
}
