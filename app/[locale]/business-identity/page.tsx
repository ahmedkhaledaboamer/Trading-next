import { BrandConclusion } from "@/components/screens/business-path/BrandConclusion";
import { BrandIntro } from "@/components/screens/business-path/BrandIntro";
import { BrandOperations } from "@/components/screens/business-path/BrandOperations";
import { BrandPartner } from "@/components/screens/business-path/BrandPartner";
import { BrandStatement } from "@/components/screens/business-path/BrandStatement";
import { HeroSection } from "@/components/screens/business-path/HeroSection";
import { getTranslations } from "next-intl/server";

export default async function BusinessIdentityPage() {
  const t = await getTranslations("pages.businessIdentity");

  return (
    <>
        
    <HeroSection />
    <BrandIntro />
    <BrandStatement />
    <BrandOperations />
    <BrandPartner />
    <BrandConclusion />
     </>
  );
}
