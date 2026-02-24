import { getTranslations } from "next-intl/server";

export default async function ServicesPage() {
  const t = await getTranslations("pages.services");

  return (
    <section className="container py-16">
      <h1 className="text-primary font-bold text-4xl mb-8">{t("title")}</h1>
      <p className="text-white/90 text-lg leading-relaxed">{t("description")}</p>
    </section>
  );
}
