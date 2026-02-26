import { BrandConclusion } from "@/components/screens/business-identity/BrandConclusion";
import { BrandIntro } from "@/components/screens/business-identity/BrandIntro";
import { BrandOperations } from "@/components/screens/business-identity/BrandOperations";
import { BrandPartner } from "@/components/screens/business-identity/BrandPartner";
import { BrandStatement } from "@/components/screens/business-identity/BrandStatement";
import { HeroSection } from "@/components/screens/business-identity/HeroSection";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "pages.businessIdentity",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BusinessIdentityPage() {
  const locale = await getLocale();

  return (
    <>
      <HeroSection />
      <BrandIntro locale={locale} />
      <BrandStatement locale={locale} />
      <BrandOperations />
      <BrandPartner />
      <BrandConclusion />
    </>
  );
}
