import { DepartmentOrg } from "@/components/screens/exucetion/department-org";
import ExecutionHero from "@/components/screens/exucetion/execution-hero";
import { WorkflowProcess } from "@/components/screens/exucetion/WorkflowProcess";
import { ResponseTimeCards } from "@/components/screens/exucetion/ResponseTimeCards";
import { EscalationPath } from "@/components/screens/exucetion/scalationPath";
import { DocumentationSystem } from "@/components/screens/exucetion/DocumentationSystem";
import { PostDelivery } from "@/components/screens/exucetion/PostDelivery";
import { ClosingStatement } from "@/components/screens/exucetion/ClosingStatement";
import { getTranslations } from "next-intl/server";
import { ContactChannels } from "@/components/screens/exucetion/ContactChannels";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.execution" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ExecutionPage() {
  return (
    < >
      <ExecutionHero />
      <DepartmentOrg />
      <ContactChannels />
      <WorkflowProcess />
      <ResponseTimeCards />
      <EscalationPath />
      <DocumentationSystem />
      <PostDelivery />
      <ClosingStatement />
    </>
  );
}
