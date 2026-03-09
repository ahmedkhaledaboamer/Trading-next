import { ServicesPageClient } from "@/components/screens/services/ServicesPageClient";
import { getLocale, getTranslations } from "next-intl/server";

// ISR: revalidate every 6 hours
export const revalidate = 21600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage() {
  const locale = await getLocale();
  return <ServicesPageClient locale={locale} />;
}